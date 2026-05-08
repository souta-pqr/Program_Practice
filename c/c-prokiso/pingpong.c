#include <drawlib.h>
#include <stdio.h>
#include <math.h>

int main(void) {
  // --- 変数の宣言 ---
  // バーの幅（barw），バーの高さ（barh）
  int barw = 20, barh = 150;
  // バーの移動量．上下（bardy），左右（bardx）
  int bardy = 50, bardx = 200;
  // バー1のX方向，Y方向の位置
  int bar1x = 70, bar1y = DL_HEIGHT / 2;
  // バー1を操作するキー（upが上移動，downが下移動）
  int bar1kup = 'w', bar1kdown = 's';
  // バー2のX方向，Y方向の位置
  int bar2x = DL_WIDTH - 70, bar2y = DL_HEIGHT / 2;
  // バー2を操作するキー（upが上移動，downが下移動）
  int bar2kup = 'i', bar2kdown = 'k';

  // ボールの半径
  int br = 15;
  // ボールのX方向，Y方向の速度
  float bvx = 4.0, bvy = 2.0;
  // ボールのX方向，Y方向の位置
  int bx = DL_WIDTH / 2, by = DL_HEIGHT / 2;

  // 各プレイヤーのスコア（1が左，2が右）
  int score1 = 0, score2 = 0;
  // スコアを表示する位置
  int sx = DL_WIDTH / 2 - 120, sy = 50;
  // スコアを表示するための文字列
  char sscore[25];

  // dl_get_event用変数
  int t, k, x, y;
  // 待ち時間
  float wait_time = 0.01;
  
  // --- メインルーチン ---

  // drawlibの初期化
  dl_initialize(1.0);

  // --- メインループ ---
  while (1) {
    // --- 操作の受け付け ---
    while (dl_get_event(&t, &k, &x, &y)) {
      if (t == DL_EVENT_KEY) {
      	if (k == bar1kup)
          // バー1を上に移動
          bar1y -= bardy;
        else if (k == bar1kdown)
          // バー1を下に移動
          bar1y += bardy;
        else if (k == bar2kup)
          // バー2を上に移動
          bar2y -= bardy;
        else if (k == bar2kdown)
          // バー2を下に移動
          bar2y += bardy;
      }
    }

    // --- バーの境界処理（画面外に移動しないようにする） ---
    // バー1が上にはみ出ていたら，上の端に移動する
    if (bar1y - barh / 2 < 0)
      bar1y = barh / 2;
    // バー1が下にはみ出ていたら，下の端に移動する
    if (bar1y + barh / 2 > DL_HEIGHT)
      bar1y = DL_HEIGHT - barh / 2;
    // バー2が上にはみ出ていたら，上の端に移動する
    if (bar2y - barh / 2 < 0)
      bar2y = barh / 2;
    // バー2が下にはみ出ていたら，下の端に移動する
    if (bar2y + barh / 2 > DL_HEIGHT)
      bar2y = DL_HEIGHT - barh / 2;

    // --- ボールの移動処理 ---
    // ボールのX位置を更新（速度を足す）
    bx += bvx;
    // ボールが横方向の画面外にはみ出したらボールのX方向の速度を反転させる
    if (bx - br <= 0 || bx + br >= DL_WIDTH) 
      bvx *= -1;
    // ボールのY位置を更新（速度を足す）
    by += bvy;
    // ボールが縦方向の画面外にはみ出たらボールを画面の端に移動し，速度を反転させる
    if (by - br <= 0) {
      by = br + 1;
      bvy *= -1;
    } else if (by + br >= DL_HEIGHT) {
      by = DL_HEIGHT - br - 1;
      bvy *= -1;
    }

    // --- バー1とボールの当たり判定と処理 ---
    if (by > bar1y - barh / 2 && by < bar1y + barh / 2) {
      if (bvx < 0 && bx - br <= bar1x + barw / 2 && bx - br >= bar1x - barw / 2
	        || bvx > 0 && bx + br >= bar1x - barw / 2 && bx + br <= bar1x + barw / 2) {
          bvx *= -1.0;
      }
    }

    // --- バー2とボールの当たり判定と処理 ---
    if (by > bar2y - barh / 2 && by < bar2y + barh / 2) {
      if (bvx < 0 && bx - br <= bar2x + barw / 2 && bx - br >= bar2x - barw / 2
        || bvx > 0 && bx + br >= bar2x - barw / 2 && bx + br <= bar2x + barw / 2) {
          bvx *= -1.0;
      }
    }

    // --- 画面の右側にボールが到達したときの処理 ---
    if (bx - br <= 0) {
      // プレイヤー2に得点を加算
      score2++;
      // ボールの状態を初期化（位置はバー1の手前，速度は右向き）
      bx = bar1x + barw + 1;
      by = bar1y;
      bvx = 4.0;
      bvy = 2.0;
    }

    // --- 画面の左側にボールが到達したときの処理 ---
    if (bx + br >= DL_WIDTH) {
      // プレイヤー1に得点を加算
      score1++;
      // ボールの状態を初期化（位置はバー2の手前，速度は左向き）
      bx = bar2x - barw - 1;
      by = bar2y;
      bvx = -4.0;
      bvy = 2.0;
    }

    // --- スコアは999を超えないようにする（表示上の問題） ---
    if(score1 > 999)
      score1 = 999;
    if(score2 > 999)
      score2 = 999;

    // --- 描画処理 ---    
    // 描画を一旦停止する（ちらつき防止）
    dl_stop();
    // 画面全体を黒で塗りつぶす
    dl_clear(DL_C("black"));
    // バー1を描画する
    dl_rectangle(bar1x - barw / 2, bar1y - barh / 2,
		              bar1x + barw / 2, bar1y + barh / 2, DL_C("red"), 1, 1);
    // バー2を描画する
    dl_rectangle(bar2x - barw / 2, bar2y - barh / 2,
		              bar2x + barw / 2, bar2y + barh / 2, DL_C("green"), 1, 1);
    // ボールを描画
    dl_circle(bx, by, br, DL_C("blue"), 1, 1);
    // スコアを描画
    sprintf(sscore, "%3d:%d", score1, score2);
    dl_text(sscore, sx, sy, 2.0, DL_C("white"), 2);
    // 描画を再開
    dl_resume();

    // 待機（wait_timeが0.01なので0.01秒待つ）
    // 短い時間で良いのでこれが無いと，描画の更新などが一切行われないので注意
    dl_wait(wait_time);
  }

  return 0;
}

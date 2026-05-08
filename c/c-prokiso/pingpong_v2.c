// pingpong_v2.c
// 4つの変更機能付きバージョン
//   [/]   : バーの高さを低く/高く
//   a/d   : バー1の横位置を左/右
//   j/l   : バー2の横位置を左/右
//   ,/.   : ボールの半径を小さく/大きく
//   -/=   : ボールの速さを遅く/速く
#include <drawlib.h>
#include <stdio.h>

int main(void) {
  // --- 変数の宣言 ---
  int barw = 20, barh = 150;
  int bardy = 50, bardx = 30;
  int bar1x = 70, bar1y = DL_HEIGHT / 2;
  int bar1kup = 'w', bar1kdown = 's';
  int bar2x = DL_WIDTH - 70, bar2y = DL_HEIGHT / 2;
  int bar2kup = 'i', bar2kdown = 'k';

  int br = 15;
  float bvx = 4.0, bvy = 2.0;
  float bspeed = 4.0;  // リセット時に使う速度の大きさ
  int bx = DL_WIDTH / 2, by = DL_HEIGHT / 2;

  int score1 = 0, score2 = 0;
  char text[80];
  int t, k, x, y;

  dl_initialize(1.0);

  while (1) {
    // --- 操作の受け付け ---
    while (dl_get_event(&t, &k, &x, &y)) {
      if (t == DL_EVENT_KEY) {
        // バーの縦移動（元のまま）
        if      (k == bar1kup)   bar1y -= bardy;
        else if (k == bar1kdown) bar1y += bardy;
        else if (k == bar2kup)   bar2y -= bardy;
        else if (k == bar2kdown) bar2y += bardy;
        // バーの横移動（a/d: バー1, j/l: バー2）
        else if (k == 'a') bar1x -= bardx;
        else if (k == 'd') bar1x += bardx;
        else if (k == 'j') bar2x -= bardx;
        else if (k == 'l') bar2x += bardx;
        // バーの高さ変更（[: 低く, ]: 高く）
        else if (k == '[' && barh > 30)   barh -= 10;
        else if (k == ']' && barh < 500)  barh += 10;
        // ボールの半径変更（,: 小さく, .: 大きく）
        else if (k == ',' && br > 5)   br--;
        else if (k == '.' && br < 60)  br++;
        // ボールの速さ変更（-: 遅く, =: 速く）
        else if (k == '-' && bspeed > 1.5) {
          bspeed -= 0.5;
          bvx = bvx > 0 ? bspeed : -bspeed;
        }
        else if (k == '=' && bspeed < 15.0) {
          bspeed += 0.5;
          bvx = bvx > 0 ? bspeed : -bspeed;
        }
      }
    }

    // --- バーの境界処理（上下）---
    if (bar1y - barh / 2 < 0)          bar1y = barh / 2;
    if (bar1y + barh / 2 > DL_HEIGHT)  bar1y = DL_HEIGHT - barh / 2;
    if (bar2y - barh / 2 < 0)          bar2y = barh / 2;
    if (bar2y + barh / 2 > DL_HEIGHT)  bar2y = DL_HEIGHT - barh / 2;

    // --- バーの境界処理（左右：各バーをコートの自陣内に制限）---
    if (bar1x - barw / 2 < 0)               bar1x = barw / 2;
    if (bar1x + barw / 2 > DL_WIDTH / 2)    bar1x = DL_WIDTH / 2 - barw / 2;
    if (bar2x - barw / 2 < DL_WIDTH / 2)    bar2x = DL_WIDTH / 2 + barw / 2;
    if (bar2x + barw / 2 > DL_WIDTH)        bar2x = DL_WIDTH - barw / 2;

    // --- ボールの移動処理 ---
    bx += bvx;
    by += bvy;

    // 上下の壁で反射
    if (by - br <= 0) {
      by = br + 1;
      bvy *= -1;
    } else if (by + br >= DL_HEIGHT) {
      by = DL_HEIGHT - br - 1;
      bvy *= -1;
    }

    // --- バー1との当たり判定 ---
    if (by > bar1y - barh / 2 && by < bar1y + barh / 2) {
      if (bvx < 0 && bx - br <= bar1x + barw / 2 && bx - br >= bar1x - barw / 2
        || bvx > 0 && bx + br >= bar1x - barw / 2 && bx + br <= bar1x + barw / 2) {
        bvx *= -1.0;
      }
    }

    // --- バー2との当たり判定 ---
    if (by > bar2y - barh / 2 && by < bar2y + barh / 2) {
      if (bvx < 0 && bx - br <= bar2x + barw / 2 && bx - br >= bar2x - barw / 2
        || bvx > 0 && bx + br >= bar2x - barw / 2 && bx + br <= bar2x + barw / 2) {
        bvx *= -1.0;
      }
    }

    // --- 得点処理（ボールが左端 → プレイヤー2得点）---
    if (bx - br <= 0) {
      score2++;
      bx = bar1x + barw + 1;
      by = bar1y;
      bvx = bspeed;
      bvy = 2.0;
    }

    // --- 得点処理（ボールが右端 → プレイヤー1得点）---
    if (bx + br >= DL_WIDTH) {
      score1++;
      bx = bar2x - barw - 1;
      by = bar2y;
      bvx = -bspeed;
      bvy = 2.0;
    }

    if (score1 > 999) score1 = 999;
    if (score2 > 999) score2 = 999;

    // --- 描画処理 ---
    dl_stop();
    dl_clear(DL_C("black"));

    // バー1（赤）
    dl_rectangle(bar1x - barw / 2, bar1y - barh / 2,
                 bar1x + barw / 2, bar1y + barh / 2, DL_C("red"), 1, 1);
    // バー2（緑）
    dl_rectangle(bar2x - barw / 2, bar2y - barh / 2,
                 bar2x + barw / 2, bar2y + barh / 2, DL_C("green"), 1, 1);
    // ボール（青）
    dl_circle(bx, by, br, DL_C("blue"), 1, 1);

    // スコア
    sprintf(text, "%3d:%d", score1, score2);
    dl_text(text, DL_WIDTH / 2 - 120, 50, 2.0, DL_C("white"), 2);

    // 現在のパラメータ表示
    sprintf(text, "BarH:%d  BallR:%d  Speed:%.1f", barh, br, bspeed);
    dl_text(text, 10, DL_HEIGHT - 40, 1.0, DL_C("white"), 2);

    // キー操作説明
    dl_text("[/]:barH  ,/.:ballR  -/=:speed  a/d:bar1X  j/l:bar2X",
            10, DL_HEIGHT - 20, 0.8, DL_C("white"), 2);

    dl_resume();
    dl_wait(0.01);
  }

  return 0;
}

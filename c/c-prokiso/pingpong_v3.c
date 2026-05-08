// pingpong_v3.c  ── 強化バージョン
//
// 追加・改造した機能:
//   ・バーの高さ・横位置・ボール半径・速さをキーで変更 (v2の機能)
//   ・ラリー中にヒットするたびボールが5%加速（最大20）
//   ・5点先取で勝利 → スペースキーでリスタート
//   ・センターラインの描画
//   ・ボールの速さに応じて色が変化（青→白→赤）
//   ・ラリー数のカウント表示
//   ・AI対戦モード（cキーで切り替え，バー2をCPUが操作）
//   ・パラメータのリアルタイム表示
//
// キー一覧:
//   w/s       : バー1 上/下
//   i/k       : バー2 上/下（AI OFFのとき）
//   a/d       : バー1 横移動
//   j/l       : バー2 横移動（AI OFFのとき）
//   [/]       : バーの高さ 低く/高く
//   ,/.       : ボール半径 小さく/大きく
//   -/=       : ボール速さ 遅く/速く
//   c         : AI対戦 ON/OFF
//   Space     : ゲームオーバー後にリスタート
#include <drawlib.h>
#include <stdio.h>

#define PLAYING   0
#define GAME_OVER 1
#define WIN_SCORE 5   // 何点先取で勝利か
#define MAX_SPEED 20.0
#define AI_SPEED  4   // AIの1フレームあたりの移動量（ピクセル）

int main(void) {
  // --- バーのパラメータ ---
  int barw = 20, barh = 150;
  int bardy = 50, bardx = 30;
  int bar1x = 70, bar1y = DL_HEIGHT / 2;
  int bar1kup = 'w', bar1kdown = 's';
  int bar2x = DL_WIDTH - 70, bar2y = DL_HEIGHT / 2;
  int bar2kup = 'i', bar2kdown = 'k';

  // --- ボールのパラメータ ---
  int br = 15;
  float bvx = 4.0, bvy = 2.0;
  float bspeed = 4.0;  // リセット時のベース速度
  int bx = DL_WIDTH / 2, by = DL_HEIGHT / 2;

  // --- ゲーム状態 ---
  int score1 = 0, score2 = 0;
  int state = PLAYING;
  int rally = 0;    // 現在のラリーのヒット数
  int ai_mode = 0;  // 1のときバー2をCPUが操作

  char text[100];
  int t, k, x, y;

  dl_initialize(1.0);

  while (1) {
    // --- 操作の受け付け ---
    while (dl_get_event(&t, &k, &x, &y)) {
      if (t == DL_EVENT_KEY) {
        // ゲームオーバー中はスペースでリスタートのみ
        if (state == GAME_OVER) {
          if (k == ' ') {
            score1 = 0; score2 = 0; rally = 0;
            bx = DL_WIDTH / 2; by = DL_HEIGHT / 2;
            bvx = bspeed; bvy = 2.0;
            state = PLAYING;
          }
        } else {
          // バー1の縦移動
          if      (k == bar1kup)   bar1y -= bardy;
          else if (k == bar1kdown) bar1y += bardy;
          // バー2の縦移動（AI OFFのみ）
          else if (!ai_mode && k == bar2kup)   bar2y -= bardy;
          else if (!ai_mode && k == bar2kdown) bar2y += bardy;
          // バーの横移動
          else if (k == 'a') bar1x -= bardx;
          else if (k == 'd') bar1x += bardx;
          else if (!ai_mode && k == 'j') bar2x -= bardx;
          else if (!ai_mode && k == 'l') bar2x += bardx;
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
          else if (k == '=' && bspeed < 12.0) {
            bspeed += 0.5;
            bvx = bvx > 0 ? bspeed : -bspeed;
          }
          // AIモード切り替え
          else if (k == 'c') ai_mode = !ai_mode;
        }
      }
    }

    // ゲームオーバー中は物理処理をスキップして描画へ
    if (state == GAME_OVER) {
      dl_stop();
      dl_clear(DL_C("black"));
      if (score1 >= WIN_SCORE)
        dl_text("Player 1 WINS!", DL_WIDTH / 2 - 150, DL_HEIGHT / 2 - 40, 2.0, DL_C("red"), 2);
      else
        dl_text("Player 2 WINS!", DL_WIDTH / 2 - 150, DL_HEIGHT / 2 - 40, 2.0, DL_C("green"), 2);
      sprintf(text, "%d  :  %d", score1, score2);
      dl_text(text, DL_WIDTH / 2 - 100, DL_HEIGHT / 2 + 10, 2.0, DL_C("white"), 2);
      dl_text("Press SPACE to restart", DL_WIDTH / 2 - 170, DL_HEIGHT / 2 + 70, 1.2, DL_C("white"), 2);
      dl_resume();
      dl_wait(0.01);
      continue;
    }

    // --- AI: バー2をボールに追従させる ---
    if (ai_mode && bvx > 0) {  // ボールが右方向へ向かっているとき追従
      if      (by < bar2y - 5) bar2y -= AI_SPEED;
      else if (by > bar2y + 5) bar2y += AI_SPEED;
    } else if (ai_mode) {  // ボールが左向きのときはゆっくり中央へ戻る
      if      (bar2y < DL_HEIGHT / 2 - 10) bar2y += 1;
      else if (bar2y > DL_HEIGHT / 2 + 10) bar2y -= 1;
    }

    // --- バーの境界処理（上下）---
    if (bar1y - barh / 2 < 0)          bar1y = barh / 2;
    if (bar1y + barh / 2 > DL_HEIGHT)  bar1y = DL_HEIGHT - barh / 2;
    if (bar2y - barh / 2 < 0)          bar2y = barh / 2;
    if (bar2y + barh / 2 > DL_HEIGHT)  bar2y = DL_HEIGHT - barh / 2;

    // --- バーの境界処理（左右：自陣内に制限）---
    if (bar1x - barw / 2 < 0)             bar1x = barw / 2;
    if (bar1x + barw / 2 > DL_WIDTH / 2)  bar1x = DL_WIDTH / 2 - barw / 2;
    if (bar2x - barw / 2 < DL_WIDTH / 2)  bar2x = DL_WIDTH / 2 + barw / 2;
    if (bar2x + barw / 2 > DL_WIDTH)      bar2x = DL_WIDTH - barw / 2;

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

    // --- バー1との当たり判定（ヒットで5%加速）---
    if (by > bar1y - barh / 2 && by < bar1y + barh / 2) {
      if (bvx < 0 && bx - br <= bar1x + barw / 2 && bx - br >= bar1x - barw / 2
        || bvx > 0 && bx + br >= bar1x - barw / 2 && bx + br <= bar1x + barw / 2) {
        bvx *= -1.05;
        rally++;
        // 速度の上限
        if (bvx >  MAX_SPEED) bvx =  MAX_SPEED;
        if (bvx < -MAX_SPEED) bvx = -MAX_SPEED;
      }
    }

    // --- バー2との当たり判定（ヒットで5%加速）---
    if (by > bar2y - barh / 2 && by < bar2y + barh / 2) {
      if (bvx < 0 && bx - br <= bar2x + barw / 2 && bx - br >= bar2x - barw / 2
        || bvx > 0 && bx + br >= bar2x - barw / 2 && bx + br <= bar2x + barw / 2) {
        bvx *= -1.05;
        rally++;
        if (bvx >  MAX_SPEED) bvx =  MAX_SPEED;
        if (bvx < -MAX_SPEED) bvx = -MAX_SPEED;
      }
    }

    // --- 得点処理（ボールが左端 → プレイヤー2得点）---
    if (bx - br <= 0) {
      score2++;
      rally = 0;
      bx = bar1x + barw + 1;
      by = bar1y;
      bvx = bspeed;
      bvy = 2.0;
    }

    // --- 得点処理（ボールが右端 → プレイヤー1得点）---
    if (bx + br >= DL_WIDTH) {
      score1++;
      rally = 0;
      bx = bar2x - barw - 1;
      by = bar2y;
      bvx = -bspeed;
      bvy = 2.0;
    }

    // --- 勝利判定 ---
    if (score1 >= WIN_SCORE || score2 >= WIN_SCORE)
      state = GAME_OVER;

    // --- 描画処理 ---
    dl_stop();
    dl_clear(DL_C("black"));

    // センターライン（破線）
    for (int cy = 0; cy < DL_HEIGHT; cy += 40)
      dl_rectangle(DL_WIDTH / 2 - 2, cy, DL_WIDTH / 2 + 2, cy + 20, DL_C("white"), 1, 1);

    // バー1（赤）
    dl_rectangle(bar1x - barw / 2, bar1y - barh / 2,
                 bar1x + barw / 2, bar1y + barh / 2, DL_C("red"), 1, 1);
    // バー2（緑 / AI時は白で区別）
    int bar2color = ai_mode ? DL_C("white") : DL_C("green");
    dl_rectangle(bar2x - barw / 2, bar2y - barh / 2,
                 bar2x + barw / 2, bar2y + barh / 2, bar2color, 1, 1);

    // ボール（速さで色を変える：青→白→赤）
    float spd = bvx > 0 ? bvx : -bvx;
    int bcolor;
    if      (spd < 7.0)  bcolor = DL_C("blue");
    else if (spd < 12.0) bcolor = DL_C("white");
    else                 bcolor = DL_C("red");
    dl_circle(bx, by, br, bcolor, 1, 1);

    // スコア表示
    sprintf(text, "%d  :  %d", score1, score2);
    dl_text(text, DL_WIDTH / 2 - 100, 30, 2.0, DL_C("white"), 2);

    // WIN_SCOREまでの目標表示
    sprintf(text, "First to %d wins", WIN_SCORE);
    dl_text(text, DL_WIDTH / 2 - 100, 65, 0.9, DL_C("white"), 2);

    // ラリー数・現在速度
    sprintf(text, "Rally:%d  Speed:%.1f", rally, spd);
    dl_text(text, DL_WIDTH / 2 - 90, DL_HEIGHT - 55, 1.0, DL_C("white"), 2);

    // AIモード表示
    if (ai_mode)
      dl_text("AI ON (c:off)", DL_WIDTH - 150, 30, 1.0, DL_C("white"), 2);
    else
      dl_text("AI OFF (c:on)", DL_WIDTH - 150, 30, 1.0, DL_C("white"), 2);

    // パラメータ & キー説明
    sprintf(text, "BarH:%d BallR:%d Base:%.1f", barh, br, bspeed);
    dl_text(text, 10, DL_HEIGHT - 35, 0.9, DL_C("white"), 2);
    dl_text("[/]:barH  ,/.:ballR  -/=:speed  a/d:bar1X  j/l:bar2X",
            10, DL_HEIGHT - 18, 0.75, DL_C("white"), 2);

    dl_resume();
    dl_wait(0.01);
  }

  return 0;
}

# run_dialogue.sh 起動時のバタバタ現象 — 原因と対処

## 現象

`run_dialogue.sh` を実行すると、最初の約1〜2秒間ロボットの脚がバタバタする。

## 原因

### WBC の起動モードが2段階になっている

```
run_deploy.sh 実行
  → WBC バイナリが「安全モード」で起動
  → 制動が強くかかった状態で安定して立つ  ←  ここは正常
```

```
run_dialogue.sh 実行
  → g1_realtime_dialogue.py が command(start=True, planner=True) を ZMQ 送信
  → WBC が「安全モード」→「SONIC ZMQ 制御モード」への切り替えを開始
  → 切り替え中（約1〜2秒）はバランス制御が一時的に無効化される
  → 脚の目標関節値が不定になり、足が浮く → バタバタ  ← これが問題
  → 切り替え完了後、SONIC がコマンドを受け付けて安定
```

### 根拠：参照実装 g1_simple_walk.py のコード

WBC チームが作った参照実装も同じ現象に直面しており、`time.sleep(1.5)` で待つことで対処している：

```python
send_command(start=True, stop=False, planner=True)
time.sleep(1.5)   # この間バタバタする。WBC 固有の動作で避けられない。
send_planner(0, [0, 0, 0], fv(facing))
```

つまり **バタバタは WBC の設計上の動作**であり、対話システム側からは完全に消すことができない。

### なぜ start=True が必要か

`start=True` を送らないと WBC は ZMQ からの planner コマンドを一切無視する（コマンドは届くが反応しない）。ZMQ 制御モードへの入場キーとして機能している。

## 対処状況（現在の実装）

`start_planner()` で `start=True` 送信直後に mode=2 を 20 回連打（1.0秒分）して、
WBC の初期化シーケンドと並行して SONIC をアクティブにしようとしている。
その後 `main()` で 2.0 秒待ってから対話開始。

```
t=0.0  : command(start=True, planner=True) 送信 → バタバタ開始
t=0〜1.0: planner(mode=2) を 20 回送信（0.05秒ごと）
t=1.0  : _planner_mode = True
t=1.0〜3.0: main() が time.sleep(2.0) で待機
t=3.0  : asyncio 起動、keepalive が mode=2 を 0.05秒ごとに送り続ける
t=3.0+ : ユーザーと対話開始
```

## 根本的な解決策（開発可能エリア外）

WBC 側（運営固定）が以下のいずれかに対応すれば解決できる：

1. `run_deploy.sh` の時点で最初から SONIC ZMQ モードで起動する
2. 「ソフトスタート」オプション：バランス制御を切らずにモード切り替えする

対話システム（開発可能エリア）からは ZMQ コマンドしか送れないため、
モード切り替え中のバランス制御は変更できない。

## 試みたが効果がなかったこと

- `start=True` 後に 1.5 秒待ってから最初のコマンドを送る（参照実装と同じ方式）
  → 安定しなかった（環境差異 or タイミング問題）
- mode=2 を連打（現在の方式）
  → バタバタ自体は消えないが、動作コマンドは受け付ける

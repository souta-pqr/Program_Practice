# G1 ロボット 音声対話システム — 動作ガイド

## 仕組み：音声からロボット動作への流れ

```
マイク (48kHz)
  ↓ サンプリングレート変換 (48kHz → 24kHz)
OpenAI Realtime API (WebSocket)
  ├─ 音声認識  : gpt-4o-transcribe でリアルタイム文字起こし
  └─ LLM 判断 : gpt-realtime がシステムプロンプト + ツール定義を参照して
                どの「ツール」を呼ぶか決定
         ↓
   ┌─────────────────────────────────┐
   │ ツール呼び出し (Function Call)  │
   │                                 │
   │  select_motion(motion_name)     │  ← 身振り・感情表現
   │  walk_command(direction, steps) │  ← 移動・旋回
   └─────────────────────────────────┘
         ↓
   ZMQ PUB (tcp://*:5556)
         ↓
   Docker コンテナ内 WBC (zmq_manager)
         ↓
   ロボット実機 / シミュレータ
```

### LLM がどうやって動作を選ぶか

システムプロンプトに以下のルールが書かれており、LLM がそれを読んで判断します：

- **移動が頼まれた場合** → `walk_command` を呼ぶ
  - 「3歩前へ」→ `walk_command(direction="forward", steps=3)`
  - 「右を向いて」→ `walk_command(direction="turn_right", steps=1)`
  - 回数の明示がない場合は steps=1
- **それ以外（挨拶・感情表現・リアクション）** → `select_motion` を呼ぶ
  - 会話の雰囲気に合う動作を 39 種類の中から選択

ユーザーが何も動作を求めていないと LLM が判断した場合は、適宜 select_motion で
小さなリアクション（うなずき、手を振る等）をする場合があります。

---

## 利用可能な動作一覧

### 移動コマンド (`walk_command`)

| direction | 意味 | 例文 |
|-----------|------|------|
| `forward` | 前進 | 「前に進んで」「3歩歩いて」 |
| `backward` | 後退 | 「下がって」「2歩後ろへ」 |
| `turn_left` | 左旋回 (10°/回) | 「左を向いて」「左に曲がって」 |
| `turn_right` | 右旋回 (10°/回) | 「右を向いて」「右に曲がって」 |
| `stop` | 停止 | 「止まって」「ストップ」 |

`steps` パラメータ: 1〜10 (前進/後退の歩数、または旋回の回数)

### 身振り動作一覧 (`select_motion`)

| 動作名 | 説明 | こんな場面で |
|--------|------|-------------|
| `wave` | 手を振る | 挨拶、別れ際 |
| `bow_slight` | 軽いお辞儀 | 軽い挨拶、感謝 |
| `bow_45` | 45度お辞儀 | 丁寧な挨拶、礼儀 |
| `bow_apology` | お詫びのお辞儀 | 謝罪 |
| `bow_deep` | 深いお辞儀 | 深い敬意、謝罪 |
| `nod` | うなずく | 同意、確認 |
| `deep_nod` | 大きくうなずく | 強い同意、感心 |
| `shrug` | 肩をすくめる | わからない、困惑 |
| `thumbs_up` | 親指を立てる | 了解、いいね |
| `double_thumbs_up` | 両手親指を立てる | 最高！大賛成 |
| `clap` | 拍手 | 称賛、喜び |
| `fist_pump` | 拳を突き上げる | 達成感、応援 |
| `banzai` | 万歳 | お祝い、喜び |
| `salute` | 敬礼 | 返事、了解 |
| `beckon` | 手招き | 「こちらへ」と誘う |
| `halt` | 手のひらを前に出す | 止まれ、待って |
| `wave_off` | 手を振って断る | 遠慮、拒否 |
| `point_forward` | 前方を指す | 「あちら」と示す |
| `point_left` | 左を指す | 左方向を示す |
| `point_right` | 右を指す | 右方向を示す |
| `point_up` | 上を指す | 上方向を示す |
| `point_down` | 下を指す | 下方向を示す |
| `point_to_self` | 自分を指す | 「私が」 |
| `point_back_over_shoulder` | 後ろを指す | 後方を示す |
| `this_way_left` | 左へ案内 | 左方向へ誘導 |
| `this_way_right` | 右へ案内 | 右方向へ誘導 |
| `present_with_both_hands` | 両手で提示 | 何かを差し出す |
| `welcome_arms` | 両腕を広げて歓迎 | ようこそ、歓迎 |
| `handshake_offer` | 握手のために手を差し出す | 挨拶、友好 |
| `hand_on_chest` | 胸に手を当てる | 誠意、感動 |
| `hands_together_apology` | 両手を合わせてお願い | お願い、謝罪 |
| `namaste` | 合掌 | 敬意、感謝 |
| `arms_open` | 両腕を広げる | 大きさを示す、開放感 |
| `arms_akimbo` | 腰に手を当てる | 自信、考え中 |
| `cross_arms_x` | 腕を×に交差 | ダメ、禁止 |
| `at_ease` | 休めの姿勢 | リラックス |
| `lean_forward_interest` | 前のめりで興味を示す | 興味津々 |
| `lean_back_surprised` | 驚いて仰け反る | ビックリ！ |
| `idle` | 待機姿勢 | 待っている |

---

## キーボード手動制御

プログラム起動中、ターミナルで以下のキー操作も可能です：

| キー | 動作 |
|------|------|
| `W` | 前進 1 歩 |
| `S` | 後退 1 歩 |
| `A` | 左旋回 1 回 |
| `D` | 右旋回 1 回 |
| `Space` | 停止 |
| `Ctrl+C` | 終了 |

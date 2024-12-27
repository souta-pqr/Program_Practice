import readline
import rlcompleter

# カスタム名前空間を作成（オプション）
namespace = {
    'hello': 'World',
    'python': 'Programming',
    'test_function': lambda x: x * 2
}

# Completerインスタンスを作成
completer = rlcompleter.Completer(namespace)

# readline の補完機能を設定
readline.set_completer(completer.complete)

# Tabキーで補完を有効化
# Windowsの場合は "tab: complete"
# Unix系の場合は "bind ^I rl_complete" または "tab: complete"
readline.parse_and_bind("tab: complete")

# インタラクティブなプロンプト
while True:
    try:
        # 入力を受け付け、補完機能を使用可能に
        user_input = input('>>> ')
        # 終了コマンドの確認
        if user_input.lower() in ['exit', 'quit']:
            break
        # 入力された内容を評価
        result = eval(user_input, namespace)
        print(result)
    except Exception as e:
        print(f"エラー: {e}")

print("プログラムを終了します")
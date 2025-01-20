// 画面レイアウト
Scaffold(
    appBar: AppBar(title: Text("タイトル")),
    body: Container(
        child: Column(
            text("テキスト"),
            Image.asset("assets/image.png"),
            ElevatedButton(
                onPressed: () {},
                child: text("ボタン"),
            ),
        ),
    ),
)

Row(
    children: [
        Winget1(),
        Winget2(),
    ],
)

Column(
    children: [
        Widget1(),
        Widget2(),
    ]
)

Container{
    Width: 100,
    height: 100,
    color: color.red,
    padding: EdgeInsets.all(8.0),
    margin: EdgeInsets.all(8.0),
    child: Widget(),
}

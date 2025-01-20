// stateclassウィジェット（状態を持たない）
class MyWidget extends StatelessWidget {
    const Mywidget({key? key}) : super(key: key);

    @override
    widget build(BuildContext context) {
        return Container{
            child: Text("Hello"),
        };
    }
}

// Statefulウィジェット（状態を持つ）
class MyStatefulWidget extends StatefulWidget {
    const MyStatefulWidget({key? key}) : super(key: key);

    @override
    State<MyStatefulwidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
    int _counter = 0;

    void _incrementCounter() {
        setState(() {
            counter++;
        });
    }
}
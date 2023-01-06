import sys

class CLI:
    """
    ===========
    CLI: 使い方
    python3 app.py command arg1 arg2, ...
    ===========
    """			

    def __init__(self, argv):
        self.argv = argv
        self.key = {
            'help': self.usage,
            'cat': self.cat,
        }

    def parse(self):
        if not self.argv:
            self.usage()
        else:
            func = self.key.get(self.argv[0])
            if func is not None:
                if '-h' in self.argv:
                    print("show help message")
                    print(func.__doc__)
                else:
                    try:
                        func()
                    except:
                        print(func.__doc__)
            else:
                # 未定義のコマンド
                print("command: {} is undefined.".format(self.argv[0]))
                print(self.__doc__)

    def cat(self):
        """
        python3 app.py cat filename
        shows file
        """
        with open(self.argv[1], 'r') as f:
            data = f.readlines()
            for line in data:
                print(line)

    def usage(self):
        print(self.__doc__)


if __name__ == '__main__':
    cli = CLI(sys.argv[1:]).parse()
    cli = CLI(['cat', 'sample.txt']).parse()


import random

def random_program():
    # 0から9までのランダムな整数を生成
    number = random.randint(0, 9)
    
    # ランダムな小数を生成
    decimal = random.random()
    
    # ランダムな要素を持つリストから要素を選択
    fruits = ['apple', 'banana', 'orange', 'grape']
    fruit = random.choice(fruits)
    
    # 結果を表示
    print('Random number:', number)
    print('Random decimal:', decimal)
    print('Random fruit:', fruit)

if __name__ == '__main__':
    random_program()
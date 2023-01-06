from sklearn import datasets
from sklearn import linear_model
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import numpy as np

# 乱数のシードを設定
np.random.seed(0)

# 線形回帰のデータを準備
x, y = datasets.make_regression(n_samples=100, n_features=1, noise=30)

# 学習データとテストデータを分割
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3)

# 回帰を行うインスタンス
e = linear_model.LinearRegression()
# あてはめ
e.fit(x_train, y_train)

# 回帰モデル取得
print("回帰係数", e.coef_, "です")
print("切片は", e.intercept_, "です")

# テストデータから予測
y_pred = e.predict(x_test)

# 学習データに対するモデルのあてはまり評価
print("学習データによる決定係数は", e.score(x_train, y_train), "です")
# テストデータに対するモデルのあてはまり評価
print("テストデータによる決定係数は", e.score(x_test, y_test), "です")

# 学習データプロット
plt.scatter(x_train, y_train, label="train")
# テストデータプロット
plt.scatter(x_test, y_test, label="test")
# 回帰直線をプロット
plt.plot(x_test, y_pred, color="magenta")
plt.legend()

plt.show()

from sklearn import datasets
from sklearn import cluster
import matplotlib.pyplot as plt

# クラスタリングのデータ作成
data, label = datasets.make_blobs(n_samples=500, n_features=2, centers=5)

# k-means法のインスタンス
e = cluster.KMeans(n_clusters=5)
# クラスタリング
e.fit(data)

# データが属するクラスタ取得
print(e.labels_)
# クラスタの中心を取得
print(e.cluster_centers_)

# データを散布図に
plt.scatter(data[:, 0], data[:, -1], marker="o", c=e.labels_, edgecolor="k")
# クラスタの中心を散布図に
plt.scatter(e.cluster_centers_[:, 0], e.cluster_centers_[:, 1], marker="x")
plt.show()

import numpy as np

def dp_matching(feature_1, feature_2):
    '''DPマッチングを行う
    入力：
        feature_1: 比較する特徴量系列１
        feature_2: 比較する特徴量系列２
    出力：
        total_cost: 最短距離の総コスト
        min_path: 最短経路のフレーム対応
    '''
    # フレーム数と次元量を取得
    (nframes_1, num_dims) = np.shape(feature_1)
    nframe_2 = np.shape(feature_2)[0]

distance = np.zeros((nframes_1, n_frames_2))
for n in range(nframes_1):
    for m in range(nframe_1):
        # feature_1のnフレーム目と
        # feature_2のmフレーム目の
        # ユークリッド距離の二乗を計算
        distance[n, m] = \
            np.sum((feature_1[n] - feature_2[m])**2)

# 累積コスト行列
cost = np.zeros((nframes_1, nframes_2))
# 遷移の種類(縦/斜め/横)を記録する行列
# 0：縦の遷移，1：斜めの遷移，2：横の遷移
track = np.zeros((nframes_1, nframes_2), np.int16)

# スタート地点の距離
cost[0, 0] = distance[0, 0]

# 縦の縁：必ず縦に遷移する
for n in range(1, nframes_1):
    cost[n, 0] = cost[n-1, 0] + distance[n, 0]
    track[n, 0] = 0

# 横の縁：必ず横に遷移する
for m in range(1, nframes_2):
    cost[0, m] = cost[0, m-1] + distance[0, m]
    track[0, m] = 2
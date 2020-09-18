# Newton'sLows of Motion

## 1次元の等速直線運動

### 理論

x 座標x 現在の座標  最初の時刻、座標xの初期値、速度xの初期値が全て0の場合通常値は0になる。

$x_0$ 座標x 最初は設定した値が初期値になる、通常は0 or 1

$v_{0x}$ 速度x 最初は設定した値が初期値になる、通常は0.1 など小さい値

$x = x_0 + v_{0x}t$

### 前提条件

そもそも1次元なので左右にしか動けない。

今回使わない条件

1. 質量を考えないつまり重さはない。
2. 空間は無重力を想定している。空気抵抗や摩擦はない。

今回使う条件

1. 座標 locationX 座標はxのみだよ☺️
2. 時間time
3. 速度 velocityX 速度がないと動かないよ😥

必要な変数(不確定要素です、実装が必ずしもこうなるとは限りません。)

* locationX or positionX[^1]
* Time 現在時刻や経過時間 プログラムの計算時間も必要。

確定要素

1. 総合時間 totalTime
2. 経過時間 deltaTime
3. 現在時刻 nowTime
4. 総合時間(プログラムの計算時間/ループ回数) steps
5. 速度 velocityX
6. 座標x locationX

stepsの求め方(型は原則整数)

$steps = timeTotal / deltaTime$

```py
floor(timeTotal / deltaTime)
```

座標xを求める。

$x = x_0 + v_{0x}t$

```py
lcoationX + velocityX * nowTime
```

[^1]: 座標を表す英語はcoordinateだがpositionやlocationの方が分かりやすい。

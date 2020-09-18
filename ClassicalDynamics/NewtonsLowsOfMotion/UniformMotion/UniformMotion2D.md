# 2次元の等速直線運動 (1次元の等速直線運動からの派生)

## 理論

$x_0$ 座標x 最初は初期値に設定した値が入る。

$v_{0x}$ 速度x 最初は設定した値が初期値になる。

$t$ 時間ここでは現在時刻になる。

$x = x_0 + v_{0x}t$

$y_0$ 座標y 最初は初期値に設定した値が入る。

$v_{0y}$ 速度x 最初は設定した値が初期値になる。

$t$ 時間ここでは現在時刻になる。

$y = y_0 + v_{0y}t$

## 前提条件

2次元なので左右上下に動ける。

今回使わない条件

1次元の等速直線運動と同じ。

今回使う条件

基本的には1次元の等速直線運動と同じ。ただしそれに座標yを加える。

1. 座標x 座標y 座標はxとyだよ☺️
2. 時間time
3. 速度vx 速度vy 速度がないと動かないよ😥

必要な変数(不確定要素です、実装が必ずしもこうなるとは限りません。)

* locationX or positionX and locationY or positionY[^1]
* Time 現在時刻や経過時間 プログラムの計算時間も必要。

確定要素(あとから追加するかもしれない)

1. 総合時間 totalTime
2. 経過時間 deltaTime
3. 現在時刻 nowTime
4. 総合時間(プログラムの計算時間/ループ回数) steps
5. 速度 velocityX velocityY
6. 座標x locationX locationY

座標yを求める。

$y = y_0 + v_{0y}t$

```py
lcoationY + velocityY * nowTime
```

### 初期値(パラメーター設定)

```py
if __name__ == "__main__":
    initX = 0.0 #座標xの初期値
    initY = 0.0#座標xの初期値
    initVX = 2.0 #速度xの初期値
    initVY = 5.0#速度yの初期値
    deltaTime = 0.1 #経過時間の値
    totalTime = 4.0 #総合時間
```

### クラス設計とクラスの継承

基本的には1次元等速直線運動のクラスと同じなのでクラスの継承を行い、2次元等速直線運動のクラスのを作るだけである。

クラス変数の初期化

```py
class Unim2D(Unim1D):
    def __init__(self, initX, initY,initVX, initVY,deltaTime, totalTime):
        Unim1D.__init__(self, initX, initVX, deltaTime, totalTime)
        self.locationY = initY
        self.velocityY = initVY
```

座標yを求める。

```py
def calcY(self, nowTime : float) -> float:
        return self.locationY + self.velocityY * nowTime

```

データの出力

```py
def dataWrite(self):
        nowlocX, nowlocY = 0, 0
        nowTime = 0
        dataX, dataY = [], []
        for _count in range(self.steps):
            nowlocX = self.calcX(nowTime)
            nowlocY = self.calcY(nowTime)
            #print(nowlocX, nowlocY)
            dataX.append(nowlocX)
            dataY.append(nowlocY)
            nowTime = nowTime + self.deltaTime

        plt.plot(dataX, dataY, 'go')
        plt.savefig("unim2D.png")
```

### TypeScript

```typescript
class Unim2D extends Unim1D {
    private locationY : number = 0;
    private velocityY : number = 0;
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initY Initial value of y coordinate
     * @param initVX Initial value of velocity x
     *  @param initVY Initial value of velocity y
     * @param deltaTime incremental time
     * @param totalTime total time
     */
    public constructor(initX: number, initY : number, initVX: number, initVY : number,deltaTime: number, totalTime: number) {
        super(initX, initVX, deltaTime, totalTime);
        this.locationY = initY;
        this.velocityY = initVY;
    }
```

```typescript
 private calcY(nowTime : number) : number {
        return this.locationY + this.velocityY * nowTime;
    }
```

```typescript
public dataWrite() : void {
        let nowlocX = 0, nowlocY = 0;
        let nowTime = 0;
        for(let count = 0; count < this.steps; count++){
            nowlocX = this.calcX(nowTime);
            nowlocY = this.calcY(nowTime);
            console.log(nowlocX, nowlocY);
            nowTime = nowTime + this.deltaTime;
        }
    }
```

[^1]: 座標を表す英語はcoordinateだがpositionやlocationの方が分かりやすい

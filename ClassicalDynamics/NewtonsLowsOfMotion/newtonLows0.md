# Newton'sLows of Motion

## 1次元の等速直線運動

### 理論

x 座標x 現在の座標  最初の時刻、座標xの初期値、速度xの初期値が全て0の場合通常値は0になる。

$x_0$ 座標x 最初は設定した値が初期値になる、通常は0 or 1

$v_{0x}$ 速度x 最初は設定した値が初期値になる、通常は1 or 2 などの値

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

確定要素(あとから追加するかもしれない)

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

### 初期値(パラメーター設定)

```py
if __name__ == "__main__":
    initX = 0.0 # 座標xの初期値
    initVX = 2.0 #速度xの初期値
    deltaTime = 0.1 #経過時間の値
    totalTime = 4.0 #総合時間
```

### クラス設計( or 関数設計)

変数の初期化(他の言語はコンストラクタという)

変数は本来全てprivateもしくはprotectedにするべき。ただしデータ出力は基本的にpublic。

```py
class Unim1:
    def __init__(self, initX, initVX, deltaTime, totalTime):
        self.locationX = initX
        self.velocityX = initVX
        self.deltaTime = deltaTime
        self.totalTime = totalTime
        self.steps = math.floor(totalTime / deltaTime)
```

座標xを求める関数(Unim1クラスの関数)

$x = x_0 + v_{0x}t$の部分

```py
def calcX(self, nowTime):
        return self.locationX + self.velocityX * nowTime
```

データの出力を行う関数(Unim1クラスの関数)

```py
 def dataWrite(self):
        nowlocX, nowTime = 0, 0
        dataX, dataY = [], []
        for _count in range(self.steps):
            nowlocX = self.calcX(nowTime)
            #print(nowTime, nowlocX)
            dataX.append(nowTime)
            dataY.append(nowlocX)
            nowTime = nowTime + self.deltaTime

        plt.plot(dataX, dataY, 'go')
        plt.savefig("unim1D.png")
```

forは本来Pythonでは使ってはいけない。
numpyのnp.arange()が推奨されている。
しかしより高速で動く他言語(c++やrust)との互換性を考えてfor文を使っている。

pythonならばグラフにプロットしても良いしcsvとして出力しても良い。

プロトタイプはこれ以降PythonとTypeScript
で実装していく。

[^1]: 座標を表す英語はcoordinateだがpositionやlocationの方が分かりやすい。

ところでなぜプロトタイプにPythonの他にTypeScriptが必要なのだろうか。

理由は基本的に2つ有る。

クラスのオブジェクトでしかアクセスしてはいけないとこに変数や関数(メソッド)がアクセスできてしまうからである。

通常は変数やコンストラクタあるいはメソッド(関数)前にpublic or private (or protected はあとで説明)の設定しなければならない、もちろんPythonにもあるのだがPythonはpublic or private or protectedとつけるではなくアンダースコア_をつけるだけなので正直わかりにくい。

TypeScriptはpublic or private or protectedとつけるので比較的わかりやすいと思われる。

C++ Java C#などではpublic or private or protectedとつけるので相性はPythonよりTypeScriptのほうが良い気がする。

もう1つは変数に型がないということで実行するまで型エラーがわからないということこの2つだけなのだ。

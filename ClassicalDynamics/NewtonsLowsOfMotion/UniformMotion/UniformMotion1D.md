# 1次元の等速直線運動

## 理論

$x_0$ 座標x 最初は初期値に設定した値が入る。

$v_{0x}$ 速度x 最初は設定した値が初期値になる。

$t$ 時間ここでは現在時刻になる。

$x = x_0 + v_{0x}t$

## 前提条件

そもそも1次元なので左右にしか動けない。

今回使わない条件

1. 質量を考えないつまり重さはない。
2. 加速度は考えない。
3. 空間は無重力を想定している。空気抵抗や摩擦はない。

今回使う条件

1. 座標x 座標はxのみだよ☺️
2. 時間time
3. 速度vx 速度がないと動かないよ😥

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

## 初期値(パラメーター設定)

```py
if __name__ == "__main__":
    initX = 0.0 # 座標xの初期値
    initVX = 2.0 #速度xの初期値
    deltaTime = 0.1 #経過時間の値
    totalTime = 4.0 #総合時間
```

## クラス設計( or 関数設計)

クラス変数の初期化(他の言語はコンストラクタという)

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

ところでなぜプロトタイプにPythonの他にTypeScriptが必要なのだろうか。

理由は基本的に2つ有る。

クラスのオブジェクトでしかアクセスしてはいけないとこに変数や関数(メソッド)がアクセスできてしまうからである。

通常は変数やコンストラクタあるいはメソッド(関数)前にpublic or private (or protected はあとで説明)の設定しなければならない、もちろんPythonにもあるのだがPythonはpublic or private or protectedとつけるではなくアンダースコア_をつけるだけなので正直わかりにくい。

TypeScriptはpublic or private or protectedとつけるので比較的わかりやすいと思われる。

C++ Java C#などではpublic or private or protectedとつけるので相性はPythonよりTypeScriptのほうが良い気がする。

もう1つは変数に型がないということで実行するまで型エラーがわからないということただ理由はこの2つだけなのだ。

## TypeScript編

## 初期値(パラメーター設定) ts編

```typescript
let render = () => {
    let initX : number = 0.0 //座標xの初期値
    let initVX : number= 2.0 //速度xの初期値
    let deltaTime : number = 0.1 //経過時間の値
    let totalTime : number = 4.0 //総合時間
    let unim1d = new Unim1D(initX, initVX, deltaTime, totalTime);
    unim1d.dataWrite();
}

render();
```

## クラス設計( or 関数設計)  ts編

変数は本来全てprivateもしくはprotected(クラスの継承で使う)にするべき。ただしコンストラクタとデータ出力は基本的にpublic。

privateはクラス内のみ参照が可能
publicはどこからでもアクセスできる。
protectedクラス内もしくは継承クラス(派生クラス)内のみにしか使えない。

コンストラクタ変数の初期化

```typescript
class Unim1D {
    private locationX: number = 0;
    private velocityX: number = 0;
    private deltaTime: number = 0;
    private totalTime: number = 0;
    private steps: number = 0;
    public constructor(initX: number, initVX: number, deltaTime: number, totalTime: number) {
        this.locationX = initX;
        this.velocityX = initVX;
        this.deltaTime = deltaTime;
        this.totalTime = totalTime;
        this.steps = Math.floor(this.totalTime / this.deltaTime);
    }
```

座標xを求める関数(Unim1クラスの関数)

$x = x_0 + v_{0x}t$の部分

```typescript
private calcX(nowTime: number): number {
        return this.locationX + this.velocityX * nowTime;
}
```

データの出力を行う関数(Unim1クラスの関数)

```typescript
 public dataWrite(): any {
        let nowlocX : number = 0, nowTime : number = 0;
        for(let count = 1; count <= this.steps; count++){
            nowlocX = this.calcX(nowTime);
            console.log(nowTime, nowlocX);
            nowTime = nowTime + this.deltaTime;
        }
    }
```

見てわかるとおりほぼすべての変数がプライベートのなっているのがわかる。

constructorとdatawriteがpublicとなっている。

[^1]: 座標を表す英語はcoordinateだがpositionやlocationの方が分かりやすい

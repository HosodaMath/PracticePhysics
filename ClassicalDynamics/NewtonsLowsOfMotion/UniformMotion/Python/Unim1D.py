import math
import matplotlib.pyplot as plt
class Unim1D:
    #変数の初期化(constructor)
    def __init__(self, initX, initVX, deltaTime, totalTime):
        self.locationX = initX
        self.velocityX = initVX
        self.deltaTime = deltaTime
        self.totalTime = totalTime
        self.steps = int(self.totalTime / self.deltaTime)
    
    def calcX(self, nowTime : float) -> float:
        return self.locationX + self.velocityX * nowTime   

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


if __name__ == "__main__":
    initX = 0.0 # 座標xの初期値
    initVX = 2.0 #速度xの初期値
    deltaTime = 0.1 #経過時間の値
    totalTime = 4.0 #総合時間

    unim1d = Unim1D(initX, initVX, deltaTime, totalTime)
    unim1d.dataWrite()
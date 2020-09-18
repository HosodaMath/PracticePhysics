import math
import matplotlib.pyplot as plt
class Unim1D:
    #変数の初期化(constructor)
    def __init__(self, initX, initVX, deltaTime, totalTime):
        self.locationX = initX
        self.velocityX = initVX
        self.deltaTime = deltaTime
        self.totalTime = totalTime
        self.steps = math.floor(self.totalTime / self.deltaTime)
    
    def calcX(self, nowTime : float) -> float:
        return self.locationX + self.velocityX * nowTime   

    def dataWrite(self):
        nowlocX, nowTime = 0, 0
        for _count in range(self.steps):
            nowlocX = self.calcX(nowTime)
            print(nowTime, nowlocX)
            nowTime = nowTime + self.deltaTime


if __name__ == "__main__":
    initX = 0.0 # 座標xの初期値
    initVX = 0.0 #速度xの初期値
    deltaTime = 2.0 #経過時間の値
    totalTime = 4.0 #総合時間

    unim1d = Unim1D(initX, initVX, deltaTime, totalTime)
    unim1d.dataWrite()
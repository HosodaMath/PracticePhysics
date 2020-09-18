"use strict";
class Unim1D {
    constructor(initX, initVX, deltaTime, totalTime) {
        this.locationX = 0;
        this.velocityX = 0;
        this.deltaTime = 0;
        this.totalTime = 0;
        this.steps = 0;
        this.locationX = initX;
        this.velocityX = initVX;
        this.deltaTime = deltaTime;
        this.totalTime = totalTime;
        this.steps = Math.floor(this.totalTime / this.deltaTime);
    }
    calcX(nowTime) {
        return this.locationX + this.velocityX * nowTime;
    }
    dataWrite() {
        let nowlocX = 0, nowTime = 0;
        for (let count = 1; count <= this.steps; count++) {
            nowlocX = this.calcX(nowTime);
            console.log(nowTime, nowlocX);
            nowTime = nowTime + this.deltaTime;
        }
    }
}
let render = () => {
    let initX = 0.0; //座標xの初期値
    let initVX = 2.0; //速度xの初期値
    let deltaTime = 0.1; //経過時間の値
    let totalTime = 4.0; //総合時間
    let unim1d = new Unim1D(initX, initVX, deltaTime, totalTime);
    unim1d.dataWrite();
};
render();
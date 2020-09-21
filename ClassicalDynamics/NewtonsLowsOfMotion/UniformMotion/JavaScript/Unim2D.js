"use strict";
class Unim1D {
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initVX Initial value of velocity x
     * @param deltaTime incremental time
     * @param totalTime total time
     */
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
    /**
     *
     * @param nowTime now time
     */
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
class Unim2D extends Unim1D {
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initY Initial value of y coordinate
     * @param initVX Initial value of velocity x
     *  @param initVY Initial value of velocity y
     * @param deltaTime incremental time
     * @param totalTime total time
     */
    constructor(initX, initY, initVX, initVY, deltaTime, totalTime) {
        super(initX, initVX, deltaTime, totalTime);
        this.locationY = 0;
        this.velocityY = 0;
        this.locationY = initY;
        this.velocityY = initVY;
    }
    /**
     *
     * @param nowTime now time
     */
    calcY(nowTime) {
        return this.locationY + this.velocityY * nowTime;
    }
    dataWrite() {
        let nowlocX = 0, nowlocY = 0;
        let nowTime = 0;
        for (let count = 0; count < this.steps; count++) {
            nowlocX = this.calcX(nowTime);
            nowlocY = this.calcY(nowTime);
            console.log(nowlocX, nowlocY);
            nowTime = nowTime + this.deltaTime;
        }
    }
}
let render = () => {
    let initX = 0.0; //座標xの初期値
    let initY = 0.0; //座標xの初期値
    let initVX = 2.0; //速度xの初期値
    let initVY = 5.0; //速度yの初期値
    let deltaTime = 0.1; //経過時間の値
    let totalTime = 4.0; //総合時間
    let unim2d = new Unim2D(initX, initY, initVX, initVY, deltaTime, totalTime);
    unim2d.dataWrite();
};
render();

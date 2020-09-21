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
        this.locationX = this.locationX + this.velocityX * nowTime;
        return this.locationX;
    }
    dataWrite() {
        let nowlocX = 0, nowTime = 0;
        nowlocX = this.calcX(nowTime);
        fill(color(0, 255, 127));
        circle(nowTime, nowlocX, 50);
        console.log(nowTime, nowlocX);
        nowTime = nowTime + this.deltaTime;
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
        this.nowLocation = new Vector2(0, 0);
    }
    /**
     *
     * @param nowTime now time
     */
    calcY(nowTime) {
        this.locationY = this.locationY + this.velocityY * nowTime;
        return this.locationY;
    }
    dataWrite() {
        //let nowlocX = 0, nowlocY = 0;
        let nowTime = 0;
        this.nowLocation.x = this.calcX(nowTime);
        this.nowLocation.y = this.calcY(nowTime);
        fill(color(0, 255, 127));
        circle(this.nowLocation.x, this.nowLocation.y, 50);
        console.log(nowLocation.x, nowLocation.y);
        nowTime = nowTime + this.deltaTime;
    }
}


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

    private calcX(nowTime: number): number {
        return this.locationX + this.velocityX * nowTime;
    }

    dataWrite(): any {
        let nowlocX : number = 0, nowTime : number = 0;
        for(let count = 1; count <= this.steps; count++){
            nowlocX = this.calcX(nowTime);
            console.log(nowTime, nowlocX);
            nowTime = nowTime + this.deltaTime;
        }
    }
}

let render = () => {
    let initX : number = 0.0 //座標xの初期値
    let initVX : number= 2.0 //速度xの初期値
    let deltaTime : number = 0.1 //経過時間の値
    let totalTime : number = 4.0 //総合時間
    
    let unim1d = new Unim1D(initX, initVX, deltaTime, totalTime);
    unim1d.dataWrite();
}

render();
function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}

function draw(){

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
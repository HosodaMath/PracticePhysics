let unim2d;
function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    setupUnim();
}

function draw(){
    const backColor = color(0, 0, 0);
    backPaints1(backColor);
    render();
}

let backPaints1 = (backColor) => {
    background(backColor);
}

let setupUnim = () => {
    let initX = 0.0; //座標xの初期値
    let initY = 0.0; //座標xの初期値
    let initVX = 2.0; //速度xの初期値
    let initVY = 5.0; //速度yの初期値
    let deltaTime = 0.1; //経過時間の値
    let totalTime = 4.0; //総合時間
    unim2d = new Unim2D(initX, initY, initVX, initVY, deltaTime, totalTime);
}

let render = () => {
    unim2d.dataWrite();
};

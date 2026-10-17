let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}

function draw(){
    background("white");
    fill('limegreen');
    circle(posX ,height/2 ,100);
    posX= posX+xSpeed;
    if (posX> width){
        xSpeed = xSpeed*-1;
    }
    if (posX < 0){
        xSpeed = xSpeed*-1;
    }
}
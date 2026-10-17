let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;


function setup(){
    createCanvas(200, 300);
    background("black");
    fill("pink");
    textAlign(CENTER,CENTER);
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 100;
    
}

function draw(){
    background("black");
    textSize(20);
    for(let i = 0; i< 4; i = i+1){
        fill("pink");
        text(pokemons[i],width/2,yPos);
        yPos = yPos + 30
    }

}
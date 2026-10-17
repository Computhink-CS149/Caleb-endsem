let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;
let xpos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    textAlign(CENTER,CENTER);
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 100;
}

function draw(){
    textSize(20);
    for(let i = 0; i< 4; i = i+1){
        text(pokemons[i],xPos,yPos);

    }


}
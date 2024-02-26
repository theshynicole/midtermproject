var xss=[];
var yss=[];
var curly=[];
var spinny=[];
var colour=[];
var shape=[];


function setup(){
    createCanvas(1080,1080);//720,480 original canvas size
    //I had to mess around with the canvas size to fit the screen
    // saveCanvas('midterm.jpg');
    //Note to self: re-add saveCanvas after completing project
    for(var i=0;i<600;i++){
        xss.push(random(width));
        yss.push(random(height));
        curly[i]=random(-10,10);
        spinny[i]=random(10,20);
        // colour[i]=random(255),random(255),random(255);
        colour[i]=colourPlease();//pick one of the 6 possible strings
        // console.log(colour[i]);
        shape[i]=shapePlease();
        console.log(shape[i]);
    }
    noStroke();
}

function colourPlease(){
    var ourColours=["Coral","pink","yellow","Lavender","Powderblue","Teal"];
    //These are the colours that I have decided to choose
    var randomNumber=random(ourColours.length-1);
    randomNumber=randomNumber.toFixed(0);
    return ourColours[randomNumber];
}

function shapePlease(){
    var shapes=["circle","triangle","rectangle","square","ellipse","arc"];
    var randomNumber=random(shapes.length-1);
    randomNumber=randomNumber.toFixed(0);
    console.log(shapes[randomNumber]);
    return shapes[randomNumber];
}

function draw(){
    background(30,140,200,20);
    for(var i=0;i<xss.length;i++){
        yss[i]+=random(2);
        if(yss[i]>height){
            yss[i]=-10;
        }
        push();
        translate(xss[i],yss[i]);
        rotate(frameCount/spinny[i]);
        fill(colour[i]);
        //shape[i] tells us which one to pick
        if(shape[i]==="rectangle"){
            rect(curly[i],curly[i],10,10);
        }
        if(shape[i]==="circle"){
            ellipse(curly[i],curly[i],10,1000);
        }
        if(shape[i]==="triangle"){
            triangle(0,-5,-5,5,10,100);
        }
        if(shape[i]==="sqaure"){
            square(30,20,1000);
        }
        if(shape[i]==="ellipse"){
            ellipse(56,36,55,1000);
        }
        // rect(curly[i],curly[i],10,10);
        // ellipse(curly[i],curly[i],10,10);
        // triangle(0,-5,-5,5,5,5);
        if(shape[i]==="quad"){
            quad(50, 62, 86, 50, 50, 38, 14, 50);
        }
        if(shape[i]==="arc"){
        arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
        describe('A white ellipse with a black outline. The top-right third is missing.');
        }
        pop();
    }
    
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
//This was a first attempt at making the canvas size full-screen
//I don't think the function windResized worked,but I added anyway
//tutorial:https://p5js.org/reference/#/p5/windowResized

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let fs = fullscreen();
      fullscreen(!fs);
    }}
    //This kind of worked?
    //Not too sure if commenting out function windowResized worked but I think this is where I was thinking
    //If you click on screen it then re-sizes to fullscreen
    //press the escape button on your laptop to exit out of the canvas
    //Tutorial from:https://p5js.org/reference/#/p5/fullscreen

 function keyPressed() {
    if (key === 's') {//the key to press is s on keyborard
      saveGif('midterm project', 5);
   }}
   //Tutorial: https://p5js.org/reference/#/p5/saveGif
   //Note with saveGif: might take awhile to save gif
   //Added it cause I thought it would be cool to see it in motion
   //Also the gif might glitch out if you save it but I thought it would be cool to keep it
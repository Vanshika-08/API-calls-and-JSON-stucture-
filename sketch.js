const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if{
        bg = "sunrise2.png";
    }
    else if{
        bg = "sunset10.png";
    }
    else if{
        bg = "sunset11.png";
    }   
    else{
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);

    Engine.update(engine);

    // write code to display time in correct format here


}

getBackgroundImg(){
    
    

    }
    // write code to fetch time from API
    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        //console.log(responseJSON.datetime);
    
        //change the data in JSON format
        var dt = responseJSON.datetime;
        
        console.log(hour);

    // write code slice the datetime
    var hour = dt.slice(11,13);

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}

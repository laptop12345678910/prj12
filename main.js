var Peter_Pan_Song="";
var Hogwards_Theme_Song="";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

ScoreleftWrist = 0;
ScorerightWrist = 0;

function Preload()
{
    Peter_Pan_Song = loadSound("music2.mp3");
    Hogwards_Theme_Song = loadSound("music.mp3");
}

function play()
{
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center(); 

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.posenet(video , modelLoaded)
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("!!!PoseNet Model Has Been Initialized!!!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
         
        console.log("LeftWristX = " + leftWristX , "LeftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY - result[0].pose.rightWrist.y;

        console.log("rightWristX = " + rightWristX , "rightWristY = " + rightWristY);
    }
}
 
function draw(){
    image(video, 0, 100, 600, 500);
}
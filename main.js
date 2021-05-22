nose_x=0;
nose_y=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
// to access the webcam
video=createCapture(VIDEO);
video.size(300,300);
video.hide(); 
//to initialize the post net model
posenet=ml5.poseNet(video,modelloaded);
// to execute the comparision
posenet.on('pose',gotposes);
}
//to fetch the live view of the webcam
function draw(){
image(video,0,0,300,300);
//to draw a red circle
//fill(255,0,0);
//stroke(255,0,0);
//circle(nose_x,nose_y,20);
image(clown_nose,nose_x,nose_y,30,30);
}
function take_snapshot(){
save('image.png');
console.log("snap");
}
//to define the modelloaded function
function modelloaded(){
    console.log('Post net is intialized');
}
//to define gotposes()
function gotposes(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-15;
    nose_y=results[0].pose.nose.y-15;
    console.log("nose x="+nose_x);
    console.log("nose y="+nose_y);
}
}
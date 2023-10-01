function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(150, 150);
    video=createCapture(VIDEO)
    video.hide();
    color="";
}
function draw(){
    image(video, 230, 150, 220, 200);
    fill("red");
    circle(50,50,80);
    
    circle(600,400,80);
    circle(50,400,80);
    circle(600,50,80);
    fill("green");
    rect (90,400,460,20)
    rect (90,400,460,20)
    rect (90,400,460,20)
    rect (90,40,460,20)
    rect (40, 100, 20, 250)
    rect (590, 100, 20, 250)
    
    
}
function take_snapshot(){
    save ("picture.png")
}
 

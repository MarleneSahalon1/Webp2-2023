function setup (){
    createCanvas(1350,800);
    frameRate(10);
}

function draw(){
    background(0);
    ellipseMode(CENTER);
    rectMode(CENTER);
// first building
    fill(0);
    stroke(115);
    rect(640,300,500,600);
    fill(255,255,128);
    rect(450,100,60,60); 
    rect(550,100,60,60);
    rect(450,200,60,60);
    rect(550,200,60,60);
    rect(450,300,60,60); // windows
    rect(550,300,60,60);
    rect(450,400,60,60);
    rect(550,400,60,60);

    rect(660,250,10,628); // post

    rect(750,100,60,60);
    rect(750,200,60,60);
    rect(750,300,60,60);
    rect(750,400,60,60);

    rect(850,100,60,60); // windows
    rect(850,200,60,60); 
    rect(850,300,60,60); 
    rect(850,400,60,60); 

    rect(480,480,120,60); // large windows
    rect(820,480,120,60); 

    rect(596,500,100,130); // doors
    rect(704,500,100,130); 

    rect(600,500,50,10); // door handles
    rect(708,500,50,10); 

    // Second Building

    fill(0);
    rect(200,300,300,550);
    fill(255,255,128);

    rect(90,100,50,70); // left windows
    rect(90,200,50,70); 
    rect(90,300,50,70); 
    rect(90,400,50,70); 
    rect(90,500,50,70);

    rect(144,100,50,70); // right windows
    rect(144,200,50,70);
    rect(144,300,50,70);
    rect(144,400,50,70);
    rect(144,500,50,70);

    rect(222,300,10,480);
    rect(244,300,10,480); // door posts
    rect(266,300,10,480);

    rect(244,500,80,100); //big door
    rect(244,500,50,100); //big door bar
    rect(244,500,10,100); //big door cross post

    // Third Building

    fill(0);
    rect(1090,300,300,550);
    fill(255,255,128);

    rect(980,100,50,70); 
    rect(980,200,50,70); 
    rect(980,300,50,70); 
    rect(980,400,50,70); 
    rect(980,500,50,70);

    rect(1034,100,50,70);
    rect(1034,200,50,70);
    rect(1034,300,50,70);
    rect(1034,400,50,70);
    rect(1034,500,50,70);

    rect(1112,300,10,480);
    rect(1134,300,10,480); 
    rect(1156,300,10,480);

    rect(1132,500,80,100);
    rect(1132,500,50,100);
    rect(1132,500,10,100);

    //Lamp Posts
    var fireRed = random(255);
    var fireGreen = random(fireRed);
    var fireBlue = random(fireGreen);
    fill (fireRed, fireGreen, fireBlue);
    stroke(0);
    
    ellipse(1330,350,60,60);
    rect(1330,530,10,300);

    ellipse(1300,400,40,40);
    rect(1300,570,8,300);

    ellipse(1270,450,20,20);
    rect(1270,610,6,300);

    ellipse(1250,500,15,15);
    rect(1250,656,4,300);


} 
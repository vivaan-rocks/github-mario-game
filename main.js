noseX='';
noseY='';
marioX='';
marioY='';
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	//canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
	video.size(600,300);
	canvas.parent('canvas');
	instializeInSetup(mario);
	poseNet=ml5.poseNet(video,modelloaded);
	poseNet.on('pose',gotposes);
}

function draw() {
	game()
	if(noseX < 300){
		marioX=marioX - 1;
	}
	if(noseX > 300){
		marioX=marioX + 1;
	}
	if(noseY < 150){
		marioY=marioY - 1;
	}
}
function modelloaded(){
	console.log("model loaded");
}
function gotposes(results){
	if(results.length > 0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
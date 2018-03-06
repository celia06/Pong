let Ball;
let p1
let p2
function setup(){

	createCanvas(windowWidth,windowHeight);
	p1 = new paddle(1,color('#EB96FA'))
	p2 = new paddle(2 ,color('#A27EA8'))
	Ball = new ball();

	frameRate(60);
}

function draw(){

	background("purple");
	drawLine();
	Ball.draw();
	Ball.move();
	if(Ball.collision(p1) || Ball.collision(p2)){
		Ball.move()
	}
	let checkScore = Ball.checkScore()
	if (checkScore=== 2)
		p2.updateScore()
	else if( checkScore === 1)
		p1.updateScore()
	p1.draw();
	p2.draw();

	if(keyIsPressed){
		if(keyIsDown(87))
			p1.move(-1)
		if(keyIsDown(83))
			p1.move(1)
		if(keyIsDown(UP_ARROW))
			p2.move(-1)
	 	if(keyIsDown(DOWN_ARROW))
			p2.move(1)
	}

	showScore()
}



function keyPressed(){

	switch(keyCode) {
		case 87:
			p1.move(-1)
			break
		case 83:
			p1.move(1)
			break
		case UP_ARROW:
			p2.move(-1)
			break
		case DOWN_ARROW:
			p2.move(1)
			break

	}
}

const drawLine = function(){

	stroke('black');
	strokeWeight(5);
	line(width / 2, 0, width / 2, height);

}
const showScore = function(){

	fill('#fff')
	textSize(50)
	text(p1.getScore(),width *0.25,70)
	text(p2.getScore(),width *0.75,70)

}



const ball = function(){
	const r = 20;
	let x =Math.floor(width/2);
	let h =Math.floor(height/2); 
	let stepX = 5;
	let stepH = 5;





	const collision = function(player){

		let dx = Math.abs(x-player.getX() - player.getW()/2)
		let dh = Math.abs(h- player.getY() - player.getH()/2)

		if(dx > player.getW() /2 + r || dh >player.getH()/2 + r){
			return false
		}
		if(dx <= player.getW() / 2 || dh <= player.getH()/2){
			stepX =- stepX
			return true
		}

	}



	const reset = function(){

		x = Math.floor(width/2);
		h = Math.floor(height/2);
		stepX *= Math.round(Math.random())* 2- 1;
		stepH *= Math.round(Math.random())*2-1;
	}

	const edges = function(){


		if(h - r <= 0 || h + r >= height)
		{
			stepH = -stepH 
		}
	} 

	const checkScore = function(){
		if(x-r<=0){
			reset()
			return 2

		}
		if(x+r > width){
			reset()

			return 1
		}
		return 0

	}

	const move = function(){
		x+=stepX;
		h+=stepH;
		edges();
	}

	const draw = function()  {

		ellipseMode(CENTER);
		noStroke()
		fill('white');
		ellipse(x,h,r*2,r*2);

		
	}
	return{
		draw,
		move,
		collision,
		checkScore, 
		

	}
}
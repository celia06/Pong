const paddle = function(player,color){

	const c = color
	const w = 30
	const h = 200
	const p = player
	const x = p === 1 ? 0 : width - w
	const speed = 8
	let y = Math.floor(height/2)
	let score = 0
	const UP = -1
	const DOWN =1

	const getX = function(){
		return x
	}

		const getY = function(){
		return y
	}

		const getW = function(){
		return w
	}

		const getH = function(){
		return h
	}
	const getScore = function(){
		return score
	}
	const draw = function (){

		rectMode(CORNER)
		fill(c)
		noStroke()
		rect(x,y,w,h)
	}
	const move= function(dir){
		if(edge(dir))
		y+= (speed * dir)

	}
	const edge = function(dir){


		return(dir === UP && y > 0 || dir === DOWN && y < height - h)


	}
	const updateScore = function( ){
		score++
	}

	return{

		draw,
		move,
		getX,
		getY,
		getW, 
		getH, 
		getScore,
		updateScore,
	}

}
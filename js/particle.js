//this.addEventListener("DOMContentLoaded", ready, true);

	var canvas;
	var canvasWidth;
	var canvasHeight;
	var ctx;
	var particles = [];
	
	var red = 'rgb(255, 0, 0)';
	
	var green = 'rgb(0, 255, 0)';
	
	var blue = 'rgb(0, 0, 255)';
	
	var counterNum = '0';
	 
	canvas = document.getElementById('myCanvas');
	canvasWidth = 500;
	canvasHeight = 500;
	ctx = canvas.getContext('2d');
	 
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	
	Math.nRandom = function(){
		return Math.random() * 2 - 1;
	};
	
	var Particle = function(c) {
	
	//  Random
		/*this.x = Math.random() * canvasWidth;
		this.y = Math.random() * canvasHeight;
		this.vx = Math.nRandom() * 30;
		this.vy = Math.nRandom() * 30;
		this.r = Math.random() * 20 + 5;
		this.dt = 0.05;*/
		
	//  center
		this.x = canvasWidth/2;
		this.y = canvasHeight/2;
		this.vx = Math.nRandom() * 30;
		this.vy = Math.nRandom() * 30;
		this.r = Math.random() * 20 + 5;
		this.dt = 0.05;

		var color = c ;
		
		this.update = function(){
			this.x += this.vx * this.dt;
			this.y += this.vy * this.dt;
			
			//showcounter(ctx, counterNum);
		};
		 

		this.draw = function(){
			
			drawCircles(ctx , this.x, this.y, this.r, color)
			//drawHearts(ctx, this.x, this.y);
		};
	};
	 
	function addParticles(nmbr,c) {
		for(var i = 0; i < nmbr; i++) {
			var p = new Particle(c);
			particles.push(p);
		};
	};
	
	
	function drawCircles(ctx , x, y, radius, color){
		
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(x,y,radius,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();

	}
	
	
	function drawHearts(ctx , x, y){
		
		ctx.beginPath();
		ctx.lineCap = "round";
		ctx.lineWidth = 8;
		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";
		ctx.moveTo(x, y);
		ctx.quadraticCurveTo(105,150,200, 215); 
		ctx.quadraticCurveTo(290, 150,300, 90);
		ctx.quadraticCurveTo(250, 30, 200, 90);
		ctx.quadraticCurveTo(150, 30, 100, 90);
		ctx.stroke();
		ctx.fill();

	}
	
	function showcounter(ctx, num){
		ctx.fillStyle = "black";
		ctx.font = "bold 16px Arial";
		ctx.fillText(num, 100, 100);
	
	}
	
	//addParticles(1);
	
	function redrawAndUpdate() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		for (var i = 0; i < particles.length; i++) {
			 particles[i].update();
			 particles[i].draw();
		}
	}
	
	setInterval(redrawAndUpdate, 50);


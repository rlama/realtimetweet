this.addEventListener("DOMContentLoaded", ready, true);

function ready(e)
{
	var canvas;
	var canvasWidth;
	var canvasHeight;
	var ctx;
	var particles = [];
	 
	canvas = document.getElementById('myCanvas');
	canvasWidth = 450;
	canvasHeight = 200;
	ctx = canvas.getContext('2d');
	 
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	
	Math.nRandom = function(){
		return Math.random() * 2 - 1;
	};
	
	var Particle = function() {
		this.x = Math.random() * canvasWidth;
		this.y = Math.random() * canvasHeight;
		this.vx = Math.nRandom() * 30;
		this.vy = Math.nRandom() * 30;
		this.r = Math.random() * 20 + 5;
		this.dt = 0.05;
		
		var color = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 50%)';
		
		this.update = function(){
			this.x += this.vx * this.dt;
			this.y += this.vy * this.dt;
		};
		 
		this.draw = function(){
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
			ctx.closePath();
			ctx.fillStyle = color;
			ctx.fill();
		};
	};
	 
	function addParticles(nmbr) {
		for(var i = 0; i < nmbr; i++) {
			var p = new Particle;
			particles.push(p);
		};
	};
	addParticles(10);
	
	function redrawAndUpdate() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		for (var i = 0; i < particles.length; i++) {
			 particles[i].update();
			 particles[i].draw();
		}
	}
	
	setInterval(redrawAndUpdate, 50);
	
	// code for handling the button!
	var myButton = document.getElementById("clickButton");
	myButton.addEventListener("click", 
		function () {
			addParticles(10);
		}, false);
}
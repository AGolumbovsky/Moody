
setInterval(
function draw() {
		var canvas = document.getElementById('drawGrin');
		var ctx = canvas.getContext('2d');

		// provide for changing the curve parameters dynamically
		//var cornerStartX = 25;
		//var cornerStartY = 75;
		//var cornerEndX = 300 - cornerStartX; //canvas width default = 300
		//var cornerEndY = cornerStartY; // maybe redundant

		// make this respond to average moods 0 -- 1 to 0 -- 150 pts
		var ctrlPtY = 0; // default for neutral

		//clear the canvas before drawing
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//draw the grin
			

			var randy = Math.random() * (150 - 5) + 5

			ctx.lineWidth = 8;
			ctx.beginPath();
			ctx.moveTo(50, 75);
			ctx.quadraticCurveTo(150, randy, 250, 75);
			ctx.stroke();


		

	}, 500);







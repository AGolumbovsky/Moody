
function draw() {
		var canvas = document.getElementById('drawGrin');
		var ctx = canvas.getContext('2d');

		// provide for changing the curve parameters dynamically
		//var cornerStartX = 25;
		//var cornerStartY = 75;
		//var cornerEndX = 300 - cornerStartX; //canvas width default = 300
		//var cornerEndY = cornerStartY; // maybe redundant

		// make this respond to average moods 0 -- 1 to 0 -- 150 pts
		var ctrlPtY = 100; // default for neutral

		//draw the grin
		ctx.lineWidth = 8;
		ctx.beginPath();
		ctx.moveTo(25, 75);
		ctx.quadraticCurveTo(150, ctrlPtY, 275, 75);
		ctx.stroke();

	};	

draw();


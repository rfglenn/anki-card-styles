window.setTimeout(function() {
	let data = window.whiteboard.imageData;
	let canvas = document.getElementById('whiteboard');
	canvas.width = window.whiteboard.canvas.width;
	canvas.height = window.whiteboard.canvas.height;
	canvas.getContext('2d').putImageData(data, 0, 0);
}, 0);

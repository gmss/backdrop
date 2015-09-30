document.addEventListener('DOMContentLoaded', function() {

	var backgrounds = [ Words, Div('gmss-logo', 5000), DNA ],
		nextBackground = -1;

	function bg() {
		var background = backgrounds[++nextBackground] ||
			backgrounds[nextBackground = 0];
		background.start();
		setTimeout(function() {
			background.stop();
			setTimeout(function() {
				Facts.show(bg);
			}, background.deathTime);
		}, background.length);
	}
	bg();

	document.querySelector("body").addEventListener("click", function() {
		var d = document.documentElement;
		(d.requestFullscreen || d.mozRequestFullScreen || d.webkitRequestFullscreen)
			.call(d);
	});
});
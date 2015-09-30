var Words = (function() {

	var div,
		onTime = 3000,
		deathTime = 800,
		maxWords = 6,
		interval = (onTime + deathTime) / maxWords,
		intervalHandle;
	document.addEventListener('DOMContentLoaded', function() {
		div = document.getElementById('words');
	});

	return {
		start: start,
		stop: stop,
		length: 10000,
		deathTime: 1500
	};

	function start() {
		div.innerHTML = '';
		var w = div.offsetWidth,
			h = div.offsetHeight,
			children = [];
		for (var y = 0; y < maxWords; ++y) {
			var child = document.createElement('div');
			children.push({
				div: child
			});
			div.appendChild(child);
		}
		var next = -1,
			nextWord = -1;
		intervalHandle = setInterval(function() {
			var child = children[++next] || children[next = 0];
			child.div.innerHTML = words[++nextWord] || words[nextWord = 0];
			child.div.style.top = (Math.random() * h) + 'px';
			child.div.style.left = (Math.random() * w) + 'px';
			child.div.classList.add('on');
			setTimeout(function() {
				child.div.classList.remove('on');
			}, onTime);
		}, interval);
	}

	function stop() {
		if (intervalHandle)
			clearInterval(intervalHandle);
		intervalHandle = null;
	}

})();
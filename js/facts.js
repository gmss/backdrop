var Facts = (function () {

	var next = -1,
		factContainer,
		factText,
		factDeathTime = 400;

	document.addEventListener('DOMContentLoaded', function() {
		factContainer = document.getElementById('fact-container');
		factText = document.getElementById('fact-text');
	});

	facts.forEach(function(fact) {
		fact.life = fact.text.length * 100 + factDeathTime;
	});

	function show(callback) {
		var fact = facts[++next] || facts[next = 0];
		factText.innerHTML = fact.text;
		setTimeout(function() {
			factContainer.classList.remove('preon');
		});
		setTimeout(function() {
			factContainer.classList.add('preon');
			factContainer.classList.add('on');
		}, 100);
		setTimeout(function() {
			factContainer.classList.remove('on');
			if (callback)
				setTimeout(callback, factDeathTime);
		}, fact.life);
	}

	return {
		show: show
	};
})();
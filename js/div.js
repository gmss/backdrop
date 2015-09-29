function Div(id, length) {
	return {
		start: function() {
			var div = document.getElementById(id);
			div.classList.add('on');
			div.classList.remove('off');
		},
		stop: function() {
			var div = document.getElementById(id);
			div.classList.add('off');
			div.classList.remove('on');
		},
		length: length
	};
}
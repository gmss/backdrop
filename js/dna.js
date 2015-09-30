var DNA = (function() {

	var table,
		cellOnTime = 400,
		actionInterval = 30,
		lineWeight = .15,
		lineDelay = 100,
		perSide = 20,
		interval;
	document.addEventListener('DOMContentLoaded', function() {
		table = document.getElementById('dna');
	});

	return {
		start: start,
		stop: stop,
		length: 10000,
		deathTime: 1000
	};

	function start() {
		table.innerHTML = '';
		var w = table.offsetWidth,
			h = table.offsetHeight,
			min = w > h ? h : w,
			across = (w / min) * perSide,
			down = (h / min) * perSide,
			cells = [];
		for (var y = 0; y < down; ++y) {
			var row = document.createElement('tr'),
				dataRow = [];
			for (var x = 0; x < across; ++x) {
				var cell = new Cell(across, down);
				dataRow.push(cell);
				row.appendChild(cell.td)
			}
			cells.push(dataRow);
			table.appendChild(row);
		}
		interval = setInterval(function() {
			if (Math.random() < lineWeight * across / down) {
				var x = Math.floor(Math.random() * across);
				for (var y = 0; y < down; ++y) (function(y) {
					setTimeout(function() {
						cells[y][x].light();
					}, lineDelay * y);
				})(y);
			} else
				cells[Math.floor(Math.random() * down)]
					[Math.floor(Math.random() * across)].light();
		}, actionInterval * (perSide * perSide) / (across * down));
	}

	function stop() {
		if (interval)
			clearInterval(interval);
		interval = null;
	}

	function Cell(across, down) {
		var td = this.td = document.createElement('td'),
			off;
		td.setAttribute('width', (100 / across) + '%');
		td.setAttribute('height', (100 / down) + '%');
		td.innerHTML = 'X';
		this.light = function() {
			if (off)
				clearTimeout(off);
			td.classList.add('on');
			td.classList.remove('off');
			td.innerHTML = 'GTAC'.split('')[Math.floor(Math.random() * 4)];
			off = setTimeout(function() {
				off = null;
				td.classList.remove('on');
				td.classList.add('off');
			}, cellOnTime);
		}
	}

})();
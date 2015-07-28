(function() {
	var init = function() {
		// only trigger one resize event in case multiple maps
		if(!window.onResizeRgMap) {
			setupResizeEvent();
			window.addEventListener("resize", window.onResizeRgMap, false); 
		}
	};

	var setupResizeEvent = function() {
		window.onResizeRgMap = function() {
			var NUM_COLS = 12;
			var MARGIN = 10;
			var FONT_SIZE = { min: 9, max: 16 };
			var w = document.getElementsByClassName('rg-map')[0].offsetWidth;
			var h = Math.floor(w / 1.5);

			var innerW = w - (MARGIN * 2);
			var sz = innerW / NUM_COLS;

			var updateMap = function() {
				var maps = document.getElementsByClassName("rg-svg");

				if(maps.length) {
					var num = maps.length;
					for(var i = 0; i < num; i++) {
						var el = maps[i];
						el.setAttribute("width", w);
						el.setAttribute("height", h);
					}
				}
			};

			var updateStates = function() {
				// move group
				var states = document.getElementsByClassName("rg-state");
				var rect;
				var text;
				var num;
				var el;
				var x;
				var y;

				if(states.length) {
					num = states.length;
					for(var i = 0; i < num; i++) {
						el = states[i];
						x = el.getAttribute("data-x");
						y = el.getAttribute("data-y");

						el.setAttribute("transform", "translate(" + x * sz + "," + y * sz + ")");

						rect = el.getElementsByTagName("rect")[0];
						text = el.getElementsByTagName("text")[0];

						if(rect) {
							rect.setAttribute("width", sz);
							rect.setAttribute("height", sz);
						}
						if(text) {
							text.setAttribute("x", sz * 0.5 );
							text.setAttribute("y", (sz * 0.5) + Math.round(sz * 0.125) );
							text.setAttribute("font-size", Math.min(Math.max(Math.round(sz * 0.25), FONT_SIZE.min), FONT_SIZE.max));
						}
					}
				}
			};

			updateMap();
			updateStates();
		};
	};

	init();
})();
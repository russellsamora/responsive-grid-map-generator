(function() {
	var _output;
	var _data = [{ name: 'Alabama', abbr: 'AL', x: 7, y: 6 },{ name: 'Alaska', abbr: 'AK', x: 0, y: 0 },{ name: 'Arizona', abbr: 'AZ', x: 2, y: 5 },{ name: 'Arkansas', abbr: 'AR', x: 5, y: 5 },{ name: 'California', abbr: 'CA', x: 1, y: 4 },{ name: 'Colorado', abbr: 'CO', x: 3, y: 4 },{ name: 'Connecticut', abbr: 'CT', x: 10, y: 3 },{ name: 'Delaware', abbr: 'DE', x: 10, y: 4 },{ name: 'Florida', abbr: 'FL', x: 9, y: 7 },{ name: 'Georgia', abbr: 'GA', x: 8, y: 6 },{ name: 'Hawaii', abbr: 'HI', x: 0, y: 7 },{ name: 'Idaho', abbr: 'ID', x: 2, y: 2 },{ name: 'Illinois', abbr: 'IL', x: 6, y: 2 },{ name: 'Indiana', abbr: 'IN', x: 6, y: 3 },{ name: 'Iowa', abbr: 'IA', x: 5, y: 3 },{ name: 'Kansas', abbr: 'KS', x: 4, y: 5 },{ name: 'Kentucky', abbr: 'KY', x: 6, y: 4 },{ name: 'Louisiana', abbr: 'LA', x: 5, y: 6 },{ name: 'Maine', abbr: 'ME', x: 11, y: 0 },{ name: 'Maryland', abbr: 'MD', x: 9, y: 4 },{ name: 'Massachusetts', abbr: 'MA', x: 10, y: 2 },{ name: 'Michigan', abbr: 'MI', x: 7, y: 2 },{ name: 'Minnesota', abbr: 'MN', x: 5, y: 2 },{ name: 'Mississippi', abbr: 'MS', x: 6, y: 6 },{ name: 'Missouri', abbr: 'MO', x: 5, y: 4 },{ name: 'Montana', abbr: 'MT', x: 3, y: 2 },{ name: 'Nebraska', abbr: 'NE', x: 4, y: 4 },{ name: 'Nevada', abbr: 'NV', x: 2, y: 3 },{ name: 'New Hampshire', abbr: 'NH', x: 11, y: 1 },{ name: 'New Jersey', abbr: 'NJ', x: 9, y: 3 },{ name: 'New Mexico', abbr: 'NM', x: 3, y: 5 },{ name: 'New York', abbr: 'NY', x: 9, y: 2 },{ name: 'North Carolina', abbr: 'NC', x: 7, y: 5 },{ name: 'North Dakota', abbr: 'ND', x: 4, y: 2 },{ name: 'Ohio', abbr: 'OH', x: 7, y: 3 },{ name: 'Oklahoma', abbr: 'OK', x: 4, y: 6 },{ name: 'Oregon', abbr: 'OR', x: 1, y: 3 },{ name: 'Pennsylvania', abbr: 'PA', x: 8, y: 3 },{ name: 'Rhode Island', abbr: 'RI', x: 11, y: 3 },{ name: 'South Carolina', abbr: 'SC', x: 8, y: 5 },{ name: 'South Dakota', abbr: 'SD', x: 4, y: 3 },{ name: 'Tennessee', abbr: 'TN', x: 6, y: 5 },{ name: 'Texas', abbr: 'TX', x: 4, y: 7 },{ name: 'Utah', abbr: 'UT', x: 2, y: 4 },{ name: 'Vermont', abbr: 'VT', x: 10, y: 1 },{ name: 'Virginia', abbr: 'VA', x: 8, y: 4 },{ name: 'Washington', abbr: 'WA', x: 1, y: 2 },{ name: 'West Virginia', abbr: 'WV', x: 7, y: 4 },{ name: 'Wisconsin', abbr: 'WI', x: 6, y: 1 },{ name: 'Wyoming', abbr: 'WY', x: 3, y: 3 },{ name: 'District of Columbia', abbr: 'DC', x: 9, y: 5 }];
	
	var _demo = {
		'sequential': 'AL\t$7.25\nAK\t$8.75\nAZ\t$8.05\nAR\t$7.50\nCA\t$9.00\nCO\t$8.14\nCT\t$9.15\nDE\t$8.25\nDC\t$10.50\nFL\t$8.05\nGA\t$7.25\nHI\t$7.75\nID\t$7.25\nIL\t$8.25\nIN\t$7.25\nIA\t$7.25\nKS\t$7.25\nKY\t$7.25\nLA\t$7.25\nME\t$7.50\nMD\t$8.00\nMA\t$9.00\nMI\t$8.15\nMN\t$9.00\nMS\t$7.25\nMO\t$7.65\nMT\t$8.05\nNE\t$8.00\nNV\t$8.25\nNH\t$7.25\nNJ\t$8.38\nMN\t$7.50\nNY\t$8.75\nNC\t$7.25\nND\t$7.25\nOH\t$8.15\nOK\t$7.25\nOR\t$9.25\nPA\t$7.25\nRI\t$9.00\nSC\t$7.25\nSD\t$8.50\nTN\t$7.25\nTX\t$7.25\nUT\t$7.25\nVT\t$9.15\nVA\t$7.25\nWA\t$9.47\nWV\t$8.00\nWI\t$7.25\nWY\t$7.25',
		'diverging': 'Alabama\t73\nAlaska\t-10\nArizona\t32\nArkansas\t-35\nCalifornia\t51\nColorado\t-63\nConnecticut\t41\nDelaware\t-61\nFlorida\t79\nGeorgia\t-87\nHawaii\t44\nIdaho\t-24\nIllinois\t64\nIndiana\t-62\nIowa\t54\nKansas\t-24\nKentucky\t16\nLouisiana\t-65\nMaine\t71\nMaryland\t-89\nMassachusetts\t15\nMichigan\t-74\nMinnesota\t52\nMississippi\t56\nMissouri\t-75\nMontana\t35\nNebraska\t-43\nNevada\t28\nNew Hampshire\t51\nNew Jersey\t-39\nNew Mexico\t73\nNew York\t-49\nNorth Carolina\t77\nNorth Dakota\t84\nOhio\t97\nOklahoma\t-24\nOregon\t31\nPennsylvania\t18\nRhode Island\t-61\nSouth Carolina\t38\nSouth Dakota\t24\nTennessee\t-76\nTexas\t84\nUtah\t-32\nVermont\t41\nVirginia\t-68\nWashington\t91\nWest Virginia\t-37\nWisconsin\t36\nWyoming\t37',
		'ordinal': 'Alabama\tlettuce\nAlaska\tkale\nArizona \tcucumber\nArkansas\tlettuce\nCalifornia\tkale\nColorado\tlettuce\nConnecticut\tlettuce\nDelaware\tlettuce\nDistrict of Columbia\tlettuce\nFlorida\tlettuce\nGeorgia \tcucumber\nHawaii\tlettuce\nIdaho\tlettuce\nIllinois \tcucumber\nIndiana\tlettuce\nIowa\tlettuce\nKansas \tcucumber\nKentucky\tlettuce\nLouisiana \tcucumber\nMaine \tcucumber\nMaryland\tlettuce\nMassachusetts\tlettuce\nMichigan\tlettuce\nMinnesota\tlettuce\nMississippi \tcucumber\nMissouri\tlettuce\nMontana\tlettuce\nNebraska \tcucumber\nNevada\tkale\nNew Hampshire \tcucumber\nNew Jersey\tlettuce\nNew Mexico\tlettuce\nNew York\tlettuce\nNorth Carolina\tlettuce\nNorth Dakota\tkale\nOhio\tkale\nOklahoma\tkale\nOregon\tlettuce\nPennsylvania\tkale\nRhode Island\tlettuce\nSouth Carolina\tlettuce\nSouth Dakota\tkale\nTennessee\tkale\nTexas\tlettuce\nUtah\tkale\nVermont\tlettuce\nVirginia\tlettuce\nWashington\tkale\nWest Virginia\tkale\nWisconsin\tlettuce\nWyoming\tlettuce'
	};


	var _copy = {
		hed: 'Hed',
		subhed: 'Subhed goes here.',
		sourcePre: 'SOURCE',
		sourcePost: 'Sources'
	};

	var _scale;
	var _scaleType;
	var _extent;
	var _dict;
	
	var COLORS = {
		'sequential': ['#ecf5f9','#b7c8d0','#859caa','#537383','#1f4c60'],
		'diverging': ['#1f4c60','#8698a4','#ededed','#bf897d','#82261c'],
		'ordinal': ['#437286','#75b081', '#d4cead', '#ae6a78', '#c1a5d9']
	};

	var COLORS = { 'sequential': null, 'diverging': null, 'ordinal': null };

	var GRAY = { dark: '#444', light: '#eee' };

	function init() {
		setupEvents();
	}

	function setupEvents() {
		$('.generate').on('click', function(e) {
			e.preventDefault();	
			
			$('.preview').empty();
			var val = $('.input').val();
			
			parseInput(val, function(err, data) {
				if(err) {
					alert(err);
				} else {
					chooseScale(data);
				}
			});

			return false;
		});

		$('.demo').on('click', function(e) {
			e.preventDefault();
			
			var demo = $(this).attr('data-demo');
			$('.input').val(_demo[demo]);

			return false;
		});

		$('.generate-code').on('click', generateCode);
	}

	function chooseScale(data) {
		$('.choose-scale-group').removeClass('hide');

		$('.choose-scale').on('click', function(e) {
			e.preventDefault();
			_scaleType = $(this).attr('data-scale');
			
			$('.choose-scale-group').addClass('hide');

			beginMap(data);
			return false;
		});
	}

 	function parseInput(input, cb) {
		var lines = input.split('\n');
		if(lines.length > 1) {
			parseLines(lines, function(err, result) {
				if(err) {
					cb(err);
				} else {
					cb(null, result);
				}
			});
		} else {
			cb('no data submitted');
		}
	}

	function parseLines(lines, cb) {
		var err = false;
		var result = [];

		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var cols = line.split('\t');
			if(cols.length >= 2) {
				var key = cols[0].trim();
				var str = cols[1].trim();
				
				if(key.length && str.length) {
					var number = numeral().unformat(str);

					result.push({
						'key': key,
						'str': str,
						'number': number
					});
				}
			} else {
				err = 'error with data format';
			}
		}

		cb(err, result);
	}
	
	function beginMap(data) {
		bindDataToStates(data);

		createScale(function(err, dict) {
			if(err) { alert(err); }
			else {
				createOutput(dict);		
			}
		});
	}

	function createScale(cb) {
		if(_scaleType === 'sequential' || _scaleType === 'diverging') {
			_extent = d3.extent(_data, function(d) {
				return d.value;
			});

			_scale = d3.scale.quantize()
	    		.domain(_extent)
	    		.range(COLORS[_scaleType]);	

	    	cb();
		} else if(_scaleType === 'ordinal') {
			// determine domain
			var dict = createDict();

			if(dict.length > COLORS.ordinal.length) {
				cb('too many categories');
			} else {
				_scale = d3.scale.ordinal()
		    		.domain(dict)
		    		.range(COLORS.ordinal.slice(0, dict.length));

		    	cb(false, dict);
			}
		}
	}

	function createDict() {
		var dict = _.uniq(_data, function(d) { return d.value; });
		var output = [];
		for(var d = 0; d < dict.length; d++) {
			output.push(dict[d].value);
		}
		return output;
	}

	function createOutput(dict) {
		var $container = $('<div class="rg-container"></div>');
		var $header = $('<div class="rg-header"></div>');
		var $hed = $('<div contenteditable="true" class="rg-hed">' + _copy.hed + '</div>');
		var $subhed = $('<div contenteditable="true" class="rg-subhed">' + _copy.subhed + '</div>');
		var $content = $('<div class="rg-content"></div>');
		var $sourceCredit = $('<div class="rg-source-and-credit"></div>');
		var $source = $('<div contenteditable="true" class="rg-source"><span class="pre-colon">' + _copy.sourcePre + '</span>: <span class="post-colon">' + _copy.sourcePost + '</span></div>');
		
		var $inlineStyle = '<style>/*styles for graphic info (hed, subhed, source, credit)*/\n.rg-container {\n\tfont-family: Helvetica, Arial, sans-serif;\n\tfont-size: 16px;\n\tline-height: 1;\n\tmargin: 0;\n\tpadding: 1em 0;\n\tcolor: #1a1a1a;\n}\n.rg-header {\n\tmargin-bottom: 1em;\n}\n.rg-hed {\n\tfont-family: "Benton Sans Bold", Helvetica, Arial, sans-serif;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tmargin-bottom: 0.25em;\n}\n.rg-subhed {\n\tfont-size: 0.9em;\n\tline-height: 1.4em;\n}\n.rg-source-and-credit {\n\tfont-family: Georgia,"Times New Roman", Times,serif;\n\twidth: 100%;\n\toverflow: hidden;\n\tmargin-top: 1em;\n}\n.rg-source {\n\tmargin: 0;\n\tfloat: left;\n\tfont-weight: bold;\n\tfont-size: 0.75em;\n\tline-height: 1.5em;\n}\n.rg-source .pre-colon {\n\ttext-transform: uppercase;\n}\n/*styles for map*/\n.rg-map {\n\tmargin-bottom: 1em;\n}\n.rg-state rect {\n\tstroke: #fff;\n\tstroke-width: 2px;\n\tfill: #eee;\n}\n.rg-state text {\n\tfont-family: "Benton Sans Bold", Helvetica, Arial, sans-serif;\n\tfont-weight: bold;\n\tfill: #ccc;\n}\n.rg-hide {\n\tdisplay: none;\n}\n.rg-legend {\n\tmax-width: 320px;\n\tmargin-bottom: 1em;\n}\n.rg-legend-minmax {\n\theight: 100%;\n\toverflow: hidden;\n}\n.rg-legend-minmax p {\n\tfont-size: 0.8em;\n\tcolor: #888;\n\twidth: 50%;\n\tfloat: left;\n\tline-height: 1.2;\n\tmargin: 0;\n}\n.rg-legend-minmax p:last-child {\n\ttext-align: right;\n}\n.rg-legend ul {\n\theight: 100%;\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n}\nul.rg-legend-quantitative li {\n\tlist-style-type: none;\n\tfloat: left;\n\twidth: 14.28%;\n\theight: 1em;\n\tmargin: 0;\n}\nul.rg-legend-ordinal li {\n\tlist-style-type: none;\n\tfloat: left;\n\tfont-size: 0.8em;\n\tpadding: 0.5em;\n\tmargin-right: 0.5em;\n}</style>';
		var $inlineScript = '<script type="text/javascript">!function(){var t=function(){window.onResizeRgMap||(e(),window.addEventListener("resize",onResizeRgMap,!1)),onResizeRgMap()},e=function(){window.onResizeRgMap=function(){var t=12,e=10,n={min:9,max:16},a=document.getElementsByClassName("rg-map")[0].offsetWidth,i=Math.floor(a/1.5),r=a-2*e,s=r/t,o=function(){var t=document.getElementsByClassName("rg-svg");if(t.length)for(var e=t.length,n=0;e>n;n++){var r=t[n];r.setAttribute("width",a),r.setAttribute("height",i)}},g=function(){var t,e,a,i,r,o,g=document.getElementsByClassName("rg-state");if(g.length){a=g.length;for(var m=0;a>m;m++)i=g[m],r=i.getAttribute("data-x"),o=i.getAttribute("data-y"),i.setAttribute("transform","translate("+r*s+","+o*s+")"),t=i.getElementsByTagName("rect")[0],e=i.getElementsByTagName("text")[0],t&&(t.setAttribute("width",s),t.setAttribute("height",s)),e&&(e.setAttribute("x",.5*s),e.setAttribute("y",.5*s+Math.round(.125*s)),e.setAttribute("font-size",Math.min(Math.max(Math.round(.25*s),n.min),n.max)))}};o(),g()}};t()}();</script>';


		var legend = createLegend(dict);
		var map = '<div class="rg-map"></div>';

		$content.append(legend);
		$content.append(map);
		$content.append($inlineScript);

		$sourceCredit.append($source);
		$header.append($hed);
		$header.append($subhed);
		
		$container.append($inlineStyle);
		$container.append($header);
		$container.append($content);
		$container.append($sourceCredit);

		$('.preview').empty().append($container);

		createMap();

		// just for generator
		setTimeout(window.onResizeRgMap, 17);

		$('.final').removeClass('hide');

		var scrollTo = $('.final').offset().top - 10;
		$('html, body').animate({
			scrollTop: scrollTo
		}, 250);
	}

	function createLegend(dict) {
		var html = '';
		html += '<div class="rg-legend">';
		if(_scaleType === 'sequential' || _scaleType === 'diverging') {
			var min;
			var max;
			// get string version of min and max
			for(var i = 0; i < _data.length; i++) {
				var datum = _data[i];
				if(datum.value === _extent[0]) {
					min = datum.value_string;
				}
				if(datum.value === _extent[1]) {
					max = datum.value_string;
				}
			}
			html += '<div class="rg-legend-minmax">';
			html += '<p>' + min + '</p>';
			html += '<p>' + max + '</p>';
			html += '</div>';
			html += '<ul class="rg-legend-quantitative">';

			for(var s = 0; s < COLORS[_scaleType].length; s++){
				html += '<li style="background-color: ' + COLORS[_scaleType][s] + ';"></li>';
			}

			html += '</ul>';
		} else if(_scaleType === 'ordinal') {
			html += '<ul class="rg-legend-ordinal">';
			for(var i = 0; i < dict.length; i++) {
				var col = COLORS.ordinal[i];
				var rgb = d3.rgb(col);
				var hsl = rgb.hsl();
				var offset = hsl.l - 0.5;
				var textColor = offset < 0 ? GRAY.light : GRAY.dark;	
				html += '<li style="background-color: ' + col + '; color: ' + textColor + ';">' + dict[i] + '</li>'; 
			}
			html += '</ul>';
		}
		html += '</div>';

		return html;
	}

	function createMap() {
		var NUM_COLS = 12;
		var NUM_ROWS = 8;
		var MARGIN = 10;
		
		var _map;
		var _statesGroup;
		var _states;

		var _fraction = { x: 1/NUM_COLS, y: 1/NUM_ROWS };

		_map = d3.select('.rg-map').append('svg').attr('class', 'rg-svg');

		_statesGroup = _map
					.append('g')
					.attr('class', 'rg-states-group')
					.attr('transform', 'translate(' + MARGIN + ',' + MARGIN + ')');

		_states = _statesGroup
				.selectAll('.rg-state')
					.data(_data)
				.enter().append('g')
					.attr('class', function(d) {
						var classes = 'rg-state';
						if(d.class) {
							classes += ' ' + d.class;
						}
						return classes;
					})
					.attr('id', function(d) { return d.abbr; })
					.attr('data-x', function(d) { return d.x })
					.attr('data-y', function(d) { return d.y });

		_states.append('rect')
			.style('fill', function(d) {
				if(d.value) {
					return _scale(d.value);
				}
			});

		_states.append('text')
			.text(function(d) { return d.abbr; })
			.attr('text-anchor', 'middle')
			.style('fill', function(d) {
				if(d.value) {
					var color = d3.rgb(_scale(d.value));
					var hsl = color.hsl();
					var offset = hsl.l - 0.5;
					return offset < 0 ? GRAY.light : GRAY.dark;	
				}
			});
	}

	function bindDataToStates(data) {
		// reset
		for(var i = 0; i < _data.length; i++) {
			_data[i].value = null;
		}

		// ugly, redo
		for(var j = 0; j < data.length; j++) {
			var datum = data[j];
			var state = getMatchingState(datum);
			if(state) {
				
				if(datum.str.length) {
					// sequential
					if(_scaleType === 'sequential' || _scaleType === 'diverging') {
						state.value = datum.number;
						state.value_string = datum.str;
					} else if(_scaleType === 'ordinal') {
						state.value = datum.str;
					}
				}
			}
		}

		//remove DC hack
		var dc = _data[_data.length - 1];
		if(!dc.value) {
			dc.class = 'rg-hide';
		}
	}

	function getMatchingState(datum) {
		for(var i = 0; i < _data.length; i++) {
			var key = datum.key.toLowerCase();
			if(_data[i].name.toLowerCase() === key || _data[i].abbr.toLowerCase() === key) {
				return _data[i];
			}
		}
		return null;
	}

	function generateCode() {
		updateCopy();
		
		var html = '';

		var css = '/*styles for graphic info (hed, subhed, source, credit)*/\n.rg-container {\n\tfont-family: Helvetica, Arial, sans-serif;\n\tfont-size: 16px;\n\tline-height: 1;\n\tmargin: 0;\n\tpadding: 1em 0;\n\tcolor: #1a1a1a;\n}\n.rg-header {\n\tmargin-bottom: 1em;\n}\n.rg-hed {\n\tfont-family: "Benton Sans Bold", Helvetica, Arial, sans-serif;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tmargin-bottom: 0.25em;\n}\n.rg-subhed {\n\tfont-size: 0.9em;\n\tline-height: 1.4em;\n}\n.rg-source-and-credit {\n\tfont-family: Georgia,"Times New Roman", Times,serif;\n\twidth: 100%;\n\toverflow: hidden;\n\tmargin-top: 1em;\n}\n.rg-source {\n\tmargin: 0;\n\tfloat: left;\n\tfont-weight: bold;\n\tfont-size: 0.75em;\n\tline-height: 1.5em;\n}\n.rg-source .pre-colon {\n\ttext-transform: uppercase;\n}\n/*styles for map*/\n.rg-map {\n\tmargin-bottom: 1em;\n}\n.rg-state rect {\n\tstroke: #fff;\n\tstroke-width: 2px;\n\tfill: #eee;\n}\n.rg-state text {\n\tfont-family: "Benton Sans Bold", Helvetica, Arial, sans-serif;\n\tfont-weight: bold;\n\tfill: #ccc;\n}\n.rg-hide {\n\tdisplay: none;\n}\n.rg-legend {\n\tmax-width: 320px;\n\tmargin-bottom: 1em;\n}\n.rg-legend-minmax {\n\theight: 100%;\n\toverflow: hidden;\n}\n.rg-legend-minmax p {\n\tfont-size: 0.8em;\n\tcolor: #888;\n\twidth: 50%;\n\tfloat: left;\n\tline-height: 1.2;\n\tmargin: 0;\n}\n.rg-legend-minmax p:last-child {\n\ttext-align: right;\n}\n.rg-legend ul {\n\theight: 100%;\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n}\nul.rg-legend-quantitative li {\n\tlist-style-type: none;\n\tfloat: left;\n\twidth: 14.28%;\n\theight: 1em;\n\tmargin: 0;\n}\nul.rg-legend-ordinal li {\n\tlist-style-type: none;\n\tfloat: left;\n\tfont-size: 0.8em;\n\tpadding: 0.5em;\n\tmargin-right: 0.5em;\n}';

		html += '<style>' + css + '\n</style>';

		html += '\n<div class="rg-container">';
		html += '\n\t<div class="rg-header">';

		if(_copy.hed.length > 0 ) {
			html += '\n\t\t<div class="rg-hed">' + _copy.hed + '</div>';	
		}
		if(_copy.subhed.length > 0 ) {
			html += '\n\t\t<div class="rg-subhed">' + _copy.subhed + '</div>';	
		}
		html += '\n\t</div>';
		
		html += '\n\t<div class="rg-content">';
		
		html += '\n\t\t' + $('.rg-content').html();

		html += '\n\t</div>';

		html += '\n\t<div class="rg-source-and-credit">';
		html += '\n\t\t<div class="rg-source"><span class="pre-colon">' + _copy.sourcePre + '</span>: <span class="post-colon">' + _copy.sourcePost + '</span></div>';
		html += '\n\t</div>';

		html += '\n</div>';

		$('.output-code').val(html);
	}

	function updateCopy() {
		_copy.hed = $('.rg-hed').text();
		_copy.subhed = $('.rg-subhed').text();
		_copy.sourcePre = $('.rg-source .pre-colon').text();
		_copy.sourcePost = $('.rg-source .post-colon').text();
	}

	init();
})();
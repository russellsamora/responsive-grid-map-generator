(function() {
	var _output;
	var _data = [{ name: 'Alabama', abbr: 'AL', x: 7, y: 6 },{ name: 'Alaska', abbr: 'AK', x: 0, y: 0 },{ name: 'Arizona', abbr: 'AZ', x: 2, y: 5 },{ name: 'Arkansas', abbr: 'AR', x: 5, y: 5 },{ name: 'California', abbr: 'CA', x: 1, y: 4 },{ name: 'Colorado', abbr: 'CO', x: 3, y: 4 },{ name: 'Connecticut', abbr: 'CT', x: 10, y: 3 },{ name: 'Delaware', abbr: 'DE', x: 10, y: 4 },{ name: 'Florida', abbr: 'FL', x: 9, y: 7 },{ name: 'Georgia', abbr: 'GA', x: 8, y: 6 },{ name: 'Hawaii', abbr: 'HI', x: 0, y: 7 },{ name: 'Idaho', abbr: 'ID', x: 2, y: 2 },{ name: 'Illinois', abbr: 'IL', x: 6, y: 2 },{ name: 'Indiana', abbr: 'IN', x: 6, y: 3 },{ name: 'Iowa', abbr: 'IA', x: 5, y: 3 },{ name: 'Kansas', abbr: 'KS', x: 4, y: 5 },{ name: 'Kentucky', abbr: 'KY', x: 6, y: 4 },{ name: 'Louisiana', abbr: 'LA', x: 5, y: 6 },{ name: 'Maine', abbr: 'ME', x: 11, y: 0 },{ name: 'Maryland', abbr: 'MD', x: 9, y: 4 },{ name: 'Massachusetts', abbr: 'MA', x: 10, y: 2 },{ name: 'Michigan', abbr: 'MI', x: 7, y: 2 },{ name: 'Minnesota', abbr: 'MN', x: 5, y: 2 },{ name: 'Mississippi', abbr: 'MS', x: 6, y: 6 },{ name: 'Missouri', abbr: 'MO', x: 5, y: 4 },{ name: 'Montana', abbr: 'MT', x: 3, y: 2 },{ name: 'Nebraska', abbr: 'NE', x: 4, y: 4 },{ name: 'Nevada', abbr: 'NV', x: 2, y: 3 },{ name: 'New Hampshire', abbr: 'NH', x: 11, y: 1 },{ name: 'New Jersey', abbr: 'NJ', x: 9, y: 3 },{ name: 'New Mexico', abbr: 'NM', x: 3, y: 5 },{ name: 'New York', abbr: 'NY', x: 9, y: 2 },{ name: 'North Carolina', abbr: 'NC', x: 7, y: 5 },{ name: 'North Dakota', abbr: 'ND', x: 4, y: 2 },{ name: 'Ohio', abbr: 'OH', x: 7, y: 3 },{ name: 'Oklahoma', abbr: 'OK', x: 4, y: 6 },{ name: 'Oregon', abbr: 'OR', x: 1, y: 3 },{ name: 'Pennsylvania', abbr: 'PA', x: 8, y: 3 },{ name: 'Rhode Island', abbr: 'RI', x: 11, y: 3 },{ name: 'South Carolina', abbr: 'SC', x: 8, y: 5 },{ name: 'South Dakota', abbr: 'SD', x: 4, y: 3 },{ name: 'Tennessee', abbr: 'TN', x: 6, y: 5 },{ name: 'Texas', abbr: 'TX', x: 4, y: 7 },{ name: 'Utah', abbr: 'UT', x: 2, y: 4 },{ name: 'Vermont', abbr: 'VT', x: 10, y: 1 },{ name: 'Virginia', abbr: 'VA', x: 8, y: 4 },{ name: 'Washington', abbr: 'WA', x: 1, y: 2 },{ name: 'West Virginia', abbr: 'WV', x: 7, y: 4 },{ name: 'Wisconsin', abbr: 'WI', x: 6, y: 1 },{ name: 'Wyoming', abbr: 'WY', x: 3, y: 3 },{ name: 'District of Columbia', abbr: 'DC', x: 9, y: 5 }];
	
	var _demo = {
		'quantitative-1': 'Alabama\t73\nAlaska\t10\nArizona\t32\nArkansas\t35\nCalifornia\t51\nColorado\t63\nConnecticut\t41\nDelaware\t61\nFlorida\t79\nGeorgia\t87\nHawaii\t44\nIdaho\t24\nIllinois\t64\nIndiana\t62\nIowa\t54\nKansas\t24\nKentucky\t16\nLouisiana\t65\nMaine\t71\nMaryland\t89\nMassachusetts\t15\nMichigan\t74\nMinnesota\t52\nMississippi\t56\nMissouri\t75\nMontana\t35\nNebraska\t43\nNevada\t28\nNew Hampshire\t51\nNew Jersey\t39\nNew Mexico\t73\nNew York\t49\nNorth Carolina\t77\nNorth Dakota\t84\nOhio\t97\nOklahoma\t24\nOregon\t31\nPennsylvania\t18\nRhode Island\t61\nSouth Carolina\t38\nSouth Dakota\t24\nTennessee\t76\nTexas\t84\nUtah\t32\nVermont\t41\nVirginia\t68\nWashington\t91\nWest Virginia\t37\nWisconsin\t36\nWyoming\t37',
		'quantitative-2': 'AL\t$7.25\nAK\t$8.75\nAZ\t$8.05\nAR\t$7.50\nCA\t$9.00\nCO\t$8.14\nCT\t$9.15\nDE\t$8.25\nDC\t$10.50\nFL\t$8.05\nGA\t$7.25\nHI\t$7.75\nID\t$7.25\nIL\t$8.25\nIN\t$7.25\nIA\t$7.25\nKS\t$7.25\nKY\t$7.25\nLA\t$7.25\nME\t$7.50\nMD\t$8.00\nMA\t$9.00\nMI\t$8.15\nMN\t$9.00\nMS\t$7.25\nMO\t$7.65\nMT\t$8.05\nNE\t$8.00\nNV\t$8.25\nNH\t$7.25\nNJ\t$8.38\nMN\t$7.50\nNY\t$8.75\nNC\t$7.25\nND\t$7.25\nOH\t$8.15\nOK\t$7.25\nOR\t$9.25\nPA\t$7.25\nRI\t$9.00\nSC\t$7.25\nSD\t$8.50\nTN\t$7.25\nTX\t$7.25\nUT\t$7.25\nVT\t$9.15\nVA\t$7.25\nWA\t$9.47\nWV\t$8.00\nWI\t$7.25\nWY\t$7.25',
		'ordinal': 'Alabama\tsomething\nAlaska\tdifferent thing\nArizona \tanother thing\nArkansas\tsomething\nCalifornia\tdifferent thing\nColorado\tsomething\nConnecticut\tsomething\nDelaware\tsomething\nDistrict of Columbia\tsomething\nFlorida\tsomething\nGeorgia \tanother thing\nHawaii\tsomething\nIdaho\tsomething\nIllinois \tanother thing\nIndiana\tsomething\nIowa\tsomething\nKansas \tanother thing\nKentucky\tsomething\nLouisiana \tanother thing\nMaine \tanother thing\nMaryland\tsomething\nMassachusetts\tsomething\nMichigan\tsomething\nMinnesota\tsomething\nMississippi \tanother thing\nMissouri\tsomething\nMontana\tsomething\nNebraska \tanother thing\nNevada\tdifferent thing\nNew Hampshire \tanother thing\nNew Jersey\tsomething\nNew Mexico\tsomething\nNew York\tsomething\nNorth Carolina\tsomething\nNorth Dakota\tdifferent thing\nOhio\tdifferent thing\nOklahoma\tdifferent thing\nOregon\tsomething\nPennsylvania\tdifferent thing\nRhode Island\tsomething\nSouth Carolina\tsomething\nSouth Dakota\tdifferent thing\nTennessee\tdifferent thing\nTexas\tsomething\nUtah\tdifferent thing\nVermont\tsomething\nVirginia\tsomething\nWashington\tdifferent thing\nWest Virginia\tdifferent thing\nWisconsin\tsomething\nWyoming\tsomething'
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
	
	// color brewer YLGNBL
	var COLORS = {
		ordinal: {
			3: ["#edf8b1","#7fcdbb","#2c7fb8"],
			4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
			5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
			6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
			7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
			8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
			9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]	
		},
		quantitative: ["#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
	};

	var GRAY = { dark: '#444', light: '#eee' };

	function init() {
		bindEvents();
	}

	function bindEvents() {
		$('.generate').on('click', function(e) {
			e.preventDefault();	

			$('.preview').empty();
			var val = $('.input').val();
			parseInput(val, function(err, data) {
				if(err) {
					alert(err);
				} else {
					chooseType(data);
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

		$('.generate-code').on('click', function() {
			generateCode();
		});
	}

	function chooseType(data) {
		$('.choose-scale-group').removeClass('hide');
		$('.choose-scale').on('click', function(e) {
			e.preventDefault();
			_scaleType = $(this).attr('data-scale');
			$('.choose-scale-group').addClass('hide');

			bindDataToStates(data);
			createScale(function(err, dict) {
				if(err) {
					alert(err);
				} else {
					createOutput(dict);		
				}
			});
			
			
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

	function createScale(cb) {
		if(_scaleType === 'quantitative') {
			_extent = d3.extent(_data, function(d) {
				return d.value;
			});

			_scale = d3.scale.quantize()
	    		.domain(_extent)
	    		.range(COLORS.quantitative);	

	    	cb();
		} else if(_scaleType === 'ordinal') {
			// determine domain
			var dict = createDict();

			if(dict.length > 8) {
				cb('too many categories');
			} else {
				var numColors = Math.max(3, dict.length);
				_scale = d3.scale.ordinal()
		    		.domain(dict)
		    		.range(COLORS.ordinal[numColors]);

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

	// make map
	function createOutput(dict) {
		var $container = $('<div class="rg-container"></div>');
		var $header = $('<div class="rg-header"></div>');
		var $hed = $('<div contenteditable="true" class="rg-hed">' + _copy.hed + '</div>');
		var $subhed = $('<div contenteditable="true" class="rg-subhed">' + _copy.subhed + '</div>');
		var $content = $('<div class="rg-content"></div>');
		var $sourceCredit = $('<div class="rg-source-and-credit"></div>');
		var $source = $('<div contenteditable="true" class="rg-source"><span class="pre-colon">' + _copy.sourcePre + '</span>: <span class="post-colon">' + _copy.sourcePost + '</span></div>');
		
		var $inlineStyle = '<style>@@include("../.tmp/grid-map-style.css")</style>';
		var $inlineScript = '<script type="text/javascript">@@include("../.tmp/inline.js")</script>';


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
		if(_scaleType === 'quantitative') {
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

			for(var s = 0; s < COLORS.quantitative.length; s++){
				html += '<li style="background-color: ' + COLORS.quantitative[s] + ';"></li>';
			}

			html += '</ul>';
		} else if(_scaleType === 'ordinal') {
			html += '<ul class="rg-legend-ordinal">';
			for(var i = 0; i < dict.length; i++) {
				var col = COLORS.ordinal[dict.length][i];
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
					// quantitative
					if(_scaleType === 'quantitative') {
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

		var highlight = {};

		$('.rg-table tr').each(function() {
			if($(this).hasClass('highlight')) {
				var index = $(this).index();
				highlight[index] = true;
			}
		});

		var html = '';

		var css = '@@include("../.tmp/grid-map-style.css")';

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
		if(_input.zebra) {
			html += '\n\t\t<table class="rg-table zebra">';
		} else {
			html += '\n\t\t<table class="rg-table">';
		}
		
		html += '\n\t\t\t<thead>';

		for (var i = 0; i < _data.headers.length; i++) {
			var valTh = _data.headers[i];
			var classesTh = _input.hideColumns[valTh] ? 'hide-mobile ' : '';
			classesTh += _data.className[i] + ' rg-th';

			var htmlTh = '\n\t\t\t\t<th class="'+ classesTh + '">' + _data.headers[i] + '</th>';
			
			html += htmlTh;
		}

		html += '\n\t\t\t</thead>';
		html += '\n\t\t\t<tbody>';

		for (var a = 0; a < _data.rows.length; a++) {
			var row = _data.rows[a];
			var trClasses = '';
			trClasses += a < _input.mobileRows ? '' : 'hide-mobile';
			if(highlight[a]) {
				trClasses += ' highlight';
			}
			if(trClasses) {
				html += '\n\t\t\t\t<tr class="' + trClasses + '">';	
			} else {
				html += '\n\t\t\t\t<tr>';
			}

			for (var b = 0; b < row.length; b++) {
				var valCol = _data.headers[b];
				var classesTd = _input.hideColumns[valCol] ? 'hide-mobile ' : '';
				classesTd += _data.className[b];

				var htmlTd = '\n\t\t\t\t\t\t<td class="' + classesTd + '" data-title="' + valCol + '">' + row[b] + '</td>';

				html += htmlTd;
			}

			html += '\n\t\t\t\t</tr>';
		}
		html += '\n\t\t\t</tbody>';
		html += '\n\t\t</table>';
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
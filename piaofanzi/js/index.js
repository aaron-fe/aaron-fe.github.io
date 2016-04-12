(function() {
	var $movers = $('.focus .mover');
	var $mover1 = $movers.eq(0);
	var $mover2 = $movers.eq(1);
	var $mover3 = $movers.eq(2);
	var $mover4 = $movers.eq(3);
	var len = $mover1.find('img').length;
	var winHeight = $(window).height();
	var imgs = [{
		width: 1920,
		height: 248,
		ratio: 0.26
	}, {
		width: 1920,
		height: 247,
		ratio: 0.26
	}, {
		width: 1920,
		height: 249,
		ratio: 0.26
	}, {
		width: 1920,
		height: 197,
		ratio: 0.22
	}];

	function initMoverWidth() {
		$.each($movers, function(i, mover) {
			var img = imgs[i];
			$(mover).css({
				width: len * winHeight * img.ratio * img.width / img.height
			});
		});
	}

	initMoverWidth();

	function move($elm, direction, speed) {
		var $img = $elm.find('img');
		var imgWidth = $img.width();
		var len = $img.length;
		var pos = -imgWidth;
		var dir = direction === 'left' ? 'left' : 'right';
		$elm.css('width', imgWidth * len);
		$elm.css(dir, pos);
		setInterval(function() {
			if (Math.abs(pos) >= imgWidth * (len - 2)) {
				pos = -imgWidth;
			}
			pos -= speed;
			$elm.css(dir, pos);
		}, 60);
	}
	function init() {
		move($mover1, 'left', 1);
		move($mover2, 'right', 1);
		move($mover3, 'left', 1);
		move($mover4, 'right', 1);
	}
	init();

	// $(window).on('resize', function() {
	// 	init();
	// });
})();
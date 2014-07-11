(function () {
	Carousel.init({
		auto: true,
        duration: 6000,
        responsive: true,
        wrapSlct: '#carousel',
        prevSlct: '.control-prev a',
        nextSlct: '.control-next a',
        itemsSlct: '.carousel-items-wrap li',
        navsSlct: '.carousel-navs-wrap a',
        total: 4,
        animateDuration: 400,
        resizeImage: false
	});
})();

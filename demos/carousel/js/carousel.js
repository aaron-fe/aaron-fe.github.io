/**
 * Carousel
 * auto lizhuhong@baidu.com
 */
(function ($) {
    var settings = {
        auto: true,
        duration: 6000,
        wrapSlct: '#myFocus',
        prevSlct: '.control-prev a',
        nextSlct: '.control-next a',
        itemsSlct: '.carousel-wrap li',
        navsSlct: '.crsl-nav-wrap a',
        total: 4,
        animateDuration: 400,
        resizeImage: false
    };

    var Carousel = {
        showIndex: 0,
        animateFinished: true,
        show: function (index) {
            var wrap = $(settings.wrapSlct),
                items = wrap.find(settings.itemsSlct),
                navs = wrap.find(settings.navsSlct),
                curItem = items.filter('.active'),
                curNav = navs.filter('.active'),
                prevIndex = items.index('.active'),
                self = this,
                duration = settings.animateDuration;

            if (prevIndex == index || !self.animateFinished) {
                return false;
            }

            this.stop();

            this.animateFinished = false;

            curItem.fadeOut(duration, function () {
                $(this).removeClass('active');
                curNav.removeClass('active');
            });

            items.eq(index).fadeIn(duration, function () {
                $(this).addClass('active');
                navs.eq(index).addClass('active');
                self.animateFinished = true;
            });

            this.start();
        },
        next: function () {
            this.showIndex++;

            if (this.showIndex > settings.total - 1) {
                this.showIndex = 0;
            }

            this.show(this.showIndex);
        },
        prev: function () {
            this.showIndex--;

            if (this.showIndex < 0) {
                this.showIndex = settings.total - 1;
            }

            this.show(this.showIndex);
        },
        bindEvent: function () {
            var wrap = $(settings.wrapSlct),
                navs = wrap.find(settings.navsSlct),
                prev = wrap.find(settings.prevSlct),
                next = wrap.find(settings.nextSlct),
                self = this;

            prev.on('click', function () {
                if (self.animateFinished) {
                    self.prev();
                }   
            });

            next.on('click', function () {
                if (self.animateFinished) {
                    self.next();
                }
            });

            navs.on('click', function () {
                var index = navs.index($(this));

                if (self.animateFinished && index != self.showIndex) {
                    self.showIndex = index;
                    self.show(index);
                }
            });
        },
        start: function () {
            if (!settings.auto) {
                return false;
            }
            var self = this;

            this.autoInterval = setInterval(function () {
                self.next();
            }, settings.duration);
        },
        stop: function () {
            var self = this;

            if (!!this.autoInterval) {
                clearInterval(self.autoInterval);
            }
        },
        resizeImage: function () {
            
            var imgs = $(settings.wrapSlct).find(settings.itemsSlct).find('img'),
                winHeight = $(window).height(),
                winWidth = $(window).width(),
                imgHeight = winHeight,
                imgWidth = winHeight / 900 * 1600;

            if (winWidth / winHeight > 16 / 9) {
                imgWidth = winWidth;
                imgHeight = winWidth / 1600 * 900;
            }

            imgs.css({
                width: imgWidth + 'px',
                height: imgHeight + 'px',
                marginLeft: '-' + imgWidth / 2 + 'px',
                marginTop: '-' + imgHeight / 2 + 'px'
            });
             
        },
        bindResizeImage: function () {
            if (!settings.resizeImage) {
                return false;
            }

            var self = this;

            this.resizeImage();

            $(window).on('resize', function () {
                self.resizeImage();
            });
        },
        init: function (opts) {
            $.extend(settings, opts || {});
            
            this.show(0);
            this.bindEvent();
            this.bindResizeImage();
            this.auto();  
        }
    };

    window.Carousel = Carousel;

})($);

// 首屏动画
(function() {
    var settings = {
        imgWidth: 1920,
        imgHeight: 248,
        ratio: 0.26,
        dir: 'left',
        speed: 1
    };

    function Mover($elm, opt) {
        this.$elm = $elm;
        this.opt = $.extend(settings, opt || {});
    }

    Mover.prototype = {
        initElem: function() {
            var opt = this.opt;
            var width = opt.imgWidth;
            var height = opt.imgHeight;
            var ratio = opt.ratio;
            var winHeight = $(window).height();
            var len = this.len = this.$elm.find('img').length;
            var imageWidth = this.imageWidth = ratio * winHeight / height * width;
            var dir = this.dir = opt.dir === 'right' ? 'right' : 'left';
            this.$elm.css('width', len * imageWidth);
            this.$elm.css(dir, -imageWidth);
        },

        init: function() {
            this.initElem();
            this.move();
            this.bindEvent();
        },

        move: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
            var opt = this.opt;
            var speed = opt.speed;
            var pos = -this.imageWidth;
            var dir = this.dir;
            var me = this;
            this.interval = setInterval(function() {
                if (Math.abs(pos) >= me.imageWidth * (me.len - 2)) {
                    pos = -this.imageWidth;
                }
                pos -= speed;
                me.$elm.css(dir, pos);
            }, 60);
        },

        bindEvent: function() {
            var me = this;
            $(window).on('resize', function() {
                me.initElem();
                me.move();
            });
        }
    };

    var $movers = $('.focus .mover');

    var mover1 = new Mover($movers.eq(0), {
        imgWidth: 1920,
        imgHeight: 248,
        ratio: 0.26,
        dir: 'left',
        speed: 1
    });
    mover1.init();

    var mover2 = new Mover($movers.eq(1), {
        imgWidth: 1920,
        imgHeight: 247,
        ratio: 0.26,
        dir: 'right',
        speed: 1
    });
    mover2.init();

    var mover3 = new Mover($movers.eq(2), {
        imgWidth: 1920,
        imgHeight: 249,
        ratio: 0.26,
        dir: 'left',
        speed: 1
    });
    mover3.init();

    var mover4 = new Mover($movers.eq(3), {
        imgWidth: 1920,
        imgHeight: 197,
        ratio: 0.22,
        dir: 'right',
        speed: 1
    });
    mover4.init();
})();

// 初始化fullPage
(function() {
    var enableAnim = Modernizr.csstransitions;
    $('#fullPage').fullpage({
        afterLoad: function(anchorLink, index) {
            $('#footer').show();
            if (index === 1 || !enableAnim) {
                return;
            }
            var $section = $(this);
            $section.addClass('section-anim');
        }
    });
})();
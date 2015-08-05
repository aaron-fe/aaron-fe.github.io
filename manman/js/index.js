(function(win) {
    var FullPage = {
        index: 1,
        $page: $('.page'),
        $wrap: $('#pageWrap'),
        $nav: $('.page-nav a'),
        $next: $('#btnNext'),
        showPage1: function () {
            $('#page1 .bg2').animate({marginTop: '+=300px'}, 400);
            $('#page1 .bg3').animate({marginLeft: '-=100px'}, 400);
            $('#page1 .bg4').animate({marginLeft: '+=100px'}, 400);
            $('#page1 .bg5').animate({marginLeft: '-=150px'}, 400);   
        },
        hidePage1: function() {
            $('#page1 .bg2').css({marginTop: '-494px'});
            $('#page1 .bg3').css({marginLeft: '100px'});
            $('#page1 .bg4').css({marginLeft: '-100px'});
            $('#page1 .bg5').css({marginLeft: '150px'});
        },
        showPage2: function () {
            $('#page2 .bg2').fadeIn(300, function () {
                $('#page2 .bg3').fadeIn(400);
                $('#page2 .bg4').fadeIn(800, function() {
                    $('#page2 .bg5').fadeIn(200);
                });
            });
        },
        hidePage2: function() {
            $('#page2 .bg2').css({display: 'none'});
            $('#page2 .bg3').css({display: 'none'});
            $('#page2 .bg4').css({display: 'none'});
            $('#page2 .bg5').css({display: 'none'});
        },
        showPage3: function () {
            $('#page3 .bg2').animate({marginLeft: '+=250px'}, 400);
        },
        hidePage3: function() {
            $('#page3 .bg2').css({marginLeft: 0});
        },
        showPage4: function () {
            $('#page4 .bg2').fadeIn(600);
            $('#page4 .bg3').addClass('rotate45');
        },
        hidePage4: function() {
            $('#page4 .bg2').css({display: 'none'});
            $('#page4 .bg3').removeClass('rotate45');
        },
        next: function() {
            if (this.index >= this.len) {
                return;
            }
            this.show(this.index + 1);
        },
        prev: function() {
            if (this.index <= 1) {
                return;
            }
            this.show(this.index - 1);
        },
        init: function() {
           this.render();
           this.show(this.index);
           this.bindEvent();
        },
        render: function() {
            this.wh = $(win).height();
            this.len = this.$page.length;
            this.$wrap.css({
                height: this.wh * this.len + 'px',
                top: '-' + this.wh * (this.index - 1) + 'px'
            });
            this.$page.css({
                height: this.wh + 'px'
            });
        },
        show: function(id) {
            if (this.animating) {
                return;
            }
            this.animating = true;
            var step = id - this.index;
            var wh = this.wh;
            var me = this;
            this.$nav.removeClass('current');
            this.$nav.eq(id - 1).addClass('current');
            this.$wrap.animate({
                top: '-=' + wh * step + 'px'
            }, 400, function() {
                for (var i = 1; i <= me.len; i++) {
                    if (i !== id) {
                        me['hidePage' + i]();
                    }
                }
                me['showPage' + id]();
                me.$page.removeClass('page-current');
                me.$page.eq(id - 1).addClass('page-current');
                me.animating = false;
            });
            
            this.index = id;
        },
        bindEvent: function () {
            var me = this;
            // nav
            this.$nav.on('click', function() {
                var index = me.$nav.index($(this)) + 1;
                if (index === me.index) {
                    return;
                }
                me.show(index);
            });
            // next
            this.$next.on('click', function() {
                if (me.index >= me.len) {
                    me.show(1);
                } else {
                    me.next();
                }
            });
            // resize
            $(win).on('resize', function() {
                me.render();
            });
            // scroll
            var timeStamp = new Date().getTime();
            $(win).on('DOMMouseScroll mousewheel', function (event) {
                var now = new Date().getTime();
                if (now - timeStamp < 120) {
                    timeStamp = now;
                    return;
                } else {
                    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
                        if (me.index >= me.len) {
                            me.show(1);
                        } else {
                            me.next();
                        }
                    } else {
                        me.prev();
                    }
                    timeStamp = now;
                }
            });
        } 
    };

    FullPage.init();
})(window);
(function($, window, document) {
    
    "use strict";
    
    var Flick = window.Flick = {
        window: $(window),
        document: $(document),
        device: {
            isMobile: false,
            isTablet: false,
            width: {
                mobile: 768,
                tablet: 992,
                desktop: 1200
            }
        },
        functions: {
            checkDevice: {
                resize: function() {
                    Flick.device.isMobile = (Flick.window.width() < (Flick.device.width.mobile - 17)) ? true : false;
                    Flick.device.isTablet = (Flick.window.width() < (Flick.device.width.tablet - 17)) ? true : false;
                },
                init: function() {
                    Flick.window.on('resize', this.resize);
                    this.resize();
                }
            },
            flickCarousel: {
                build: function() {
                    $('.flick-carousel').each(function() {
                        var $carousel = $(this),
                            $items = $carousel.find('.flick-item'),
                            $bullets = $carousel.find('.flick-bullets'),
                            $prev = $carousel.find('.flick-prev'),
                            $next = $carousel.find('.flick-next'),
                            horizontal = (Flick.device.isMobile) ? true : $carousel.data('horizontal'),
                            options = {
                                horizontal: (horizontal) ? horizontal : true,
                                itemNav: "basic",
                                smart: true,
                                activateOn: "click",
                                mouseDragging: true,
                                touchDragging: true,
                                releaseSwing: true,
                                startAt: 0,
                                cycleBy: ($carousel.data('cycle-by')) ? $carousel.data('cycle-by') : "items",
                                cycleInterval: ($carousel.data('cycle-interval')) ? $carousel.data('cycle-interval') : 4000,
                                speed: ($carousel.data('speed')) ? $carousel.data('speed') : 1000,
                                elasticBounds: true,
                                //easing: "easeOutExpo",
                                pauseOnHover: true,
                                startPaused: true,
                                pagesBar: $bullets,
                                activatePageOn: "click",
                                pageBuilder: function() {
                                    return '<i class="flick-bullets-item" />';
                                }
                            };
                        if (horizontal === false) {
                            $carousel.addClass('flick-carousel-vertical');
                        }
                        if ($carousel.data('controls-outside') === true) {
                            $prev = $carousel.next('.flick-prev');
                            $next = $prev.next('.flick-next');
                        }
                        if ($carousel.data('cycle-by') === "pages") {
                            options.prevPage = $prev;
                            options.nextPage = $next;
                        } else {
                            options.prev = $prev;
                            options.next = $next;
                        }
                        $items.each(function(index) {
                            var $item = $(this);
                            $item.addClass('flick-item-' + (index + 1));
                        });
                        $carousel.sly(options);
                        if ($carousel.data('auto') === true) {
                            $carousel.sly('resume');
                        }
                        $carousel.sly('on', 'load', function() {
                            if ($carousel.data('horizontal') === false) {
                                if (Flick.device.isMobile) {
                                    $carousel.sly('set', {horizontal: true});
                                    $carousel.removeClass('flick-carousel-vertical');
                                } else {
                                    $carousel.sly('set', {horizontal: false});
                                    $carousel.addClass('flick-carousel-vertical');
                                }
                            }
                        });
                        $carousel.sly('on', 'moveEnd', function() {
                            var position = this.pos;
                            if (position.cur === position.end) {
                                $next.addClass('disabled').prop('disabled', true);
                            } else {
                                $next.removeClass('disabled').prop('disabled', false);
                            }
                            if (position.cur === position.start) {
                                $prev.addClass('disabled').prop('disabled', true);
                            } else {
                                $prev.removeClass('disabled').prop('disabled', false);
                            }
                        });
                        Flick.window.on('resize load', function() {
                            $carousel.sly('reload');
                            if ($carousel.hasClass('flick-mobile-only') && !Flick.device.isMobile) {
                                $carousel.sly(false);
                                $carousel.removeClass('flick-carousel');
                            } else {
                                $carousel.addClass('flick-carousel');
                                $carousel.sly(options);
                            }
                        });
                    });
                },
                init: function() {
                    Flick.document.on('initFlickCarousel', this.build);
                    this.build();
                }
            }
        },
        run: function() {
            var flick = this;
            $(function() {
                for (var index in flick.functions) {
                    var func = flick.functions[index];
                    if (typeof func.init !== "undefined") {
                        func.init();
                    }
                }
            });
        }
    };
    
})(jQuery, window, document);
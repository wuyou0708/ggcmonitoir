$(function () {
    $.extend($.site, {
        theme: function () {
            var _0x118577 = $('body'),
                _0x1d9384 = 'admui.base.skinTools',
                _0x52047f = $('#admui-siteStyle', $('head')),
                _0x53ed64 = localStorage.getItem(_0x1d9384),
                _0x333fa4 = _0x52047f.prop('href').indexOf('?v=') === -0x1 ? '' : '.min',
                _0x372bde, _0x7f87e0, _0x55ce81, _0x42b871, _0x223587;
            if (!_0x53ed64) {
                return;
            }
            _0x53ed64 = JSON.parse(_0x53ed64).val;
            _0x372bde = this.themeColor = _0x53ed64.themeColor;
            _0x7f87e0 = _0x53ed64.sidebar;
            _0x55ce81 = _0x53ed64.navbar;
            _0x42b871 = _0x53ed64.menuDisplay;
            _0x223587 = _0x53ed64.menuTxtIcon;
            if (_0x372bde && _0x372bde !== 'primary') {
                setTimeout(function () {
                    _0x52047f.attr('href', '/themes/classic/base/skins/' + _0x372bde + '/index' + _0x333fa4 + '.css');
                }, 0x82);
            }
            if (_0x7f87e0 && _0x7f87e0 === 'site-menubar-light') {
                $('#admui-siteMenubar').addClass('site-menubar-light');
            }
            if (_0x55ce81 && _0x55ce81 !== '') {
                $('.site-navbar').addClass(_0x55ce81);
            }
            if (_0x53ed64.navbarInverse === '') {
                $('.site-navbar').removeClass('navbar-inverse');
            }
            if (_0x42b871 && _0x42b871 === 'site-menubar-fold') {
                $.site.menubar.fold();
                if (_0x223587 && _0x223587 === 'site-menubar-keep') {
                    _0x118577.addClass('site-menubar-keep');
                } else {
                    _0x118577.addClass('site-menubar-fold-alt');
                }
            }
            if (_0x53ed64.tabFlag === '') {
                _0x118577.removeClass('site-contabs-open');
            }
        }, 
        iframeTheme: function() {
            var _0x49eddb = $('#admui-siteStyle', this.iframeDocument),
                _0x69262b = _0x49eddb.prop('href').indexOf('?v=') === -0x1 ? '' : '.min',
                _0x43db4f = this.themeColor;
            if (_0x43db4f && _0x43db4f !== 'primary') {
                _0x49eddb.attr('href', '/themes/classic/base/skins/' + this.themeColor + '/site' + _0x69262b + '.css');
            }
        }, 
        _tabsDraw: function() {
            var _0x23bfa3 = this,
                _0x483c6f = 'admui.base.contentTabs',
                _0x51d3b1 = $.sessionStorage.get(_0x483c6f),
                _0x5dadbb, _0x182245, _0x3c8192, _0x16a3c7, _0x7aa71, _0x3ceaf5, _0x48fad1, _0x6a1e71 = location.hash.substring(0x2),
                _0x21a15 = $('.con-tabs'),
                _0x4c46b8 = $.site.contentTabs,
                _0x57b9da = function (_0x27b525, _0x5515ca, _0x3960b8) {
                    var _0xe31336 = _0x23bfa3.$content.find('iframe:first');
                    if (_0x27b525 === _0x5515ca || !_0x6a1e71) {
                        _0x3c8192 = _0x3960b8;
                        _0x21a15.find('li:first').addClass('active');
                        _0xe31336.attr('src', _0x3960b8);
                        _0x23bfa3.iframeEvents(_0xe31336);
                    } else {
                        _0xe31336.removeClass('active');
                    }
                };
            _0x182245 = _0x51d3b1.checked;
            for (var _0x4bfe7f in _0x51d3b1) {
                _0x5dadbb = _0x51d3b1[_0x4bfe7f];
                if (_0x4bfe7f === 'checked' || _0x4bfe7f === 'tabId') {
                    continue;
                } else if (_0x4bfe7f === 'iframe-0') {
                    _0x57b9da(_0x4bfe7f, _0x182245, _0x5dadbb.url);
                    continue;
                }
                _0x7aa71 = _0x5dadbb.url;
                _0x3ceaf5 = _0x5dadbb.name;
                _0x16a3c7 = '<a href="' + _0x7aa71 + '" ' + 'target="' + _0x4bfe7f + '"' + '" title="' + _0x3ceaf5 + '' + '" rel="contents"><span>' + _0x3ceaf5 + '</span><i class="icon' + ' wb-close-mini">' + '</i></a></li>';
                if (_0x4bfe7f === _0x182245 && _0x6a1e71) {
                    _0x3c8192 = _0x7aa71;
                    _0x16a3c7 = '<li class="active">' + _0x16a3c7;
                    _0x48fad1 = '<iframe src="' + _0x7aa71 + '" frameborder="0" name="' + _0x4bfe7f + '" class="page-frame animation-fade active"></iframe>';
                } else {
                    _0x16a3c7 = '<li>' + _0x16a3c7;
                    _0x48fad1 = '<iframe src="" frameborder="0" name="' + _0x4bfe7f + '" class="page-frame animation-fade"></iframe>';
                }
                _0x21a15.append(_0x16a3c7);
                _0x23bfa3.$content.append(_0x48fad1);
            }
            if (_0x6a1e71 !== _0x3c8192 && _0x6a1e71) {
                this._urlRequest(_0x6a1e71);
            }
            _0x4c46b8.enable(_0x21a15.find('.active'));
            if (Object.keys(_0x51d3b1).length >= 0x13) {
                _0x4c46b8.tabSize();
                _0x4c46b8.tabEvent(_0x21a15, 'media');
            }
        }, 
        _urlRequest: function(_0x1e6280) {
            var _0x1c6d11 = '未知页面';
            $('.site-menu a').each(function () {
                var _0x1fa75b = $(this);
                if (_0x1fa75b.attr('href') === _0x1e6280) {
                    _0x1c6d11 = $.trim(_0x1fa75b.attr('title') || _0x1fa75b.text());
                    return ![];
                }
            });
            $.site.contentTabs.buildTab({
                'name': _0x1c6d11,
                'url': _0x1e6280
            });
        }, 
        _hideNavbar: function() {
            var _0x48aa0e = $('body');
            _0x48aa0e.addClass('site-navbar-collapsing');
            $('#admui-navbarCollapse').collapse('hide');
            setTimeout(function () {
                _0x48aa0e.removeClass('site-navbar-collapsing');
            }, 0xa);
            _0x48aa0e.removeClass('site-navbar-collapse-show');
        }, 
        iframeEvents: function(_0x1d9bb9) {
            var _0x157871 = this,
                _0x525a74 = function (_0x5d61c1) {
                    $('#admui-siteStyle', _0x5d61c1).load(function () {
                        _0x157871.iframeTheme();
                    });
                };
            _0x1d9bb9.load(function () {
                var _0x48dd74 = _0x157871.iframeDocument = $.content.document();
                $(_0x48dd74).on('click', function () {
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')) {
                        $.site.menubar.hide();
                        _0x157871._hideNavbar();
                    }
                    $('[data-toggle="dropdown"]').parent().removeClass('open');
                });
                _0x525a74(_0x48dd74);
            });
        }, 
        run: function() {
            var _0x5e8572 = this,
                _0x492df0 = this.$content = $('#admui-pageContent');
            $.content = $.content || {};
            $.extend($.content, {
                'window': function () {
                    var _0x2d47c6 = _0x492df0.find('iframe.active').attr('name');
                    return window.frames[_0x2d47c6];
                }, 'document': function () {
                    var _0x1dcb88 = _0x492df0.find('iframe.active').attr('name');
                    return window.frames[_0x1dcb88].document;
                }
            });
            this.iframeDocument = null;
            $.ctx = $('#admui-signOut').data('ctx') || $.ctx;
            if (typeof $.site.menu !== 'undefined') {
                $.site.menu.init();
            }
            if (typeof $.site.contentTabs !== 'undefined') {
                $.site.contentTabs.init();
            }
            $('#admui-navbar').responsiveHorizontalTabs({
                'tabParentSelector': '#admui-navTabs',
                'fnCallback': function (_0x46d4ee) {
                    if ($('#admui-navbar').is(':visible')) {
                        _0x46d4ee.removeClass('is-load');
                    }
                }
            });
            if (typeof $.site.menubar !== 'undefined') {
                $('#admui-siteMenubar').on('changing.site.menubar', function () {
                    var _0x570303 = $('[data-toggle="menubar"]');
                    _0x570303.toggleClass('hided', !$.site.menubar.opened);
                    _0x570303.toggleClass('unfolded', !$.site.menubar.folded);
                });
                $.site.menubar.init();
                Breakpoints.on('change', function () {
                    $.site.menubar.change();
                });
                $(document).on('click', '[data-toggle="collapse"]', function (_0x360cd0) {
                    var _0x39efb5 = $(_0x360cd0.target),
                        _0x4fecf7, _0xf54f87, _0xbe02ed;
                    if (!_0x39efb5.is('[data-toggle="collapse"]')) {
                        _0x39efb5 = _0x39efb5.parents('[data-toggle="collapse"]');
                    }
                    _0xf54f87 = _0x39efb5.attr('data-target') || (_0x4fecf7 = _0x39efb5.attr('href')) && _0x4fecf7.replace(/.*(?=#[^\s]+$)/, '');
                    _0xbe02ed = $(_0xf54f87);
                    if (_0xbe02ed.hasClass('navbar-search-overlap')) {
                        _0xbe02ed.find('input').focus();
                        _0x360cd0.preventDefault();
                    } else if (_0xbe02ed.attr('id') === 'admui-navbarCollapse') {
                        var _0x516e75 = !_0x39efb5.hasClass('collapsed'),
                            _0xc2b1b6 = $(document.body);
                        _0xc2b1b6.addClass('site-navbar-collapsing');
                        _0xc2b1b6.toggleClass('site-navbar-collapse-show', _0x516e75);
                        $('#admui-navbar').responsiveHorizontalTabs({
                            'tabParentSelector': '#admui-navTabs',
                            'fnCallback': function (_0x561158) {
                                _0x561158.removeClass('is-load');
                            }
                        });
                        setTimeout(function () {
                            _0xc2b1b6.removeClass('site-navbar-collapsing');
                        }, 0x15e);
                    }
                });
                $(document).on('click', '[data-toggle="menubar"]', function () {
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')) {
                        _0x5e8572._hideNavbar();
                    }
                    $.site.menubar.toggle();
                });
                $('#admui-navbar >.nav-tabs >li:not(.no-menu)').on('click', function (_0x5b9010) {
                    if ($(_0x5b9010.target).closest('li').is('.dropdown')) {
                        return;
                    }
                    if (Breakpoints.is('xs')) {
                        $.site.menubar.open();
                    }
                });
            }
            if (typeof screenfull !== 'undefined') {
                $(document).on('click', '[data-toggle="fullscreen"]', function () {
                    if (screenfull.enabled) {
                        screenfull.toggle();
                    }
                    return ![];
                });
                if (screenfull.enabled) {
                    document.addEventListener(screenfull.raw.fullscreenchange, function () {
                        $('[data-toggle="fullscreen"]').toggleClass('active', screenfull.isFullscreen);
                    });
                }
            }
            $(document).on('show.bs.dropdown', function (_0x47aa4c) {
                var _0x4a2378 = $(_0x47aa4c.target),
                    _0x3c3d29, _0x148dde = _0x47aa4c.relatedTarget ? $(_0x47aa4c.relatedTarget) : _0x4a2378.children('[data-toggle="dropdown"]'),
                    _0x4c46e0 = _0x148dde.data('animation');
                if (_0x4c46e0) {
                    _0x3c3d29 = _0x4a2378.children('.dropdown-menu');
                    _0x3c3d29.addClass('animation-' + _0x4c46e0);
                    _0x3c3d29.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        _0x3c3d29.removeClass('animation-' + _0x4c46e0);
                    });
                }
            });
            $('[data-toggle="tooltip"]').tooltip({
                'trigger': 'hover'
            });
            $('[data-toggle="popover"]').popover();
            if (document.localStorage) {
                this.theme();
                this._tabsDraw();
            }
            $.components.init();
        }
    });
    $.site.run();
});
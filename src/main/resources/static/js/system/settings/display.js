$(function () {

    if ($('#accountContent').size() > 0x0) {
        $('#displayForm').prepend('<input type="hidden" name="userId" value="' + $('#admui-signOut').attr('data-user') + '">');
    }
    if (!window.localStorage) {
        return;
    }
    var _0x18c4d6 = {
        path: $.ctx + '/themes/classic/base/',
        $siteSidebar: $.parentFrame.find('.site-menubar'),
        $siteNavbar: $.parentFrame.find('.site-navbar'),
        navbarSkins: 'bg-primary-600 bg-brown-600 bg-cyan-600 bg-green-600 bg-grey-600 bg-indigo-600 bg-orange-600 bg-pink-600 bg-purple-600 bg-red-600 bg-teal-600 bg-yellow-700',
        init: function () {
            var _0x5b19df = this;
            $(document).on('change', '#skintoolsSidebar', function () {
                _0x5b19df.sidebarEvents($(this));
            });
            $(document).on('click', '#skintoolsNavbar input', function () {
                _0x5b19df.navbarEvents($(this));
            });
            $(document).on('click', '#skintoolsPrimary input', function () {
                _0x5b19df.primaryEvents($(this));
            });
            $(document).on('change', 'input[name="menuDisplay"]', function () {
                var _0x238772 = $('#menuFoldSetting'),
                    _0x538b30 = $(this).val();
                if (_0x538b30 === 'site-menubar-unfold') {
                    _0x238772.addClass('hidden');
                    $.site.menubar.unfold();
                } else {
                    _0x238772.removeClass('hidden');
                    $.site.menubar.fold();
                }
            });
            $(document).on('change', 'input[name="menuTxtIcon"]', function () {
                var _0x3f9ef6 = $(this).val();
                if (_0x3f9ef6 === 'site-menubar-keep') {
                    $.parentFrame.find('body').removeClass('site-menubar-fold-alt').addClass('site-menubar-keep');
                } else {
                    $.parentFrame.find('body').removeClass('site-menubar-keep').addClass('site-menubar-fold-alt');
                }
            });
            $(document).on('change', 'input[name="tabFlag"]', function () {
                var _0x5d4c4e = $(this).val();
                if (_0x5d4c4e === 'site-contabs-open') {
                    $('#admui-siteConTabs ul.con-tabs', $.parentFrame).removeAttr('style');
                    $.parentFrame.find('body').addClass('site-contabs-open');
                } else {
                    $.parentFrame.find('body').removeClass('site-contabs-open');
                }
            });
            $(document).on('click', 'button[name="save"]', function (_0x5c5fd3) {
                _0x5c5fd3.preventDefault();
                $.ajax({
                    url: $.ctx + '/display/save',
                    type: 'POST',
                    data: $('.form-horizontal').serialize(),
                    dataType: 'JSON',
                    success: function (_0x34b8ba) {
                        if (_0x34b8ba.success) parent.location.reload(!![]);
                        else toastr.error(_0x34b8ba.msg);
                    }, 
                    error: function () {
                        toastr.error('服务器异常，请稍后再试！');
                    }
                });
            });
            $(document).on('click', '#skintoolsReset', function (_0xea1637) {
                _0xea1637.preventDefault();
                var _0x5e6560 = $('#displayForm').find('[name="user.userId"]').val() === undefined ? '' : $('#displayForm').find('[name="user.userId"]').val();
                $.ajax({
                    url: $.ctx + '/display/reset?user.userId=' + _0x5e6560,
                    type: 'POST',
                    dataType: 'JSON',
                    success: function (_0x2a2ee7) {
                        if (_0x2a2ee7.success) parent.location.reload(!![]);
                        else toastr.error('出错了，请重试！');
                    }, 
                    error: function () {
                        toastr.error('服务器异常，请稍后再试！');
                    }
                });
            });
            $('#skintoolsSidebar').selectpicker($.po('selectpicker'));
        }, 
        sidebarEvents: function (_0x347d3e) {
            var _0x56f9b2 = _0x347d3e.val();
            this.sidebarImprove(_0x56f9b2);
        }, 
        navbarEvents: function (_0x5e9841) {
            var _0x25cc97 = _0x5e9841.val(),
                _0x3b1eeb = _0x5e9841.prop('checked');
            this.navbarImprove(_0x25cc97, _0x3b1eeb);
        }, 
        primaryEvents: function (_0x47c93a) {
            var _0x2d0365 = _0x47c93a.val();
            this.primaryImprove(_0x2d0365);
        }, 
        sidebarImprove: function (_0x4b6fc5) {
            if (_0x4b6fc5 === 'site-menubar-light') {
                this.$siteSidebar.removeClass('site-menubar-dark').addClass(_0x4b6fc5);
            } else {
                this.$siteSidebar.removeClass('site-menubar-light').addClass(_0x4b6fc5);
            }
        }, 
        navbarImprove: function (_0x25a2dc, _0x323798) {
            if (_0x25a2dc === 'navbar-inverse') {
                _0x323798 ? this.$siteNavbar.addClass(_0x25a2dc) : this.$siteNavbar.removeClass(_0x25a2dc);
            } else {
                this.$siteNavbar.removeClass(this.navbarSkins).addClass(_0x25a2dc);
            }
        }, 
        primaryImprove: function (_0x493d12) {
            var _0x50d74a = this,
                _0x3ddfe0 = $('#admui-siteStyle', $.parentFrame),
                _0x5494a1 = $.parentFrame.find('#admui-pageContent>iframe'),
                _0x330303, _0x446209 = _0x3ddfe0.prop('href').indexOf('?v=') === -0x1 ? '' : '.min';
            if (_0x493d12 === 'primary') {
                _0x330303 = this.path + '/css/index' + _0x446209 + '.css';
            } else {
                _0x330303 = this.path + '/skins/' + _0x493d12 + '/index' + _0x446209 + '.css';
            }
            _0x3ddfe0.attr('href', _0x330303);
            _0x5494a1.each(function () {
                var _0x2e2ca5 = $(this).attr('name'),
                    _0x24e773 = $('#admui-siteStyle', parent.frames[_0x2e2ca5].document),
                    _0x4aab80, _0x3b9981;
                if (_0x24e773.length) {
                    _0x4aab80 = _0x24e773.prop('href').indexOf('?v=') === -0x1 ? '' : '.min';
                    if (_0x493d12 === 'primary') {
                        _0x3b9981 = _0x50d74a.path + '/css/site' + _0x4aab80 + '.css';
                    } else {
                        _0x3b9981 = _0x50d74a.path + '/skins/' + _0x493d12 + '/site' + _0x4aab80 + '.css';
                    }
                    _0x24e773.attr('href', _0x3b9981);
                }
            });
        }
    };
    _0x18c4d6.init();
});
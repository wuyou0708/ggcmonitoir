//(document, window, jQuery)
$(function () {

    App.extend({
        'handleArrangement': function () {
            $(document).on('click', '#arrangement-grid', function () {
                var _0x18c91e = $(this);
                if (_0x18c91e.hasClass('active')) {
                    return;
                }
                $('#arrangement-list').removeClass('active');
                _0x18c91e.addClass('active');
                $('.media-list').removeClass('is-list').addClass('is-grid');
                $('.media-list>ul>li').removeClass('animation-fade').addClass('animation-scale-up');
            });
            $(document).on('click', '#arrangement-list', function () {
                var _0x111fd1 = $(this);
                if (_0x111fd1.hasClass('active')) {
                    return;
                }
                $('#arrangement-grid').removeClass('active');
                _0x111fd1.addClass('active');
                $('.media-list').removeClass('is-grid').addClass('is-list');
                $('.media-list>ul>li').removeClass('animation-scale-up').addClass('animation-fade');
            });
        }, 'handleActive': function () {
            $.po('selectable').rowSelector = '.media-item';
        }, 'handleAction': function () {
            var _0x570923 = $('.site-action').actionBtn().data('actionBtn');
            var _0x3fe451 = $('[data-selectable]');
            $('.site-action-toggle').on('click', function (_0x4b93c3) {
                var _0x4ffb28 = _0x3fe451.asSelectable('getSelected');
                if (_0x4ffb28.length === 0x0) {
                    $('#fileupload').trigger('click');
                    _0x4b93c3.stopPropagation();
                }
            });
            $(document).on('click', '[data-action="trash"]', '.site-action', function () {
                toastr.info('删除所选文件');
            });
            $(document).on('click', '[data-action="download"]', '.site-action', function () {
                toastr.info('下载所选文件');
            });
            $(document).on('asSelectable::change', '[data-selectable]', function (_0x2fd9f5, _0x307ac0, _0x29d7bf) {
                if (_0x29d7bf) {
                    _0x570923.show();
                } else {
                    _0x570923['hide']();
                }
            });
        }, 'handleDropdownAction': function () {
            $(document).on('show.bs.dropdown', '.info-wrap>.dropdown', function () {
                $(this).closest('.media-item').toggleClass('item-active');
            }).on('hidden.bs.dropdown', '.info-wrap>.dropdown', function () {
                $(this).closest('.media-item').toggleClass('item-active');
            });
            $(document).on('click', '.info-wrap\x20.dropdown-menu', function (_0x560a30) {
                _0x560a30.stopPropagation();
            });
        }, 'run': function (_0x39324f) {
            $(document).on('click', '.media-item-actions', function (_0xb10623) {
                _0xb10623.stopPropagation();
            });
            this.handleArrangement();
            this.handleAction();
            this.handleActive();
            this.handleDropdownAction();
            _0x39324f();
        }
    });
    App.run();
});
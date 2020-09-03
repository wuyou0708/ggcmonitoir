$(function () {

    App.extend({
        'run': function (_0x574edb) {
            var _0x118a03 = $('.site-action').actionBtn({
                'toggleSelector': '.list-group-item',
                'listSelector': '.site-action-buttons'
            }).data('actionBtn'),
                _0x1cfae3 = $('.list-group-item');
            _0x118a03.show();
            $(document).on('click', '.site-action-toggle', function (_0x54b732) {
                if (!_0x1cfae3.hasClass('active')) {
                    $('#addNewNote').modal('show');
                    _0x54b732.stopPropagation();
                } else {
                    $('.list-group-item').removeClass('active');
                    _0x118a03.hide();
                }
            });
            $(document).on('click', '.list-group-item', function () {
                $(this).addClass('active').siblings().removeClass('active');
                if ($(this).hasClass('active')) {
                    _0x118a03.show();
                }
            });
            _0x574edb();
        }
    });
    App.run();
});
//(document, window, jQuery)
$(function () {

    $('#exampleContext').contextmenu({
        'target': '#exampleContextMenu',
        'before': function (_0x10e699) {
            _0x10e699.preventDefault();
            if (_0x10e699.target.tagName === 'SPAN') {
                _0x10e699.preventDefault();
                this.closemenu();
                return ![];
            }
            this.getMenu().find('li').eq(4).find('a').html('选中内容');
            return !![];
        }
    });
    $('#exampleContext2').contextmenu({
        'target': '#exampleContextMenu',
        'onItem': function (_0xf637f6, _0x16f5fe) {
            toastr.info($.trim($(_0x16f5fe.target).text()));
        }
    });
    $(document).on('show.bs.context', '#exampleContextMenu', function () {
        toastr.info('显示之前');
    });
    $(document).on('shown.bs.context', '#exampleContextMenu', function () {
        toastr.info('显示之后');
    });
    $(document).on('hide.bs.context', '#exampleContextMenu', function () {
        toastr.info('隐藏之前');
    });
    $(document).on('hidden.bs.context', '#exampleContextMenu', function () {
        toastr.info('隐藏之后');
    });
});
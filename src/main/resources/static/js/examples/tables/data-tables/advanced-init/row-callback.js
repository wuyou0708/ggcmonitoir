$(function () {

    $('#dataTableExample').dataTable($.po('dataTable', {
        'createdRow': function (_0x4b06fb, _0x4ad52c) {
            if (_0x4ad52c[0x5].replace(/[\¥,]/g, '') * 0x1 > 0x61a80) {
                $('td', _0x4b06fb).eq(0x5).css('font-weight', 'bold').css('color', 'red');
            }
        }
    }));
});
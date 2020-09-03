$(function () {

    $.fn.dataTable.ext.search.push(function (_0x58dafc, _0x26fcc6) {
        var _0x12d602 = parseInt($('#DTMinAge').val(), 0xa);
        var _0x22a0c8 = parseInt($('#DTMaxAge').val(), 0xa);
        var _0x3641ae = parseFloat(_0x26fcc6[0x3]) || 0x0;
        return isNaN(_0x12d602) && isNaN(_0x22a0c8) || isNaN(_0x12d602) && _0x3641ae <= _0x22a0c8 || _0x12d602 <= _0x3641ae && isNaN(_0x22a0c8) || _0x12d602 <= _0x3641ae && _0x3641ae <= _0x22a0c8;
    });
    var _0x47349b = $('#dataTableExample').DataTable($.po('dataTable'));
    $(document).on('keyup', '#DTMinAge, #DTMaxAge', function () {
        _0x47349b.draw();
    });
});
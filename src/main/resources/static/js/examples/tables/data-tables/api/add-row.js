$(function () {

    var _0x64577a = $('#dataTableExample').DataTable($.po('dataTable')),
        _0x136664 = 0x1;
    $(document).on('click', '#DTAddRow', function () {
        _0x64577a.row.add([_0x136664 + '.1', _0x136664 + '.2', _0x136664 + '.3', _0x136664 + '.4', _0x136664 + '.5']).draw(![]);
        _0x136664++;
    });
    $('#DTAddRow').click();
});
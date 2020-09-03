$(function () {

    $('#dataTableExample tfoot th').each(function () {
        var _0x320b1e = $('#dataTableExample thead th').eq($(this).index()).text();
        $(this).html('<input class="form-control" type="text" placeholder="查找 ' + _0x320b1e + '">');
    });
    var _0x534e7d = $('#dataTableExample').DataTable($.po('dataTable'));
    _0x534e7d.columns().eq(0x0).each(function (_0x4ed6bc) {
        $('input', _0x534e7d.column(_0x4ed6bc).footer()).on('keyup change', function () {
            _0x534e7d.column(_0x4ed6bc).search(this.value).draw();
        });
    });
});
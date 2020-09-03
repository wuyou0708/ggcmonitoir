$(function () {

    var _0x4fafc7 = null,
        _0x22a807 = $('#dataTableExample').DataTable($.po('dataTable'));
    $(document).on('mouseover', '#dataTableExample tbody td', function () {
        var _0x3a9307 = _0x22a807.cell(this).index().column;
        if (_0x3a9307 !== _0x4fafc7) {
            $(_0x22a807.cells().nodes()).removeClass('highlight');
            $(_0x22a807.column(_0x3a9307).nodes()).addClass('highlight');
        }
    }).on('mouseleave', '#dataTableExample tbody', function () {
        $(_0x22a807.cells().nodes()).removeClass('highlight');
    });
});
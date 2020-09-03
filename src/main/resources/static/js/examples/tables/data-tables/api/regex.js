$(function () {


    function _0x2eff7b() {
        $('#dataTableExample').DataTable($.po('dataTable')).search($('#global_filter').val(), $('#global_regex').prop('checked'), $('#global_smart').prop('checked')).draw();
    }

    function _0x437e00(_0x4efcad) {
        $('#dataTableExample').DataTable($.po('dataTable')).column(_0x4efcad).search($('#col' + _0x4efcad + '_filter').val(), $('#col' + _0x4efcad + '_regex').prop('checked'), $('#col' + _0x4efcad + '_smart').prop('checked')).draw();
    }
    $('#dataTableExample').DataTable($.po('dataTable'));
    $(document).on('keyup click', 'input.global_filter', function () {
        _0x2eff7b();
    });
    $(document).on('keyup click', 'input.column_filter', function () {
        _0x437e00($(this).parents('tr').attr('data-column'));
    });
});
$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'initComplete': function () {
            var _0x3d4098 = this.api();
            _0x3d4098.columns().indexes().flatten().each(function (_0x244d0e) {
                var _0x389672 = _0x3d4098.column(_0x244d0e);
                var _0x32d21f = $('<select class="form-control"><option value="">--请选择--</option></select>').appendTo($(_0x389672.footer()).empty()).on('change', function () {
                    var _0x3f0c71 = $.fn.dataTable.util.escapeRegex($(this).val());
                    _0x389672.search(_0x3f0c71 ? '^' + _0x3f0c71 + '$' : '', !![], ![]).draw();
                });
                _0x389672.data().unique().sort().each(function (_0x36ef76) {
                    _0x32d21f.append('<option value="' + _0x36ef76 + '">' + _0x36ef76 + '</option>');
                });
            });
        }
    }));
});
$(function () {

    var _0x130253 = $('#dataTableExample').dataTable($.po('dataTable', {
        'columnDefs': [{
            'visible': ![],
            'targets': 0x2
        }],
        'order': [
            [0x2, 'asc']
        ],
        'displayLength': 0x19,
        'drawCallback': function () {
            var _0x4d39a8 = this.api();
            var _0x33e27c = _0x4d39a8.rows({
                'page': 'current'
            }).nodes();
            var _0x4a0ad1 = null;
            _0x4d39a8.column(0x2, {
                'page': 'current'
            }).data().each(function (_0x5cf3e2, _0x1b67ba) {
                if (_0x4a0ad1 !== _0x5cf3e2) {
                    $(_0x33e27c).eq(_0x1b67ba).before('<tr class="group"><td colspan="5">' + _0x5cf3e2 + '</td></tr>');
                    _0x4a0ad1 = _0x5cf3e2;
                }
            });
        }
    }));
    $(document).on('click', '#dataTableExample tbody tr.group', function () {
        var _0x3669f1 = _0x130253.order()[0x0];
        if (_0x3669f1[0x0] === 0x2 && _0x3669f1[0x1] === 'asc') {
            _0x130253.order([0x2, 'desc']).draw();
        } else {
            _0x130253.order([0x2, 'asc']).draw();
        }
    });
});
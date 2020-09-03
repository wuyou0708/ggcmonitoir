$(function () {
    $('#dataTableExample').DataTable($.po('dataTable', {
        'columnDefs': [{
            'render': function (_0x28b70e, _0x296145, _0x45b7ae) {
                return _0x28b70e + ' (' + _0x45b7ae[0x3] + ')';
            }, 'targets': 0x0
        }, {
            'visible': ![],
            'targets': [0x3]
        }]
    }));
});
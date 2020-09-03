$(function () {

    var _0x3d1f8a = $('#dataTableExample').DataTable($.po('dataTable', {
        'columnDefs': [{
            'searchable': ![],
            'orderable': ![],
            'targets': 0x0
        }],
        'order': [
            [0x1, 'asc']
        ]
    }));
    _0x3d1f8a.on('order.dt search.dt', function () {
        _0x3d1f8a.column(0x0, {
            'search': 'applied',
            'order': 'applied'
        }).nodes().each(function (_0x5223f7, _0x88984) {
            _0x5223f7.innerHTML = _0x88984 + 0x1;
        });
    }).draw();
});
$(function () {

    var _0x98a82d = $('#dataTableExample').dataTable($.po('dataTable', {
        'ajax': $.ctx + '/public/data/examples/tables/dt-ajax.json',
        'columnDefs': [{
            'targets': -0x1,
            'data': null,
            'defaultContent': '<button class="btn btn-outline btn-default btn-sm">查看</button>'
        }]
    }));
    $(document).on('click', '#dataTableExample tbody button', function () {
        var _0x12e97e = _0x98a82d.row($(this).parents('tr')).data();
        toastr.info(_0x12e97e[0x0] + ' 的年薪是：' + _0x12e97e[0x5]);
    });
});
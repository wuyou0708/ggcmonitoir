$(function () {

    var _0x246280 = $('#dataTableExample').DataTable($.po('dataTable'));
    App.run();
    $(document).on('click', '#dataTableExample tbody tr', function () {
        var _0x15e2fc = _0x246280.row(this).data();
        toastr.info('您单击了"' + _0x15e2fc[0x0] + '"的行');
    });
});
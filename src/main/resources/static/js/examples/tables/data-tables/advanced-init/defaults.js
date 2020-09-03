$(function () {
    $.extend(!![], $.fn.dataTable.defaults, $.po('dataTable'), {
        'searching': ![],
        'ordering': ![]
    });
    $('#dataTableExample').DataTable();
});
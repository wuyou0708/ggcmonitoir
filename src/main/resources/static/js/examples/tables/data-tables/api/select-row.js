$(function () {

    var _0x106f3a = $('#dataTableExample').DataTable($.po('dataTable'));
    $(document).on('click', '#dataTableExample tbody tr', function () {
        $(this).toggleClass('selected');
    });
    $(document).on('click', '#DTSelectRow', function () {
        toastr.info('选中了 ' + _0x106f3a.rows('.selected').data().length + ' 行数据');
    });
});
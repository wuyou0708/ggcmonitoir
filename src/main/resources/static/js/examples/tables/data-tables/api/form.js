$(function () {

    var _0x3ac59d = $('#dataTableExample').DataTable($.po('dataTable'));
    $(document).on('click', '#DTSubmitBtn', function () {
        var _0x555dbf = _0x3ac59d.$('input, select').serialize();
        toastr.info('将向服务器提交以下数据：<br>' + _0x555dbf.substr(0x0, 0x78) + '...');
    });
});
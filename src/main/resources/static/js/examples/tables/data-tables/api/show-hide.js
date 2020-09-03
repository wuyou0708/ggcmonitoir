$(function () {

    var _0x3ad583 = $('#dataTableExample').DataTable($.po('dataTable', {
        'scrollY': '200px',
        'paging': ![]
    }));
    $(document).on('click', '#DTToggleBtn .btn', function () {
        var _0x54bc5a = _0x3ad583.column($(this).attr('data-column'));
        _0x54bc5a.visible(!_0x54bc5a.visible());
    });
});
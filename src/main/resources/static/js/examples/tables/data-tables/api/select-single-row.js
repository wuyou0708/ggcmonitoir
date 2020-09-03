$(function () {

    var _0x372f7e = $('#dataTableExample').DataTable($.po('dataTable'));
    $(document).on('click', '#dataTableExample tbody tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            _0x372f7e.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    $(document).on('click', '#DTDelRow', function () {
        _0x372f7e.row('.selected').remove().draw(![]);
    });
});
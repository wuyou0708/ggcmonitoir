$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all',
            'dataType': 'jsonp'
        },
        'deferLoading': 0x39
    }));
});
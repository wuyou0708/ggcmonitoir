$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all',
            'dataType': 'jsonp'
        }
    }));
});
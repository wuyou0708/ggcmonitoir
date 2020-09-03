$(function () {

    $('#dataTableExample').dataTable($.po('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all',
            'dataType': 'jsonp'
        }
    }));
});
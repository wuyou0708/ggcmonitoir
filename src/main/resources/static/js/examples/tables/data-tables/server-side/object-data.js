$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all/get',
            'dataType': 'jsonp'
        },
        'columns': [{
            'data': 'name'
        }, {
            'data': 'title'
        }, {
            'data': 'base'
        }, {
            'data': 'age'
        }, {
            'data': 'hireDate'
        }, {
            'data': 'salary'
        }]
    }));
});
$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'ajax': $.ctx + '/public/data/examples/tables/dt-ajax-2.json',
        'columns': [{
            'data': 'name'
        }, {
            'data': 'position'
        }, {
            'data': 'office'
        }, {
            'data': 'extn'
        }, {
            'data': 'start_date'
        }, {
            'data': 'salary'
        }]
    }));
});
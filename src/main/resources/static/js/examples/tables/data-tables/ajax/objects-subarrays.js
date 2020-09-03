$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'processing': !![],
        'ajax': $.ctx + '/public/data/examples/tables/dt-ajax-1.json',
        'columns': [{
            'data': 'name'
        }, {
            'data': 'hr.position'
        }, {
            'data': 'contact.0'
        }, {
            'data': 'contact.1'
        }, {
            'data': 'hr.start_date'
        }, {
            'data': 'hr.salary'
        }]
    }));
});
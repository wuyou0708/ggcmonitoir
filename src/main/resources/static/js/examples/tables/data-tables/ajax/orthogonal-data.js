$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'processing': !![],
        'ajax': $.ctx + '/public/data/examples/tables/dt-ajax-4.json',
        'columns': [{
            'data': 'name'
        }, {
            'data': 'position'
        }, {
            'data': 'office'
        }, {
            'data': 'extn'
        }, {
            'data': {
                '_': 'start_date.display',
                'sort': 'start_date.timestamp'
            }
        }, {
            'data': 'salary'
        }]
    }));
});
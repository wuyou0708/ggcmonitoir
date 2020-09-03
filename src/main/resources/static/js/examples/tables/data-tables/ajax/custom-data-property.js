$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'processing': !![],
        'ajax': {
            'url': $.ctx + '/public/data/examples/tables/dt-ajax-5.json',
            'dataSrc': 'demo'
        }
    }));
});
$(function () {

    $(document).on('shown.bs.tab', '#DTExample a[data-toggle="tab"]', function () {
        $.fn.dataTable.tables({
            'visible': !![],
            'api': !![]
        }).columns.adjust();
    });
    $('#DTExample table.dataTable').DataTable($.po('dataTable', {
        'ajax': $.ctx + '/public/data/examples/tables/dt-ajax.json',
        'scrollY': 0xc8,
        'scrollCollapse': !![],
        'paging': ![]
    }));
    $('#myTable2').DataTable().search('北京').draw();
});
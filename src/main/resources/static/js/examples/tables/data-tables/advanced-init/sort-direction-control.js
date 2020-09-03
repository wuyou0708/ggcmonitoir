$(function () {
    $('#dataTableExample').dataTable($.po('dataTable', {
        'aoColumns': [null, null, {
            'orderSequence': ['asc']
        }, {
                'orderSequence': ['desc', 'asc', 'asc']
            }, {
                'orderSequence': ['desc']
            },
            null
        ]
    }));
});
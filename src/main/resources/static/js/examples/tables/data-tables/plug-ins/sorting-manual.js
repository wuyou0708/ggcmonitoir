$(function () {
    $.fn.dataTable.ext.type.order['salary-grade-pre'] = function (_0x7bf8df) {
        switch (_0x7bf8df) {
            case '低':
                return 0x1;
            case '中':
                return 0x2;
            case '高':
                return 0x3;
        }
        return 0x0;
    };
    $('#dataTableExample').DataTable($.po('dataTable', {
        'columnDefs': [{
            'type': 'salary-grade',
            'targets': -0x1
        }]
    }));
});
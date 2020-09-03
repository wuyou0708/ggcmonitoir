$(function () {

    $('#dataTableExample').dataTable($.po('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all',
            'dataType': 'jsonp',
            'data': function (_0x463350) {
                _0x463350.myKey = 'myValue';
            }
        }
    }));
});
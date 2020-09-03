$(function () {

    var _0xd3c288 = [0x0, 0x2, 0x4, 0x7, 0x9, 0xc, 0xd, 0xf, 0x13, 0x1a, 0x22, 0x25, 0x2c, 0x2f];
    $('#dataTableExample').dataTable($.po('dataTable', {
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
        }],
        'rowCallback': function (_0x2d0377, _0xd3781) {
            if ($.inArray(_0xd3781.DT_RowId, _0xd3c288) !== -0x1) {
                $(_0x2d0377).addClass('selected');
            }
        }
    }));
    $(document).on('click', '#dataTableExample tbody tr', function () {
        var _0x4c91b4 = this.id;
        var _0x312e08 = $.inArray(_0x4c91b4, _0xd3c288);
        if (_0x312e08 === -0x1) {
            _0xd3c288.push(_0x4c91b4);
        } else {
            _0xd3c288.splice(_0x312e08, 0x1);
        }
        $(this).toggleClass('selected');
    });
});
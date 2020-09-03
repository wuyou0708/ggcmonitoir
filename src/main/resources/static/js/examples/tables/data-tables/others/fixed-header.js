$(function () {

    var _0x1c72d5 = $('#exampleFixedHeader').DataTable($.po('dataTable', {
        'pagingType': 'full_numbers',
        'fixedHeader': {
            'header': !![],
            'headerOffset': 0x0
        }
    }));
    if (Breakpoints.is('xs')) {
        _0x1c72d5.fixedHeader.disable();
    }
    Breakpoints.on('xs', 'leave', function () {
        _0x1c72d5.fixedHeader.enable();
    });
    Breakpoints.on('sm', 'leave', function () {
        _0x1c72d5.fixedHeader.disable();
    });
});
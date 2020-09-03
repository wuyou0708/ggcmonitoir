$(function () {

    $('[data-toggle="tooltip"]:not(#tooltipClick)').tooltip({
        'trigger': 'hover'
    });
    $('#tooltipClick').tooltip({
        'trigger': 'click'
    });
    $('[data-toggle="popover"]').popover();
    var _0x36ea93 = $('#examplePopoverTable').html();
    $('#examplePopWithTable').webuiPopover($.po('webuiPopover', {
        'title': 'WebUI Popover',
        'content': _0x36ea93,
        'width': 0x1f4
    }));
    var _0x2ffa31 = $('#examplePopoverList').html();
    $('#examplePopWithList').webuiPopover($.po('webuiPopover', {
        'content': _0x2ffa31,
        'title': '',
        'padding': ![]
    }));
    var _0x3e8b3d = $('#examplePopoverLargeContent').html();
    $('#examplePopWithLargeContent').webuiPopover($.po('webuiPopover', {
        'title': 'WebUI Popover',
        'content': _0x3e8b3d,
        'width': 0x190,
        'height': 0x15e,
        'closeable': !![]
    }));
});
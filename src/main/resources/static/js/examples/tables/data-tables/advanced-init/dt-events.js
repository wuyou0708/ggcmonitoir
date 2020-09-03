$(function () {

    var _0x4d41fa = function (_0x3d127f) {
        var _0x3344c8 = $('#dataTableEventDemoInfo')[0x0];
        _0x3344c8.innerHTML += '<div>' + _0x3d127f + ' 事件 - ' + new Date().getTime() + '</div>';
        _0x3344c8.scrollTop = _0x3344c8.scrollHeight;
    };
    $('#dataTableExample').on('order.dt', function () {
        _0x4d41fa('排序');
    }).on('search.dt', function () {
        _0x4d41fa('查找');
    }).on('page.dt', function () {
        _0x4d41fa('分页');
    }).DataTable($.po('dataTable'));
});
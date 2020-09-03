$(function () {

    if ($('.list-group[data-plugin="nav-tabs"]').length) {
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (_0x1cbf99) {
            $(_0x1cbf99.target).addClass('active').siblings().removeClass('active');
        });
    }
});
$(function () {
    var _0x54481c;
    if (typeof $ === 'undefined') {
        _0x54481c = document.getElementById('closeTab');
        _0x54481c.innerHTML = '退回上一页';
        _0x54481c.onclick = function () {
            history.go(-0x1);
        };
    } else if (typeof $.site.contentTabs !== 'undefined') {
        $(document).on('click', '#closeTab', function () {
            $.site.contentTabs.closeTab();
        });
    }
});
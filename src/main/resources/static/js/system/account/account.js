$(function () {
    $.extend(window.notifyFn, {
        messageNum: function (_0x27a9f8) {
            var _0x274210 = $('#admui-navbarMessage').find('span.msg-num'),
                _0x1e84d7 = $('.msg-number'),
                _0x538c01 = _0x274210.text(),
                _0x587a22 = Number(_0x1e84d7.text());
            $('.tabList>li.news span').text(_0x538c01);
            if (_0x27a9f8 === '1') {
                _0x1e84d7.text(_0x587a22 + 0x1);
            }
        }, 
        unReadMsg: function(_0x389367) {
            $('.tabList>li.news span').text(_0x389367);
        }
    });
    $.ajax({
        url: $.ctx + '/user/account',
        dataType: 'JSON',
        success: function (_0x594b7e) {
            if (_0x594b7e.success) {
                $('.msg-number').text(_0x594b7e.msgCount);
                $('.log-number').text(_0x594b7e.logCount);
            } else {
                toastr.error('出错了，请重试！');
            }
        }, 
        error: function() {
            toastr.error('服务器异常，请稍后再试！');
        }
    });
});
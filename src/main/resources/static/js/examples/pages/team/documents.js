$(function () {

    var _0x1d1407 = {
        'affixHandle': function () {
            $('#articleAffix').affix({
                'offset': {
                    'top': 0xd2
                }
            });
        }, 'scrollHandle': function () {
            $('body').scrollspy({
                'target': '#articleAffix'
            });
        }, 'run': function () {
            this.scrollHandle();
            this.affixHandle();
        }
    };
    _0x1d1407.run();
});
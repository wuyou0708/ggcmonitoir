//(document, window, jQuery)
$(function () {

    $(document).on('click', '.select-loader', function () {
        var _0x3a863c = $(this).data('type'),
            _0x3bdd9f = $('.example-loading .loader').data('type');
        if (_0x3a863c === _0x3bdd9f) {
            return;
        }
        $('.example-loading .loader').removeClass('loader-' + _0x3bdd9f).addClass('loader-' + _0x3a863c).data('type', _0x3a863c);
    });
    $(document).on('click', '.btn', function (_0xcd1d4c) {
        var _0x2cb45f = $(_0xcd1d4c.target);
        var _0x24cd3b = _0x2cb45f.attr('id');
        parent.NProgress.configure($.po('nprogress'));
        switch (_0x24cd3b) {
            case 'exampleNProgressStart':
                parent.NProgress.start();
                break;
            case 'exampleNProgressSet':
                parent.NProgress.set(0.5);
                break;
            case 'exampleNProgressInc':
                parent.NProgress.inc();
                break;
            case 'exampleNProgressDone':
                parent.NProgress.done(true);
                break;
            case 'exampleNProgressDefault':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressHeader':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-header" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressBottom':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-bottom" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressPrimary':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-primary" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressSuccess':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-success" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressInfo':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-info" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressWarning':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-warning" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressDanger':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-danger" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressDark':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-dark" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
            case 'exampleNProgressLight':
                parent.NProgress.done(true);
                parent.NProgress.configure($.po('nprogress', {
                    'template': '<div class="bar nprogress-bar-light" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                }));
                parent.NProgress.start();
                break;
        }
    });
});
$(function () {
    window.edit = function () {
        $('.click2edit').summernote($.po('summernote', {
            'lang': 'zh-CN'
        }));
    };
    window.save = function () {
        $('.click2edit').destroy();
    };
});
$(function () {
    //App.run();
    $(document).on('click.panel.transition', '[data-type]', function () {
        var _0x4679fc = $(this).data('type');
        $('#exampleTransition').data('animateList').run(_0x4679fc);
    });
});
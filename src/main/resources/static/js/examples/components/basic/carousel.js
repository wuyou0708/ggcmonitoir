$(function () {

    $('#exampleSingleItem').slick();
    $('#exampleMultipleItems').slick({
        'infinite': !![],
        'slidesToShow': 0x3,
        'slidesToScroll': 0x3
    });
    $('#exampleResponsive').slick({
        'dots': !![],
        'infinite': ![],
        'speed': 0x1f4,
        'slidesToShow': 0x4,
        'slidesToScroll': 0x4,
        'responsive': [{
            'breakpoint': 0x400,
            'settings': {
                'slidesToShow': 0x3,
                'slidesToScroll': 0x3,
                'infinite': !![],
                'dots': !![]
            }
        }, {
            'breakpoint': 0x258,
            'settings': {
                'slidesToShow': 0x2,
                'slidesToScroll': 0x2
            }
        }, {
            'breakpoint': 0x1e0,
            'settings': {
                'slidesToShow': 0x1,
                'slidesToScroll': 0x1
            }
        }]
    });
    $('#exampleVariableWidth').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x12c,
        'slidesToShow': 0x1,
        'centerMode': !![],
        'variableWidth': !![]
    });
    $('#exampleAdaptiveHeight').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x12c,
        'slidesToShow': 0x1,
        'adaptiveHeight': !![]
    });
    $('#exampleData').slick();
    $('#exampleCenter').slick({
        'centerMode': !![],
        'centerPadding': '60px',
        'slidesToShow': 0x3,
        'responsive': [{
            'breakpoint': 0x300,
            'settings': {
                'arrows': ![],
                'centerMode': !![],
                'centerPadding': '40px',
                'slidesToShow': 0x3
            }
        }, {
            'breakpoint': 0x1e0,
            'settings': {
                'arrows': ![],
                'centerMode': !![],
                'centerPadding': '40px',
                'slidesToShow': 0x1
            }
        }]
    });
    $('#exampleLazy').slick({
        'lazyLoad': 'ondemand',
        'slidesToShow': 0x3,
        'slidesToScroll': 0x1
    });
    $('#exampleAutoplay').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x1f4,
        'slidesToShow': 0x3,
        'slidesToScroll': 0x1,
        'autoplay': !![],
        'autoplaySpeed': 0x7d0
    });
    $('#exampleFade').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x1f4,
        'fade': !![],
        'slide': 'div',
        'cssEase': 'linear'
    });
    var _0x52e906 = 0x1;
    $('#exampleAddRemove').slick({
        'dots': !![],
        'slidesToShow': 0x3,
        'speed': 0x1f4,
        'slidesToScroll': 0x3
    });
    $(document).on('click', '#exampleAddSlide', function () {
        _0x52e906++;
        $('#exampleAddRemove').slick('slickAdd', '<div><h3>' + _0x52e906 + '</h3></div>');
    });
    $(document).on('click', '#exampleRemoveSlide', function () {
        $('#exampleAddRemove').slick('slickRemove', _0x52e906 - 0x1);
        if (_0x52e906 !== 0x0) {
            _0x52e906--;
        }
    });
    $('#exampleFiltering').slick({
        'slidesToShow': 0x4,
        'slidesToScroll': 0x4
    });
    var _0x205e4b = ![];
    $(document).on('click', '#exampleFilter', function () {
        if (_0x205e4b === ![]) {
            $('#exampleFiltering').slick('slickFilter', ':even');
            $(this).text('不过滤');
            _0x205e4b = !![];
        } else {
            $('#exampleFiltering').slick('slickUnfilter');
            $(this).text('过滤');
            _0x205e4b = ![];
        }
    });
});
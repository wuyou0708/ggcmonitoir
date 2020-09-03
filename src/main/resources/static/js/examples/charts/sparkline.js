//(document, window, jQuery)
$(function () {

    var _0x595110 = $('.sparkline-compositebar-chart'),
        _0x4436ff = $('.sparkline-compositeline'),
        _0x449223 = $('.sparkline-compositebar');
    $('.sparkline-pie-chart').sparkline([0x4, 0x2, 0x6], {
        'type': 'pie',
        'height': '162px',
        'sliceColors': [$.colors('purple', 0x1f4), $.colors('purple', 0x2bc), $.colors('purple', 0x258)]
    });
    $('.sparkline-line-chart').sparkline([0x1, 0x3, 0x4, 0x2, 0x3, 0x6, 0x5, 0x3], {
        'type': 'line',
        'height': '162px',
        'width': '200px',
        'normalRangeMin': 0x0,
        'spotRadius': 0x2,
        'spotColor': $.colors('red', 0x258),
        'highlightSpotColor': $.colors('red', 0x2bc),
        'lineColor': $.colors('red', 0x1f4),
        'highlightLineColor': $.colors('red', 0x1f4),
        'fillColor': $.colors('red', 0x64)
    });
    $('.sparkline-bar-chart').sparkline([0x4, 0x7, 0x3, 0x2, 0x5, 0x6, 0x8, 0x5, 0x4, 0x8], {
        'type': 'bar',
        'height': '162px',
        'barWidth': 0xa,
        'barSpacing': 0x6,
        'barColor': $.colors('purple', 0x1f4),
        'negBarColor': $.colors('purple', 0x258)
    });
    _0x595110.sparkline('html', {
        'type': 'bar',
        'height': '162px',
        'barWidth': 0xa,
        'barSpacing': 0x5,
        'barColor': $.colors('blue-grey', 0x12c)
    });
    _0x595110.sparkline([0x4, 0x5, 0x6, 0x6, 0x5, 0x5, 0x3, 0x6, 0x4, 0x2], {
        'composite': !![],
        'fillColor': ![],
        'lineColor': $.colors('purple', 0x190)
    });
    _0x595110.sparkline([0x1, 0x4, 0x5, 0x2, 0x3, 0x5, 0x6, 0x1, 0x3, 0x6], {
        'composite': !![],
        'fillColor': ![],
        'lineColor': $.colors('red', 0x190)
    });
    $('.sparkline-line').sparkline('html', {
        'height': '32px',
        'width': '150px',
        'lineColor': $.colors('red', 0x258),
        'fillColor': $.colors('red', 0x64)
    });
    $('.sparkline-bar').sparkline('html', {
        'type': 'bar',
        'height': '32px',
        'barWidth': 0xa,
        'barSpacing': 0x5,
        'barColor': $.colors('purple', 0x1f4),
        'negBarColor': $.colors('red', 0x1f4),
        'stackedBarColor': [$.colors('purple', 0x1f4), $.colors('red', 0x1f4)]
    });
    _0x4436ff.sparkline('html', {
        'height': '32px',
        'width': '150px',
        'fillColor': ![],
        'lineColor': $.colors('purple', 0x1f4),
        'spotColor': $.colors('green', 0x1f4),
        'minSpotColor': $.colors('purple', 0x1f4),
        'maxSpotColor': $.colors('green', 0x1f4),
        'changeRangeMin': 0x0,
        'chartRangeMax': 0xa
    });
    _0x4436ff.sparkline([0x4, 0x1, 0x5, 0x7, 0x9, 0x8, 0x7, 0x6, 0x6, 0x4, 0x7, 0x8, 0x4, 0x3, 0x2, 0x5, 0x6, 0x7], {
        'composite': !![],
        'fillColor': ![],
        'height': '32px',
        'width': '150px',
        'lineColor': $.colors('red', 0x1f4),
        'spotColor': $.colors('green', 0x1f4),
        'minSpotColor': $.colors('purple', 0x1f4),
        'maxSpotColor': $.colors('green', 0x1f4),
        'changeRangeMin': 0x0,
        'chartRangeMax': 0xa
    });
    $('.sparkline-normalline').sparkline('html', {
        'fillColor': ![],
        'height': '32px',
        'width': '150px',
        'lineColor': $.colors('red', 0x258),
        'spotColor': $.colors('purple', 0x1f4),
        'minSpotColor': $.colors('purple', 0x1f4),
        'maxSpotColor': $.colors('purple', 0x1f4),
        'normalRangeColor': $.colors('blue-grey', 0x12c),
        'normalRangeMin': -0x1,
        'normalRangeMax': 0x8
    });
    _0x449223.sparkline('html', {
        'type': 'bar',
        'height': '32px',
        'barWidth': 0xa,
        'barSpacing': 0x5,
        'barColor': $.colors('purple', 0x1f4)
    });
    _0x449223.sparkline([0x4, 0x1, 0x5, 0x7, 0x9, 0x9, 0x8, 0x7, 0x6, 0x6, 0x4, 0x7, 0x8, 0x4, 0x3, 0x2, 0x2, 0x5, 0x6, 0x7], {
        'composite': !![],
        'fillColor': ![],
        'lineColor': $.colors('red', 0x258),
        'spotColor': $.colors('purple', 0x1f4)
    });
    $('.sparkline-discrete1').sparkline('html', {
        'type': 'discrete',
        'height': '32px',
        'lineColor': $.colors('purple', 0x1f4),
        'xwidth': 0x24
    });
    $('.sparkline-discrete2').sparkline('html', {
        'type': 'discrete',
        'height': '32px',
        'lineColor': $.colors('purple', 0x1f4),
        'thresholdColor': $.colors('red', 0x258),
        'thresholdValue': 0x4
    });
    $('.sparkline-bullet').sparkline('html', {
        'type': 'bullet',
        'targetColor': $.colors('red', 0x1f4),
        'targetWidth': '2',
        'performanceColor': $.colors('purple', 0x258),
        'rangeColors': [$.colors('purple', 0x64), $.colors('purple', 0xc8), $.colors('purple', 0x190)]
    });
    $('.sparkline-linecustom').sparkline('html', {
        'height': '32px',
        'width': '150px',
        'lineColor': $.colors('red', 0x190),
        'fillColor': $.colors('blue-grey', 0x12c),
        'minSpotColor': ![],
        'maxSpotColor': ![],
        'spotColor': $.colors('green', 0x1f4),
        'spotRadius': 0x2
    });
    $('.sparkline-tristate').sparkline('html', {
        'type': 'tristate',
        'height': '32px',
        'barWidth': 0xa,
        'barSpacing': 0x5,
        'posBarColor': $.colors('purple', 0x1f4),
        'negBarColor': $.colors('blue-grey', 0x12c),
        'zeroBarColor': $.colors('red', 0x1f4)
    });
    $('.sparkline-tristatecols').sparkline('html', {
        'type': 'tristate',
        'height': '32px',
        'barWidth': 0xa,
        'barSpacing': 0x5,
        'posBarColor': $.colors('purple', 0x1f4),
        'negBarColor': $.colors('blue-grey', 0x12c),
        'zeroBarColor': $.colors('red', 0x1f4),
        'colorMap': {
            '-4': $.colors('red', 0x2bc),
            '-2': $.colors('purple', 0x258),
            '2': $.colors('blue-grey', 0x190)
        }
    });
    $('.sparkline-boxplot').sparkline('html', {
        'type': 'box',
        'height': '20px',
        'width': '68px',
        'lineColor': $.colors('purple', 0x2bc),
        'boxLineColor': $.colors('purple', 0x190),
        'boxFillColor': $.colors('purple', 0x190),
        'whiskerColor': $.colors('blue-grey', 0x1f4),
        'medianColor': $.colors('red', 0x1f4)
    });
    $('.sparkline-boxplotraw').sparkline([0x1, 0x3, 0x5, 0x8, 0xa, 0xf, 0x12], {
        'type': 'box',
        'height': '20px',
        'width': '78px',
        'raw': !![],
        'showOutliers': !![],
        'target': 0x6,
        'lineColor': $.colors('purple', 0x2bc),
        'boxLineColor': $.colors('purple', 0x190),
        'boxFillColor': $.colors('purple', 0x190),
        'whiskerColor': $.colors('blue-grey', 0x1f4),
        'outlierLineColor': $.colors('blue-grey', 0x12c),
        'outlierFillColor': $.colors('blue-grey', 0x64),
        'medianColor': $.colors('red', 0x1f4),
        'targetColor': $.colors('green', 0x1f4)
    });
    $('.sparkline-pie').sparkline('html', {
        'type': 'pie',
        'height': '30px',
        'sliceColors': [$.colors('purple', 0x1f4), $.colors('purple', 0x2bc), $.colors('purple', 0x258)]
    });
    $('.sparkline-pie-1').sparkline('html', {
        'type': 'pie',
        'height': '30px',
        'sliceColors': [$.colors('purple', 0x1f4), $.colors('blue-grey', 0x12c)]
    });
});
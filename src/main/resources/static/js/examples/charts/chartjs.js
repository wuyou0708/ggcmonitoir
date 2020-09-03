//(document, window, jQuery)
$(function () {

    Chart.defaults.global.responsive = !![];
    var _0x991246 = {
        'labels': ['1月', '2', '3月', '4月', '5月', '6月', '7月'],
        'scaleShowGridLines': !![],
        'scaleShowVerticalLines': ![],
        'scaleGridLineColor': '#ebedf0',
        'datasets': [{
            'fillColor': 'rgba(204, 213, 219, .1)',
            'strokeColor': $.colors('blue-grey', 0x12c),
            'pointColor': $.colors('blue-grey', 0x12c),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': $.colors('blue-grey', 0x12c),
            'data': [0x41, 0x3b, 0x50, 0x51, 0x38, 0x37, 0x28]
        }, {
            'fillColor': 'rgba(98, 168, 234, .1)',
            'strokeColor': $.colors('purple', 0x258),
            'pointColor': $.colors('purple', 0x258),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': $.colors('purple', 0x258),
            'data': [0x1c, 0x30, 0x28, 0x13, 0x56, 0x1b, 0x5a]
        }]
    };
    new Chart($('#exampleChartjsLine').get(0x0).getContext('2d')).Line(_0x991246);
    var _0x26d672 = {
        'labels': ['1月', '2', '3月', '4月', '5月'],
        'scaleShowGridLines': !![],
        'scaleShowVerticalLines': ![],
        'scaleGridLineColor': '#ebedf0',
        'barShowStroke': ![],
        'datasets': [{
            'fillColor': $.colors('blue', 0x1f4),
            'strokeColor': $.colors('blue', 0x1f4),
            'highlightFill': $.colors('blue', 0x1f4),
            'highlightStroke': $.colors('blue', 0x1f4),
            'data': [0x41, 0x2d, 0x4b, 0x32, 0x3c]
        }, {
                'fillColor': $.colors('blue-grey', 0x12c),
                'strokeColor': $.colors('blue-grey', 0x12c),
                'highlightFill': $.colors('blue-grey', 0x12c),
            'highlightStroke': $.colors('blue-grey', 0x12c),
            'data': [0x1e, 0x14, 0x28, 0x19, 0x2d]
        }]
    };
    new Chart(document.getElementById('exampleChartjsBar').getContext('2d')).Bar(_0x26d672);
    var _0x106033 = {
        'labels': ['吃饭', '喝水', '睡觉', '设计', '编码', '娱乐', '跑步'],
        'pointLabelFontSize': 0xe,
        'datasets': [{
            'fillColor': 'rgba(204,213,219,0.35)',
            'strokeColor': 'rgba(0,0,0,0)',
            'pointColor': $.colors('blue-grey', 0x12c),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': $.colors('blue-grey', 0x12c),
            'data': [0x41, 0x3b, 0x5a, 0x51, 0x38, 0x37, 0x28]
        }, {
            'fillColor': 'rgba(250,122,122,0.25)',
            'strokeColor': 'rgba(0,0,0,0)',
            'pointColor': $.colors('red', 0x1f4),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': $.colors('red', 0x1f4),
            'data': [0x1c, 0x30, 0x28, 0x13, 0x60, 0x1b, 0x64]
        }]
    };
    new Chart(document.getElementById('exampleChartjsRadar').getContext('2d')).Radar(_0x106033, {
        'scaleShowLabels': ![],
        'pointLabelFontSize': 0xa
    });
    var _0x4abc77 = [{
        'value': 0x12c,
        'color': $.colors('red', 0x258),
        'label': '红色'
    }, {
        'value': 0xc8,
        'color': $.colors('purple', 0x1f4),
        'label': '蓝色'
    }, {
        'value': 0x64,
        'color': $.colors('blue-grey', 0xc8),
        'label': '蓝灰色'
    }, {
        'value': 0x32,
        'color': $.colors('blue-grey', 0x12c),
        'label': '深蓝灰色'
    }];
    new Chart(document.getElementById('exampleChartjsPloarArea').getContext('2d')).PolarArea(_0x4abc77);
    var _0x384319 = [{
        'value': 0x32,
        'color': $.colors('purple', 0x1f4),
        'label': '蓝色'
    }, {
        'value': 0x32,
        'color': $.colors('blue-grey', 0xc8),
        'label': '蓝灰色'
    }];
    new Chart(document.getElementById('exampleChartjsPie').getContext('2d')).Pie(_0x384319);
    var _0x11c3b6 = [{
        'value': 0x2d,
        'color': $.colors('red', 0x1f4),
        'label': '红色'
    }, {
        'value': 0xf,
        'color': $.colors('blue-grey', 0xc8),
        'label': '蓝灰色'
    }, {
        'value': 0x3c,
        'color': $.colors('purple', 0x1f4),
        'label': '蓝色'
    }];
    new Chart(document.getElementById('exampleChartjsDonut').getContext('2d')).Doughnut(_0x11c3b6);
});
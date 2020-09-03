//(document, window, jQuery)
$(function () {

    var _0x2b7d2f = {
        'timeButton': function () {
            $('#exampleTimeButton').on('click', function () {
                $('#inputTextCurrent').timepicker('setTime', new Date());
            });
        }, 'inlineDatepicker': function () {
            var _0x3fd395 = $('#inlineDatepicker');
            _0x3fd395.datepicker($.po('datepicker', {
                'language': 'zh-CN'
            }));
            _0x3fd395.on('changeDate', function () {
                $('#inputHiddenInline').val($('#inlineDatepicker').datepicker('getFormattedDate'));
            });
        }, 'inputTokenfieldTypeahead': function () {
            var _0x7b67a2 = new Bloodhound({
                'local': [{
                    'value': 'red-红色'
                }, {
                    'value': 'blue-蓝色'
                }, {
                    'value': 'green-绿色'
                }, {
                    'value': 'yellow-黄色'
                }, {
                    'value': 'violet-紫罗兰'
                }, {
                    'value': 'brown-棕色'
                }, {
                    'value': 'purple-紫色'
                }, {
                    'value': 'black-黑色'
                }, {
                    'value': 'white-白色'
                }],
                'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('value'),
                'queryTokenizer': Bloodhound.tokenizers.whitespace
            });
            $('#inputTokenfieldTypeahead').tokenfield({
                'typeahead': [null, {
                    'name': 'engine',
                    'displayKey': 'value',
                    'source': _0x7b67a2.ttAdapter()
                }]
            });
        }, 'inputTokenfieldEvents': function () {
            $('#inputTokenfieldEvents').on('tokenfield:createtoken', function (_0x3fe082) {
                var _0x5768db = _0x3fe082.attrs.value.split('|');
                _0x3fe082.attrs.value = _0x5768db[0x1] || _0x5768db[0x0];
                _0x3fe082.attrs.label = _0x5768db[0x1] ? _0x5768db[0x0] + ' (' + _0x5768db[0x1] + ')' : _0x5768db[0x0];
            }).on('tokenfield:createdtoken', function (_0x31ebb3) {
                var _0xd38892 = /\S+@\S+\.\S+/;
                var _0x3fe575 = _0xd38892.test(_0x31ebb3.attrs.value);
                if (!_0x3fe575) {
                    $(_0x31ebb3.relatedTarget).addClass('invalid');
                }
            }).on('tokenfield:edittoken', function (_0x17e65c) {
                if (_0x17e65c.attrs.label !== _0x17e65c.attrs.value) {
                    var _0x396fb7 = _0x17e65c.attrs.label.split(' (');
                    _0x17e65c.attrs.value = _0x396fb7[0x0] + '|' + _0x17e65c.attrs.value;
                }
            }).on('tokenfield:removedtoken', function (_0x3c4c08) {
                if (_0x3c4c08.attrs.length > 0x1) {
                    var _0x210051 = $.map(_0x3c4c08.attrs, function (_0x318c2b) {
                        return _0x318c2b.value;
                    });
                    toastr.info(_0x3c4c08.attrs.length + '已删除：' + _0x210051.join(', '));
                } else {
                    toastr.info('已删除：' + _0x3c4c08.attrs.value);
                }
            }).tokenfield();
        }, 'tagsObj': function () {
            var _0x511ef = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('text'),
                'queryTokenizer': Bloodhound.tokenizers.whitespace,
                'prefetch': $.ctx + '/public/data/examples/forms/cities.json'
            });
            _0x511ef.initialize();
            var _0x1f646d = $('#inputTagsObject');
            _0x1f646d.tagsinput($.po('tagsinput', {
                'itemValue': 'value',
                'itemText': 'text',
                'typeaheadjs': [{
                    'hint': !![],
                    'highlight': !![],
                    'minLength': 0x1
                }, {
                    'name': 'cities',
                    'displayKey': 'text',
                    'source': _0x511ef.ttAdapter()
                }]
            }));
            _0x1f646d.tagsinput('add', {
                'value': 0x1,
                'text': '北京',
                'continent': '北京'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x2,
                'text': '广州',
                'continent': '广东'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x3,
                'text': '韶关',
                'continent': '广东'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x4,
                'text': '深圳',
                'continent': '广东'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x5,
                'text': '珠海',
                'continent': '广东'
            });
        }, 'tagsSort': function () {
            var _0x1ff039 = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('text'),
                'queryTokenizer': Bloodhound.tokenizers.whitespace,
                'prefetch': $.ctx + '/public/data/examples/forms/cities.json'
            });
            _0x1ff039.initialize();
            var _0x1fedce = $('#inputTagsCategorizing');
            _0x1fedce.tagsinput($.po('tagsinput', {
                'tagClass': function (_0x462025) {
                    switch (_0x462025.continent) {
                        case '北京':
                            return 'label label-primary';
                        case '广东':
                            return 'label label-danger';
                        case '浙江':
                            return 'label label-success';
                        case '新疆':
                            return 'label label-default';
                        case '江苏':
                            return 'label label-warning';
                    }
                }, 'itemValue': 'value',
                'itemText': 'text',
                'typeaheadjs': [{
                    'hint': !![],
                    'highlight': !![],
                    'minLength': 0x1
                }, {
                    'name': 'cities',
                    'displayKey': 'text',
                    'source': _0x1ff039.ttAdapter()
                }]
            }));
            _0x1fedce.tagsinput('add', {
                'value': 0x1,
                'text': '北京',
                'continent': '北京'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x2,
                'text': '广州',
                'continent': '广东'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x3,
                'text': '韶关',
                'continent': '广东'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x4,
                'text': '深圳',
                'continent': '广东'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x5,
                'text': '珠海',
                'continent': '广东'
            });
        }, 'multiSelect': function () {
            $('.multi-select-methods').multiSelect();
            $('#buttonSelectAll').click(function () {
                $('.multi-select-methods').multiSelect('select_all');
                return ![];
            });
            $('#buttonDeselectAll').click(function () {
                $('.multi-select-methods').multiSelect('deselect_all');
                return ![];
            });
            $('#buttonSelectSome').click(function () {
                $('.multi-select-methods').multiSelect('select', ['BMW', 'Audi', 'Benz']);
                return ![];
            });
            $('#buttonDeselectSome').click(function () {
                $('.multi-select-methods').multiSelect('select', ['BMW', 'Audi', 'Benz']);
                return ![];
            });
            $('#buttonRefresh').on('click', function () {
                $('.multi-select-methods').multiSelect('refresh');
                return ![];
            });
            $('#buttonAdd').on('click', function () {
                $('.multi-select-methods').multiSelect('addOption', {
                    'value': 0x2a,
                    'text': '测试项 42',
                    'index': 0x0
                });
                return ![];
            });
        }, 'typeahead': function () {
            var _0x51cdcc = ['Andorra , 安道尔', 'Afghanistan , 阿富汗', 'Antigua and Barbuda , 安提瓜和巴布达', 'Anguilla , 安格拉', 'Albania , 阿尔巴尼亚', 'Armenia , 亚美尼亚', 'Netherlands Antilles , 荷兰属地', 'Angola , 安哥拉', 'Antarctica , 南极洲', 'Argentina , 阿根廷', 'American Samoa , 东萨摩亚', 'Austria , 奥地利', 'Australia , 澳大利亚', 'Aruba , 阿鲁巴', 'Azerbaijan , 阿塞拜疆', 'Bosnia Hercegovina , 波黑', 'Barbados , 巴巴多斯', 'Bangladesh , 孟加拉国', 'Belgium , 比利时', 'Burkina Faso , 布基纳法索', 'Bulgaria , 保加利亚', 'Bahrain , 巴林', 'Burundi , 布隆迪', 'Benin , 贝宁', 'Bermuda , 百慕大 ', 'China, 中国'];
            var _0x4939cf = function (_0x3d816d) {
                return function findMatches(_0x25c5d6, _0x18cb54) {
                    var _0x97543c, _0x278941;
                    _0x97543c = [];
                    _0x278941 = new RegExp(_0x25c5d6, 'i');
                    $.each(_0x3d816d, function (_0x1e30dc, _0x15f5cc) {
                        if (_0x278941.test(_0x15f5cc)) {
                            _0x97543c.push(_0x15f5cc);
                        }
                    });
                    _0x18cb54(_0x97543c);
                };
            };
            $('#exampleTypeaheadBasic, #exampleTypeaheadStyle').typeahead({
                'hint': !![],
                'highlight': !![],
                'minLength': 0x1
            }, {
                    'name': 'states',
                    'source': _0x4939cf(_0x51cdcc)
                });
            var _0x148729 = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.whitespace,
                'queryTokenizer': Bloodhound.tokenizers.whitespace,
                'local': _0x51cdcc
            });
            $('#exampleTypeaheadBloodhound').typeahead({
                'hint': !![],
                'highlight': !![],
                'minLength': 0x1
            }, {
                    'name': 'states',
                    'source': _0x148729
                });
            var _0x2eeaaa = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.whitespace,
                'queryTokenizer': Bloodhound.tokenizers.whitespace,
                'prefetch': $.ctx + '/public/data/examples/forms/countries.json'
            });
            $('#exampleTypeaheadPrefetch').typeahead(null, {
                'name': 'countries',
                'source': _0x2eeaaa
            });
        }, 'colorpickerEvent': function () {
            $('#colorpickerEvent').colorpicker().on('changeColor', function (_0x4c5c0f) {
                toastr.info('颜色值已改变');
                _0x4c5c0f.stopPropagation();
            });
        }, 'dateRangePicker': function () {
            var _0x14b484 = $('#drpConfigText'),
                _0x124d34 = function () {
                    var _0x25ffaa = {},
                        _0xd0d4c7 = $('#timePickerIncrement').val(),
                        _0x20f81a = $('#cancelClass').val(),
                        _0x1ee3b1 = $('#opens').val(),
                        _0xf175fd = $('#drops').val(),
                        _0x70e13a = $('#buttonClasses').val(),
                        _0x1aff47 = $('#applyClass').val();
                    if ($('#singleDatePicker').is(':checked')) {
                        _0x25ffaa.singleDatePicker = !![];
                    }
                    if ($('#showDropdowns').is(':checked')) {
                        _0x25ffaa.showDropdowns = !![];
                    }
                    if ($('#showWeekNumbers').is(':checked')) {
                        _0x25ffaa.showWeekNumbers = !![];
                    }
                    if ($('#showISOWeekNumbers').is(':checked')) {
                        _0x25ffaa.showISOWeekNumbers = !![];
                    }
                    if ($('#timePicker').is(':checked')) {
                        _0x25ffaa.timePicker = !![];
                    }
                    if ($('#timePicker24Hour').is(':checked')) {
                        _0x25ffaa.timePicker24Hour = !![];
                    }
                    if (_0xd0d4c7.length && _0xd0d4c7 !== 0x1) {
                        _0x25ffaa.timePickerIncrement = parseInt(_0xd0d4c7, 0xa);
                    }
                    if ($('#timePickerSeconds').is(':checked')) {
                        _0x25ffaa.timePickerSeconds = !![];
                    }
                    if ($('#autoApply').is(':checked')) {
                        _0x25ffaa.autoApply = !![];
                    }
                    if ($('#dateLimit').is(':checked')) {
                        _0x25ffaa.dateLimit = {
                            'days': 0x7
                        };
                    }
                    if ($('#ranges').is(':checked')) {
                        _0x25ffaa.ranges = {
                            'Today': [moment(), moment()],
                            'Yesterday': [moment().subtract(0x1, 'days'), moment().subtract(0x1, 'days')],
                            'Last 7 Days': [moment().subtract(0x6, 'days'), moment()],
                            'Last 30 Days': [moment().subtract(0x1d, 'days'), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                            'Last Month': [moment().subtract(0x1, 'month').startOf('month'), moment().subtract(0x1, 'month').endOf('month')]
                        };
                    }
                    if ($('#locale').is(':checked')) {
                        _0x25ffaa.locale = {
                            'format': 'MM/DD/YYYY',
                            'separator': ' - ',
                            'applyLabel': 'Apply',
                            'cancelLabel': 'Cancel',
                            'fromLabel': 'From',
                            'toLabel': 'To',
                            'customRangeLabel': 'Custom',
                            'weekLabel': 'W',
                            'daysOfWeek': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                            'monthNames': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                            'firstDay': 0x1
                        };
                    }
                    if (!$('#linkedCalendars').is(':checked')) {
                        _0x25ffaa.linkedCalendars = ![];
                    }
                    if (!$('#autoUpdateInput').is(':checked')) {
                        _0x25ffaa.autoUpdateInput = ![];
                    }
                    if (!$('#showCustomRangeLabel').is(':checked')) {
                        _0x25ffaa.showCustomRangeLabel = ![];
                    }
                    if ($('#alwaysShowCalendars').is(':checked')) {
                        _0x25ffaa.alwaysShowCalendars = !![];
                    }
                    if ($('#parentEl').val().length) { }
                    _0x25ffaa.parentEl = $('#parentEl').val();
                    if ($('#startDate').val().length) { }
                    _0x25ffaa.startDate = $('#startDate').val();
                    if ($('#endDate').val().length) { }
                    _0x25ffaa.endDate = $('#endDate').val();
                    if ($('#minDate').val().length) { }
                    _0x25ffaa.minDate = $('#minDate').val();
                    if ($('#maxDate').val().length) { }
                    _0x25ffaa.maxDate = $('#maxDate').val();
                    if (_0x1ee3b1.length && _0x1ee3b1 !== 'right') {
                        _0x25ffaa.opens = _0x1ee3b1;
                    }
                    if (_0xf175fd.length && _0xf175fd !== 'down') {
                        _0x25ffaa.drops = _0xf175fd;
                    }
                    if (_0x70e13a.length && _0x70e13a !== 'btn btn-sm') {
                        _0x25ffaa.buttonClasses = _0x70e13a;
                    }
                    if (_0x1aff47.length && _0x1aff47 !== 'btn-success') {
                        _0x25ffaa.applyClass = _0x1aff47;
                    }
                    if (_0x20f81a.length && _0x20f81a !== 'btn-default') {
                        _0x25ffaa.cancelClass = _0x20f81a;
                    }
  //                  _0x14b484.val('$("#demo").daterangepicker(" + JSON.stringify(_0x25ffaa, null, "    ") + ", function(start, end, label) {
  //console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  //              }); ');
            $('#drpConfigDemo').daterangepicker($.po('daterangepicker', _0x25ffaa), function (_0x4f09b0, _0x5d4a00, _0x2ca572) {
                console.log('New date range selected: ' + _0x4f09b0.format('YYYY-MM-DD') + ' to ' + _0x5d4a00.format('YYYY-MM-DD') + ' (predefined range: ' + _0x2ca572 + ')');
            });
        };
            _0x14b484.keyup(function () {
            eval($(this).val());
        });
            $('#rangePickerConfig').find('input:not("#drpConfigDemo, #drpConfigText"),select').change(function () {
            _0x124d34();
        });
    $('#startDate').daterangepicker($.po('daterangepicker', {
        'singleDatePicker': !![],
        'startDate': moment().subtract(0x6, 'days')
    }));
    $('#endDate').daterangepicker($.po('daterangepicker', {
        'singleDatePicker': !![],
        'startDate': moment()
    }));
    _0x124d34();
}, 'iconFun': function () {
    var _0x6209e1 = {
        'fullClassFormatter': function (_0xc812ae) {
            return 'icon ' + _0xc812ae;
        }, 'templates': {
            'popover': '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
            'footer': '<div class="popover-footer"></div>',
            'buttons': '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
            'search': '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
            'iconpicker': '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
            'iconpickerItem': '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
        }
    };
    $('#definedIcon1').iconpicker($.extend({
        'title': '自定义配置',
        'icons': ['fa-github', 'fa-heart', 'fa-html5', 'fa-css3'],
        'selectedCustomClass': 'label label-success',
        'mustAccept': !![],
        'placement': 'bottomRight',
        'showFooter': !![]
    }, _0x6209e1));
    $('#definedIcon2').iconpicker($.extend({
        'title': '使用 glypghicons',
        'icons': $.merge(['glyphicon-home', 'glyphicon-repeat', 'glyphicon-search', 'glyphicon-arrow-left', 'glyphicon-arrow-right', 'glyphicon-star'], $.iconpicker.defaultOptions.icons),
        'fullClassFormatter': function (_0x16e1a7) {
            if (_0x16e1a7.match(/^fa-/)) {
                return 'fa ' + _0x16e1a7;
            } else {
                return 'glyphicon ' + _0x16e1a7;
            }
        }
    }, _0x6209e1));
}, 'run': function () {
    this.inlineDatepicker();
    this.inputTokenfieldEvents();
    this.inputTokenfieldTypeahead();
    this.multiSelect();
    this.tagsObj();
    this.tagsSort();
    this.timeButton();
    this.typeahead();
    this.colorpickerEvent();
    this.dateRangePicker();
    this.iconFun();
}
    };
_0x2b7d2f.run();
});
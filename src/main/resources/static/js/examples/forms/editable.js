//(document, window, jQuery)
$(function () {

    $('#editableEnable').click(function () {
        $('#editableUser .editable').editable('toggleDisabled');
    });
    var _0x1b0389 = function () {
        $.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit">' + '<i class="icon wb-check" aria-hidden="true"></i>' + '</button>' + '<button type="button" class="btn btn-default btn-sm editable-cancel">' + '<i class="icon wb-close" aria-hidden="true"></i>' + '</button>';
        $.fn.editabletypes.datefield.defaults.inputclass = 'form-control input-sm';
        $.fn.editable.defaults.url = $.ctx + '/post';
        $('#editableSuperuser').editable({
            'url': $.ctx + '/post',
            'type': 'text',
            'pk': 0x1,
            'name': 'username',
            'title': '请输入用户名'
        });
        $('#editableFirstname').editable({
            'validate': function (_0x48bc72) {
                if ($.trim(_0x48bc72) === '') {
                    return '必填';
                }
            }
        });
        $('#editableSex').editable({
            'prepend': '请选择',
            'source': [{
                'value': 0x1,
                'text': '男'
            }, {
                'value': 0x2,
                'text': '女'
            }],
            'display': function (_0x22c50c, _0x5d9263) {
                var _0x24f3ac = {
                    '': 'gray',
                    1: 'green',
                    2: 'blue'
                },
                    _0x5c3fe7 = $.grep(_0x5d9263, function (_0x3bd572) {
                        return _0x3bd572.value === _0x22c50c;
                    });
                if (_0x5c3fe7.length) {
                    $(this).text(_0x5c3fe7[0x0].text).css('color', _0x24f3ac[_0x22c50c]);
                } else {
                    $(this).empty();
                }
            }
        });
        $('#editableVacation').editable({
            'datepicker': {
                'todayBtn': 'linked'
            }
        });
        $('#editableDob').editable();
        $('#editableEvent').editable({
            'placement': 'right',
            'combodate': {
                'firstItem': 'name'
            }
        });
        $('#editableMeetingStart').editable({
            'format': 'yyyy-mm-dd hh:ii',
            'viewformat': 'yyyy/mm/dd hh:ii',
            'validate': function (_0x3ccd87) {
                if (_0x3ccd87 && _0x3ccd87.getDate() === 0xa) {
                    return '日期不能为10！';
                }
            }, 'datetimepicker': {
                'todayBtn': 'linked',
                'weekStart': 0x1
            }
        });
        $('#editableComments').editable({
            'showbuttons': 'bottom'
        });
        $('#editableNote').editable();
        $('#editablePencil').click(function (_0x3ecdf1) {
            _0x3ecdf1.stopPropagation();
            _0x3ecdf1.preventDefault();
            $('#editableNote').editable('toggle');
        });
        $('#editableState').editable({
            'source': ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
        });
        var _0x2440be = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            _0xdd0bee = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.whitespace,
                'queryTokenizer': Bloodhound.tokenizers.whitespace,
                'local': _0x2440be
            });
        $('#editableState2').editable({
            'value': 'California',
            'typeahead': {
                'options': {
                    'hint': !![],
                    'highlight': !![],
                    'minLength': 0x1
                },
                'datasets': {
                    'name': 'states',
                    'source': _0xdd0bee
                }
            }
        });
        $('#editableFruits').editable({
            'pk': 0x1,
            'limit': 0x3,
            'source': [{
                'value': 0x1,
                'text': '香蕉'
            }, {
                'value': 0x2,
                'text': '桃子'
            }, {
                'value': 0x3,
                'text': '苹果'
            }, {
                'value': 0x4,
                'text': '西瓜'
            }, {
                'value': 0x5,
                'text': '橘子'
            }]
        });
        $('#editableAddress').editable({
            'url': $.ctx + '/post',
            'value': {
                'city': '上海',
                'street': '人民大道',
                'building': '12'
            },
            'validate': function (_0x3fcb2d) {
                if (_0x3fcb2d.city === '') {
                    return '请选择城市';
                }
            }, 'display': function (_0x5f1c92) {
                if (!_0x5f1c92) {
                    $(this).empty();
                    return;
                }
                var _0x10de2a = '<b>' + $('<div>').text(_0x5f1c92.city).html() + '</b>, ' + $('<div>').text(_0x5f1c92.street).html() + ' st., bld. ' + $('<div>').text(_0x5f1c92.building).html();
                $(this).html(_0x10de2a);
            }
        });
    };
    $.fn.editable.defaults.mode = 'inline';
    _0x1b0389();
});
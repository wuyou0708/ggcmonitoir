//(document, window, jQuery)
$(function () {

    $('#data').jstree({
        'core': {
            'data': [{
                'text': '父节点',
                'children': [{
                    'text': '子节点 1'
                }, {
                    'text': '子节点 2'
                }]
            }]
        }
    });
    $('#frmt').jstree({
        'core': {
            'data': [{
                'text': '父节点',
                'state': {
                    'opened': !![]
                },
                'children': [{
                    'text': '子节点 1',
                    'state': {
                        'selected': !![]
                    },
                    'icon': 'jstree-file'
                }, {
                    'text': '子节点 2',
                    'state': {
                        'disabled': !![]
                    }
                }]
            }]
        }
    });
    $('#ajax').data('jstree', ![]).empty().jstree({
        'core': {
            'data': {
                'url': $.ctx + '../../../../../../public/data/examples/components/jstree-root.json',
                'dataType': 'JSON'
            }
        }
    });
    $('#lazy').jstree({
        'core': {
            'data': {
                'url': $.ctx + '../../../../../../public/data/examples/components/jstree-root.json',
                'dataType': 'JSON',
                'data': function (_0x557f7a) {
                    return {
                        'id': _0x557f7a.id
                    };
                }
            }
        }
    });
    $('#clbk').jstree({
        'core': {
            'data': function (_0x540866, _0xabfc36) {
                if (_0x540866.id === '#') {
                    _0xabfc36([{
                        'text': '父节点',
                        'id': '1',
                        'children': !![]
                    }]);
                } else {
                    _0xabfc36(['子节点']);
                }
            }
        }
    });
    $('#evts_button').on('click', function () {
        var _0x5bb2dd = $('#evts').jstree(!![]);
        _0x5bb2dd.deselect_all();
        _0x5bb2dd.select_node('1');
    });
    $('#evts').on('changed.jstree', function (_0x307d36, _0x4f5197) {
        if (_0x4f5197.selected.length) {
            toastr.info('您选择的节点是：' + _0x4f5197.instance.get_node(_0x4f5197.selected[0x0]).text);
        }
    }).jstree({
        'core': {
            'multiple': ![],
            'data': [{
                'text': '父节点',
                'children': [{
                    'text': '子节点 1',
                    'id': 0x1
                }, {
                    'text': '子节点 2'
                }]
            }]
        }
    });
});
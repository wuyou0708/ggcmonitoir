$(function () {

    var _0x4b6e78 = function () {
        return [{
            'text': '父节点 1',
            'href': '#parent1',
            'tags': ['4'],
            'nodes': [{
                'text': '子节点 1',
                'href': '#child1',
                'tags': ['2'],
                'nodes': [{
                    'text': '叶子节点 1',
                    'href': '#叶子节点1',
                    'tags': ['0']
                }, {
                    'text': '叶子节点 2',
                    'href': '#叶子节点2',
                    'tags': ['0']
                }]
            }, {
                'text': '子节点 2',
                'href': '#child2',
                'tags': ['0']
            }]
        }, {
            'text': '父节点 2',
            'href': '#parent2',
            'tags': ['0']
        }, {
            'text': '父节点 3',
            'href': '#parent3',
            'tags': ['0']
        }, {
            'text': '父节点 4',
            'href': '#parent4',
            'tags': ['0']
        }, {
            'text': '父节点 5',
            'href': '#parent5',
            'tags': ['0']
        }];
    }(),
        _0x285020, _0x6968a1 = {};
    _0x285020 = $.extend({}, {
        'injectStyle': ![],
        'expandIcon': 'icon wb-plus',
        'collapseIcon': 'icon wb-minus',
        'emptyIcon': 'icon',
        'nodeIcon': 'icon wb-folder',
        'showBorder': ![],
        'color': '#000000',
        'backColor': '#FFFFFF',
        'borderColor': $.colors('blue-grey', 0xc8),
        'onhoverColor': $.colors('blue-grey', 0x64),
        'selectedColor': '#ffffff',
        'selectedBackColor': $.colors('purple', 0x258),
        'searchResultColor': $.colors('purple', 0x258),
        'searchResultBackColor': '#ffffff'
    });
    $.extend(_0x6968a1, {
        basic: function () {
            $('.treeview').each(function () {
                var _0x43d3c8 = $(this),
                    _0x3b21e9 = $.extend({}, _0x285020, _0x43d3c8.data(), {
                        'data': _0x4b6e78
                    });
                _0x43d3c8.treeview(_0x3b21e9);
            });
        }, 
        jsonData: function() {
            var _0xb2ba52 = '[' + '{' + '"text": "父节点 1",' + '"nodes": [' + '{' + '"text": "子节点 1",' + '"nodes": [' + '{' + '"text": "叶子节点 1"' + '},' + '{' + '"text": "叶子节点 2"' + '}' + ']' + '},' + '{' + '"text": "子节点 2"' + '}' + ']' + '},' + '{' + '"text": "父节点 2"' + '},' + '{' + '"text": "父节点 3"' + '},' + '{' + '"text": "父节点 4"' + '},' + '{' + '"text": "父节点 5"' + '}' + ']',
                _0xb135e4 = $.extend({}, _0x285020, {
                    'data': _0xb2ba52
                });
            $('#exampleJsonData').treeview(_0xb135e4);
        }, 
        check: function() {
            var _0x1b3227 = $.extend({}, _0x285020, {
                'data': _0x4b6e78
            });
            var _0x41e86f = $('#exampleSearchableTree').treeview(_0x1b3227);
            $(document).on('keyup', '#inputSearchable', function (_0x2d7eda) {
                var _0x21b6cb = $(_0x2d7eda.target).val();
                _0x41e86f.treeview('search', [_0x21b6cb, {
                    'ignoreCase': !![],
                    'exactMatch': ![]
                }]);
            });
        }, 
        foldChange: function() {
            var _0x4117e2 = $.extend({}, _0x285020, {
                'data': _0x4b6e78
            }),
                _0x199ad1 = $('#exampleExpandibleTree').treeview(_0x4117e2);
            $(document).on('click', '#exampleExpandAll', function () {
                _0x199ad1.treeview('expandAll', {
                    'levels': '99'
                });
            });
            $(document).on('click', '#exampleCollapseAll', function () {
                _0x199ad1.treeview('collapseAll');
            });
        }, 
        event: function() {
            var _0x26c801, _0x19b50e;
            _0x26c801 = function (_0x39eff3) {
                toastr.info(_0x39eff3, '', {
                    'iconClass': 'toast-just-text toast-info',
                    'positionClass': 'toast-bottom-right',
                    'containertId': 'toast-bottom-right'
                });
            };
            _0x19b50e = $.extend({}, _0x285020, {
                'data': _0x4b6e78,
                'onNodeCollapsed': function (_0x24795c, _0x36b6e6) {
                    _0x26c801(_0x36b6e6.text + ' 被收起');
                }, 'onNodeExpanded': function (_0x4aab41, _0x4009a3) {
                    _0x26c801(_0x4009a3.text + ' 被展开');
                }, 'onNodeSelected': function (_0xeee6ba, _0x268932) {
                    _0x26c801(_0x268932.text + ' 被选中');
                }, 'onNodeUnselected': function (_0x218807, _0x4bb398) {
                    _0x26c801(_0x4bb398.text + ' 被取消选中');
                }
            });
            $('#exampleEvents').treeview(_0x19b50e);
        }, 
        run: function() {
            this.basic();
            this.jsonData();
            this.check();
            this.foldChange();
            this.event();
        }
    });
    _0x6968a1.run();
});
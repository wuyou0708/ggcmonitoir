//(document, window, jQuery)
$(function (document, window, $) {
    var _0x4b1f34 = $('#userInfoForm');
    App.extend({
        handleAction: function () {
            var _0x5277fa = this,
                _0x4ccfdf = $('.site-action').actionBtn().data('actionBtn'),
                _0x5e4279 = $('.dataTable');
            _0x5e4279.asSelectable($.po('selectable', $(this).data()));
            $('.site-action-toggle').on('click', function (_0x301e69) {
                _0x5277fa.currentRow = undefined;
                _0x5277fa.getAuth();
                _0x4b1f34.modal('show');
                _0x301e69.stopPropagation();
            });
            _0x4b1f34.modal({
                show: ![],
                pageHeight: 0x1e0,
                page: $.ctx + '/system/user/_user-info'
            }).on('shown.bs.modal', function () {
                var _0x3b2718 = $(this).find('iframe').prop('contentWindow').userModal;
                _0x3b2718.authView(_0x5277fa.authData, {
                    $currentRow: _0x5277fa.$item,
                    table: _0x5277fa.table,
                    $el: _0x4b1f34
                });
                if (typeof _0x5277fa.currentRow !== 'undefined') {
                    _0x3b2718.editUser(_0x5277fa.currentUser, _0x5277fa.currentRow);
                } else {
                    _0x3b2718.addUser();
                }
            });
            $(document).on('click', '[data-action="delete"]', function () {
                var _0x390d96 = $('#user_tables').find('tbody > tr'),
                    _0x521cc3 = [];
                parent.layer.confirm('您确定要删除所选用户吗？', function (_0x1c5ab7) {
                    _0x390d96.each(function () {
                        if ($(this).find(':checkbox').is(':checked')) {
                            _0x521cc3.push(_0x5277fa.table.row($(this)).data().userId);
                        }
                    });
                    $.ajax({
                        url: $.ctx + '/user/delete',
                        type: 'POST',
                        data: {
                            userId: _0x521cc3
                        },
                        traditional: !![],
                        dataType: 'JSON',
                        success: function (_0x3d9fc0) {
                            if (_0x3d9fc0.success) {
                                _0x390d96.each(function () {
                                    if ($(this).find(':checkbox').is(':checked')) {
                                        _0x5277fa.table.row($(this)).remove().draw(![]);
                                    }
                                });
                                toastr.success('删除成功！');
                                parent.layer.close(_0x1c5ab7);
                                _0x4ccfdf.hide();
                            } else {
                                toastr.error(_0x3d9fc0.msg);
                            }
                        }, 
                        error: function() {
                            toastr.error('服务器异常，请稍后再试！');
                        }
                    });
                }, function () {
                    _0x4ccfdf.hide();
                });
            });
            $(document).on('click', '[data-action="move"]', '.site-action', function () {
                var _0x46d565 = $('#user_tables').find('tbody > tr'),
                    _0x49b3df = [];
                parent.layer.confirm('你确定要禁用所选用户吗？', function (_0x3a4720) {
                    _0x46d565.each(function () {
                        if ($(this).find(':checkbox').is(':checked')) {
                            _0x49b3df.push(_0x5277fa.table.row($(this)).data().userId);
                        }
                    });
                    $.ajax({
                        url: $.ctx + '/user/forbid',
                        type: 'POST',
                        data: {
                            userId: _0x49b3df
                        },
                        traditional: !![],
                        dataType: 'JSON',
                        success: function (_0x51069d) {
                            if (_0x51069d.success) {
                                _0x46d565.each(function () {
                                    if ($(this).find(':checkbox').is(':checked')) {
                                        $(this).addClass('disabled');
                                        _0x5277fa.table.row($(this)).data().state = 'FORBIDDEN';
                                    }
                                });
                                toastr.success('已禁用选中用户！');
                                parent.layer.close(_0x3a4720);
                                _0x4ccfdf.hide();
                            } else {
                                toastr.error(_0x51069d.msg);
                            }
                        }, 
                        error: function() {
                            toastr.error('服务器异常，请稍后再试！');
                        }
                    });
                }, function () {
                    _0x4ccfdf.hide();
                });
            });
            $(document).on('asSelectable::change', '.dataTable', function (_0x523e68, _0x3de569, _0x319b95) {
                if (_0x319b95) {
                    _0x4ccfdf.show();
                } else {
                    _0x4ccfdf.hide();
                }
            });
        }, 
        handleListItem: function() {
            var _0x2154f6 = this;
            $(document).on('click', '[data-tag="list-delete"]', function (_0x234f92) {
                var _0x51712a = $(this).closest('div.list-group-item'),
                    _0x25f1ab = _0x51712a.attr('data-user'),
                    _0xf3301a = _0x51712a.attr('data-id');
                parent.layer.confirm('您确定要删除该角色吗？', function (_0x39563f) {
                    $.ajax({
                        url: $.ctx + '/role/delete?roleId=' + _0xf3301a,
                        type: 'POST',
                        dataType: 'JSON',
                        success: function (_0xbbfaa0) {
                            var _0xbb0126, _0x4c3711, _0x3d027a = _0x2154f6.currentRole;
                            if (_0xbbfaa0.success) {
                                _0xbb0126 = _0x51712a.next('.list-group-item');
                                _0x4c3711 = _0x51712a.prev('.list-group-item');
                                _0x2154f6.allUsers -= _0x25f1ab;
                                $('[data-allUsers]').attr('data-allUsers', _0x2154f6.allUsers).text(_0x2154f6.allUsers);
                                if (_0xbb0126.length) {
                                    _0x3d027a.call(_0x2154f6, _0xbb0126);
                                } else if (_0x4c3711.length) {
                                    _0x3d027a.call(_0x2154f6, _0x4c3711);
                                } else {
                                    _0x3d027a.call(_0x2154f6, $('#allUsers'));
                                }
                                _0x51712a.remove();
                                toastr.success('角色删除成功！');
                                parent.layer.close(_0x39563f);
                            } else {
                                toastr.error(_0xbbfaa0.msg);
                            }
                        }, 
                        error: function() {
                            toastr.error('服务器异常，请稍后再试！');
                        }
                    });
                });
                _0x234f92.stopPropagation();
            });
            $(document).on('click', '.page-aside-inner .page-aside-section:not(.hidden-xs) .list-group-item', function () {
                _0x2154f6.currentRole($(this));
            });
        }, 
        handleTable: function() {
            var _0x46af56 = this;
            this.table = $('.dataTable').DataTable($.po('dataTable', {
                dom: '<"row"<"col-xs-6"<"hidden-xs"B>><"col-xs-6"f>><"row"<"col-xs-12"tr>><"row"<"col-sm-5"i><"col-sm-7"p>>',
                processing: !![],
                autoWidth: ![],
                ajax: $.ctx + '/role/user',
                rowId: 'userId',
                buttons: {
                    dom: {
                        container: {
                            className: 'btn-group btn-group-sm'
                        },
                        button: {
                            className: 'btn btn-default btn-outline'
                        }
                    },
                    buttons: [{
                        extend: 'copy',
                        text: '拷贝'
                    }, {
                            extend: 'excel',
                            text: '导出 Excel'
                    }, {
                            extend: 'csv',
                            text: '导出 CSV'
                    }, {
                            extend: 'print',
                            text: '打印'
                    }]
                },
                columns: [{
                    render: function () {
                        var _0x1039c = '<span class="checkbox-custom checkbox-primary">' + '<input type="checkbox" class="contacts-checkbox selectable-item">' + '<label></label></span>';
                        return _0x1039c;
                    }
                }, {
                        data: 'loginName'
                }, {
                        data: 'createTime'
                }, {
                    data: 'lastLoginTime'
                }, {
                    data: 'loginCount'
                }, {
                    data: 'lastLoginIp'
                }, {
                        render: function () {
                        var _0x1b741d = '<button type="button" class="btn btn-sm btn-icon btn-pure btn-default"' + ' data-toggle="edit"><i class="icon wb-edit" aria-hidden="true"></i></button>';
                        return _0x1b741d;
                    }
                }],
                rowCallback: function (_0x5d8a5f, _0x42a662) {
                    if (_0x42a662.state === 'FORBIDDEN') {
                        $(_0x5d8a5f).addClass('disabled');
                    }
                    if (_0x42a662.userId === _0x46af56.currentUser) {
                        $(_0x5d8a5f).find('input:checkbox').prop('disabled', !![]);
                    }
                }
            }));
        }, 
        handleEdit: function() {
            var _0x2457aa = this;
            $(document).on('click', '.page-users button[data-toggle=edit]', function () {
                var _0x251b65 = $(this).closest('tr'),
                    _0x5a6cec = _0x251b65.prev();
                if (_0x251b65.hasClass('child') && _0x5a6cec.hasClass('parent')) {
                    _0x251b65 = _0x5a6cec;
                }
                _0x2457aa.$item = _0x251b65;
                _0x2457aa.currentRow = _0x2457aa.table.row(_0x251b65).data();
                _0x2457aa.getAuth();
                _0x4b1f34.modal('show');
            });
            $(document).on('click', '.btn-edit, #addRoleToggle', function (_0x4d1e5c) {
                var _0x3f2430 = $(this);
                _0x2457aa.$currentRole = _0x3f2430.closest('div.list-group-item');
                _0x2457aa.roleInfo = {
                    'id': _0x3f2430.parents('div.list-group-item').attr('data-id'),
                    'name': _0x3f2430.parent().prev('span.list-text').text()
                };
                _0x4d1e5c.stopPropagation();
            });
            $('#roleForm').on('shown.bs.modal', function () {
                var _0x21a3df = $(this),
                    _0x44e6f8 = _0x21a3df.find('iframe').prop('contentWindow').roleModal;
                _0x44e6f8.$roleForm = _0x21a3df;
                _0x44e6f8.roleInfo(_0x2457aa.roleInfo);
            }).on('hide.bs.modal', function () {
                var _0x797428 = $(this).find('iframe').prop('contentWindow').roleModal,
                    _0x28b3c1 = _0x797428.storeData,
                    _0x8030a9, _0x426fbe = $('.role-contents');
                if (!_0x28b3c1) {
                    return;
                }
                _0x8030a9 = template('roleTpl', _0x28b3c1);
                if (!_0x2457aa.roleInfo.id) {
                    _0x426fbe.append(_0x8030a9);
                } else {
                    _0x2457aa.$currentRole.find('span.list-text').text(_0x28b3c1.role.name);
                }
            });
        }, 
        getAuth: function() {
            var _0x515d96 = this,
                _0x15ef11 = _0x515d96.currentRow,
                _0x3e1753 = typeof _0x15ef11 === 'undefined' ? -0x1 : _0x15ef11.userId;
            $.ajax({
                url: $.ctx + '/user/role?userId=' + _0x3e1753,
                dataType: 'JSON',
                success: function (_0x9b5af5) {
                    if (_0x9b5af5.success) {
                        _0x515d96.authData = _0x9b5af5;
                    } else {
                        toastr.error('出错了，请重试！');
                    }
                }, 
                error: function() {
                    toastr.error('服务器异常，请稍后再试！');
                }
            });
        }, 
        currentRole: function(_0x196bf8) {
            var _0x5f53aa = $('.page-aside-inner'),
                _0x3c01bd = _0x196bf8.attr('data-id'),
                _0x220ab6 = $.ctx + (typeof _0x3c01bd === 'undefined' ? '/role/user' : '/role/user?roleId=' + _0x3c01bd);
            if (!_0x196bf8.is('.active')) {
                _0x5f53aa.find('.list-group-item').removeClass('active');
                _0x196bf8.addClass('active');
                this.table.ajax.url(_0x220ab6).load();
            }
        }, 
        run: function(_0x4e174c) {
            this.currentUser = $('#admui-signOut', $.parentFrame).data('user');
            this.allUsers = $('[data-allUsers]').attr('data-allUsers');
            this.handleTable();
            this.handleAction();
            this.handleListItem();
            this.handleEdit();
            _0x4e174c();
        }
    });
    App.run();
});
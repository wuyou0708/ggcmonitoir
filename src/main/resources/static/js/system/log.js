//(document, window, jQuery)
$(function () {
    var _0x2c66c4, _0x4437bf, _0x28a014 = $('#filter-date');
    var _0x155c4e = function () {
        return $('.dataTable').DataTable($.po('dataTable', {
            autoWidth: ![],
            processing: !![],
            serverSide: !![],
            searching: ![],
            pagingType: 'simple_numbers',
            columns: [{
                data: 'url'
            }, {
                    data: 'type'
            }, {
                    data: 'params'
            }, {
                    data: 'user',
                    render: function (_0x5e99e7) {
                    return _0x5e99e7 === null ? null : _0x5e99e7.loginName;
                }
            }, {
                    data: 'userIp'
            }, {
                    data: 'logTime'
            }],
            ajax: function (_0x420afe, _0x41e5a2) {
                var _0x28bb94, _0x35017f, _0x5d06bb, _0x5da390 = -0x1;
                if (_0x420afe.order.length !== 0x0) {
                    _0x35017f = _0x420afe.order[0x0].column;
                    _0x5d06bb = _0x420afe.order[0x0].dir;
                } else {
                    _0x35017f = _0x5d06bb = '';
                }
                _0x28bb94 = 'start=' + _0x420afe.start + '&limit=' + _0x420afe.length + '&column=' + _0x35017f + '&dir=' + _0x5d06bb;
                if (_0x4437bf) {
                    _0x28bb94 += '&' + _0x4437bf;
                }
                if ($('#accountLog').length > 0x0) {
                    _0x5da390 = $('#admui-signOut').data('user');
                    _0x28bb94 += '&user.userId=' + _0x5da390;
                }
                $.ajax({
                    url: $.ctx + '/log/query',
                    cache: ![],
                    data: _0x28bb94,
                    dataType: 'JSON',
                    success: function (_0x201122) {
                        var _0x3d89cb = null;
                        if (_0x201122.success) {
                            _0x3d89cb = {
                                recordsTotal: _0x201122.total,
                                recordsFiltered: _0x201122.total,
                                data: _0x201122.data
                            };
                            _0x41e5a2(_0x3d89cb);
                        } else {
                            toastr.error('出错了，请重试！');
                        }
                    }, 
                    error: function () {
                        toastr.error('服务器异常，请稍后再试！');
                    }
                });
            }
        }));
    };
    if (!_0x28a014.length) {
        $('a[href="#log"]').on('shown.bs.tab', function () {
            if (!_0x2c66c4) {
                _0x2c66c4 = _0x155c4e();
            }
        });
    } else {
        _0x2c66c4 = _0x155c4e();
        _0x28a014.daterangepicker($.po('daterangepicker', {
            'maxDate': new Date(),
            'ranges': {
                '今天': [moment(), moment()],
                '昨天': [moment().subtract(0x1, 'days'), moment().subtract(0x1, 'days')],
                '最近7天': [moment().subtract(0x6, 'days'), moment()],
                '最近30天': [moment().subtract(0x1d, 'days'), moment()],
                '本月': [moment().startOf('month'), moment().endOf('month')],
                '上月': [moment().subtract(0x1, 'month').startOf('month'), moment().subtract(0x1, 'month').endOf('month')]
            }
        }));
        $(document).on('submit', '#logForm', function () {
            var _0x1194d0 = _0x28a014.val(),
                _0x5061f1;
            if (_0x1194d0 !== '') {
                _0x5061f1 = _0x1194d0.indexOf('至');
                $('input[name="startDate"]').val($.trim(_0x1194d0.substring(0x0, _0x5061f1)) + ' 00:00:00');
                $('input[name="endDate"]').val($.trim(_0x1194d0.substring(_0x5061f1 + 0x1)) + ' 23:59:59');
            }
            _0x4437bf = $(this).serialize();
            _0x2c66c4.ajax.reload();
            return ![];
        });
        $(document).on('click', '.date-close', function () {
            _0x28a014.val('');
            $('input[name="startDate"]').val('');
            $('input[name="endDate"]').val('');
        });
    }
});
//(document, window, jQuery)
$(function () {

    App.extend({
        'handleFullcalendar': function () {
            var _0x393f45 = [{
                'title': '每天',
                'start': '2016-10-01'
            }, {
                'title': '长事件',
                'start': '2016-10-07',
                'end': '2016-10-10',
                'backgroundColor': $.colors('cyan', 0x258),
                'borderColor': $.colors('cyan', 0x258)
            }, {
                'id': 0x3e7,
                'title': '重复事件',
                'start': '2016-10-09T16:00:00',
                'backgroundColor': $.colors('red', 0x258),
                'borderColor': $.colors('red', 0x258)
            }, {
                'title': '会议',
                'start': '2016-10-11',
                'end': '2016-10-13'
            }, {
                'title': '开会',
                'start': '2016-10-12T10:30:00',
                'end': '2016-10-12T12:30:00'
            }, {
                'title': '午餐',
                'start': '2016-10-12T12:00:00'
            }, {
                'title': '开会',
                'start': '2016-10-12T14:30:00'
            }, {
                'title': '休息',
                'start': '2016-10-12T17:30:00'
            }, {
                'title': '活动',
                'start': '2016-10-12T20:00:00'
            }, {
                'title': '生日会',
                'start': '2016-10-13T07:00:00'
            }];
            var _0x5b6d75 = $('.site-action').actionBtn().data('actionBtn');
            var _0x3040be = {
                'header': {
                    'left': null,
                    'center': 'prev,title,next',
                    'right': 'month,agendaWeek,agendaDay'
                },
                'defaultDate': '2016-10-12',
                'selectable': !![],
                'selectHelper': !![],
                'select': function () {
                    $('#addNewEvent').modal('show');
                }, 'editable': !![],
                'eventLimit': !![],
                'windowResize': function (_0x29a42d) {
                    var _0x86c262 = $(window).outerWidth();
                    var _0x5c0ba0 = $.extend({}, _0x3040be);
                    _0x5c0ba0.events = _0x29a42d.calendar.getEventCache();
                    _0x5c0ba0.aspectRatio = _0x86c262 < 0x29b ? 0.5 : 1.35;
                    $('#calendar').fullCalendar('destroy');
                    $('#calendar').fullCalendar(_0x5c0ba0);
                }, 'eventClick': function (_0xe1ecd0) {
                    $('#editNewEvent').modal('show').one('shown.bs.modal', function () {
                        $(this).find('iframe').prop('contentWindow').calendarEvent.shownModal(_0xe1ecd0);
                    }).one('hide.bs.modal', function () {
                        $(this).find('iframe').prop('contentWindow').calendarEvent.hidenModal(_0xe1ecd0, function (_0xf24c11) {
                            $('#calendar').fullCalendar('updateEvent', _0xf24c11);
                        });
                    });
                }, 'eventDragStart': function () {
                    _0x5b6d75.show();
                }, 'eventDragStop': function () {
                    _0x5b6d75.hide();
                }, 'events': _0x393f45,
                'droppable': !![]
            };
            var _0x5c0a22;
            var _0x5b2823 = $.extend({}, _0x3040be);
            _0x5b2823.aspectRatio = 0.5;
            _0x5c0a22 = $(window).outerWidth() < 0x29b ? _0x5b2823 : _0x3040be;
            $('#calendar').fullCalendar(_0x5c0a22);
        }, 'handleEventList': function () {
            $('#addNewEventBtn').on('click', function () {
                $('#addNewEvent').modal('show');
            });
            $('.calendar-list .calendar-event').each(function () {
                var _0xc18164 = $(this),
                    _0x4285ee = _0xc18164.data('color').split('-');
                _0xc18164.data('event', {
                    'title': _0xc18164.data('title'),
                    'stick': _0xc18164.data('stick'),
                    'backgroundColor': $.colors(_0x4285ee[0x0], _0x4285ee[0x1]),
                    'borderColor': $.colors(_0x4285ee[0x0], _0x4285ee[0x1])
                });
                _0xc18164.draggable({
                    'zIndex': 0x3e7,
                    'revert': !![],
                    'revertDuration': 0x0,
                    'helper': function () {
                        return '<a class="fc-day-grid-event fc-event fc-start fc-end" style="background-color:' + $.colors(_0x4285ee[0x0], _0x4285ee[0x1]) + ';border-color:' + $.colors(_0x4285ee[0x0], _0x4285ee[0x1]) + '">' + '<div class="fc-content">' + '<span class="fc-title">' + _0xc18164.data('title') + '</span>' + '</div>' + '</a>';
                    }
                });
            });
        }, 'handleListItem': function () {
            $('.site-action').on('click', function (_0x3aae35) {
                $('#addNewCalendar').modal('show');
                _0x3aae35.stopPropagation();
            });
            $(document).on('click', '[data-tag=list-delete]', function () {
                parent.layer.alert('你想删除这个日历吗?', {
                    'icon': 0x4
                }, function (_0x141d05) {
                    parent.layer.close(_0x141d05);
                });
            });
        }, 'handleAction': function () { }, 'run': function (_0xe4f63b) {
            $('#addNewCalendar').modal({
                'show': ![],
                'pageHeight': 0x154,
                'page': $.ctx + '/pages/team/calendar/_add-calendar'
            });
            $('#addNewEvent').modal({
                'show': ![],
                'pageHeight': 0x230,
                'page': $.ctx + '/pages/team/calendar/_add-event'
            });
            $('#editNewEvent').modal({
                'show': ![],
                'pageHeight': 0x230,
                'page': $.ctx + '/pages/team/calendar/_edit-event'
            });
            this.handleFullcalendar();
            this.handleEventList();
            this.handleListItem();
            this.handleAction();
            _0xe4f63b();
        }
    });
    App.run();
});
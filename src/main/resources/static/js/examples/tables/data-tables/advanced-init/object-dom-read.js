$(function () {

    $('#dataTableExample').DataTable($.po('dataTable', {
        'columns': [{
            'data': '姓名'
        }, {
            'data': '职位'
        }, {
            'data': '工作地点'
        }, {
            'data': '年龄'
        }, {
            'data': '入职时间'
        }, {
            'data': '年薪'
        }]
    }));
});
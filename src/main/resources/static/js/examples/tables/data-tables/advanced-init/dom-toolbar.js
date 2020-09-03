$(function () {

    $('#dataTableExample').dataTable($.po('dataTable', {
        'dom': '<"dt-dom-toolbar">frtip'
    }));
    $('div.dt-dom-toolbar').html('<b class="text-danger">自定义文字、图片等等</b>');
});
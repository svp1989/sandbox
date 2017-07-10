/**
 * класс создания excel из html table
 * @type object
 *         tableId: string, - id таблицы из которой берем данные
 *         fileName: string, - имя под которым файл будет загружен
 *         download: download, - загружает файл
 *         createElement: createElement   - возвращает элемент для загрузки файла
 */
var htmlToExcel = {

    tableId: '',
    fileName: '',
    charset: 'UTF-8',

    //Загружаем файл
    download: function (tableId, fileName) {
        this.fileName = fileName;
        this.tableId = tableId;
        this.createElement().click();
    },

    //Создаем элемент
    createElement: function () {
        var a = document.createElement('a'),
            dataType = 'data:application/vnd.ms-excel;base64,',
            tableHtml = '<html><head><meta http-equiv="content-type" content="text/html; charset='+this.charset+'" /></head>' +
                '<body>' + document.getElementById(this.tableId).outerHTML + '</body>' +
                '</html>';

        a.href = dataType + this.base64(tableHtml);
        a.download = this.fileName;

        return a;
    },

    //base64
    base64: function (s) {
        return window.btoa(unescape(encodeURIComponent(s)));
    }

};

# sandbox
**js/htmlToExcel.js**  - class for export html table date on page to excel files. <br>
      **example use :**
        ```
        $(document).on('click', '#downloadExcel', function () {
            htmlToExcel.download('unMarkListExcelDownloader', 'exportListClients.xlsx');
        });
        ```

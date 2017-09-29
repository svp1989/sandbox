# sandbox
**js/htmlToExcel.js**  - class for export html table data on page to excel files. <br>
      **example use :**        
```javascript
        $(document).on('click', '#downloadExcel', function () {
            htmlToExcel.download('idTable', 'fileName.xlsx');
        });
        
```
**or ES6:**
```javascript
     downloadExcel.onclick = () => {
          htmlToExcel.download('idTable', 'fileName.xlsx');
     }
```

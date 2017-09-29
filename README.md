# sandbox
### js/htmlToExcel.js
_class for export html table data on page to excel files._ <br>
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
### js/dynamicSearch.js
_class for dynamic search animation_ <br>
**example html**
```html
                   <input type="text" id="search">
                   <ul id="list">
                       <li>Test 1</li>
                       <li>Test 2</li>
                   </ul>
```
**example use ES6:**
```javascript
     dynamicSearch.idSearch = 'search';
     dynamicSearch.idList = 'list';
     dynamicSearch.start();
```

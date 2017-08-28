/**
         * @example:
         *          <input type="text" id="search">
         *          <ul id="list">
         *              <li>Test 1</li>
         *              <li>Test 2</li>
         *          </ul>
         *
         * @start :
         *          dynamicSearch.idSearch = 'search';
         *          dynamicSearch.idList = 'list';
         *          dynamicSearch.start();
         *
         */
        let dynamicSearch = {
            idSearch:null,
            idList:null,
            start: ()=>{
                let lists = document.getElementById(dynamicSearch.idList).children;
                let idSearch = document.getElementById(dynamicSearch.idSearch);
                idSearch.onkeyup = () => {
                    for (let i = 0; i < lists.length; i++) {
                        let search = idSearch.value.toLowerCase();
                        if (lists[i].innerText.toLowerCase().indexOf(search) === -1) {
                            lists[i].style.display = 'none'
                        } else {
                            lists[i].style.display = 'block'
                        }
                    }
                };
            }
        };

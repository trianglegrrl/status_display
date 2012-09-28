if (top.HlpSys === undefined) {
    top.HlpSys = new Object();
}

top.HlpSys.search = function(){
    var self = null;
    var workingDocument = null;

    var searchState = new CookieWorker(top.document, "autodesk_search_state", 24000);

    function saveState(config) {
        searchState.store(config);
    }

    function restoreState(config) {
        searchState.load(config);
        //convert string values into boolean
        config.highlightEnable = (!(config.highlightEnable === "false" || config.highlightEnable === false));
        config.wholeWords = (config.wholeWords === "true" || config.wholeWords === true);
        config.caseSensitive = (config.caseSensitive === "true" || config.caseSensitive === true);
    }

    function prepareQuery(query) {
        var regexp = /(\x20\x20)/g;
        while (query.match(regexp)) query = query.replace(regexp, "\x20");
        regexp = /(^\x20)|(\x20$)/g;
        while (query.match(regexp)) query = query.replace(regexp, "");

        query = query.replace(/\\/g, "\\\\");
        query = query.replace(/[\[\^\$\.\|\+\(\)`~!#%&\-=\]{};'"<>,]/g, " ");
        query = query.replace(/\*/g, "[^\\s]*");
        query = query.replace(/\?/g, ".");

        return query;
    };

    function filterQuery(queryArr, buffer, data) {
        var isStopWord = false;
        var isSameWord = false;
        var resultArr = new Array();
        var filteredStopWords = "";
        var StopWords = data.stopWordsList;

        for (var i = 0; i < queryArr.length; i++) {
            isStopWord = false;
            isSameWord = false;
            if (StopWords[queryArr[i].toLowerCase()]) {
                isStopWord = true;
            }
            for (var j = 0; j < i; j++) {
                if (queryArr[j] == queryArr[i]) {
                    isSameWord = true;
                    break;
                }
            }
            if (!isStopWord && !isSameWord) {
                resultArr[resultArr.length] = queryArr[i];
            } else {
                filteredStopWords += "\"" + queryArr[i] + "\" ";
            }
        }

        buffer.filteredStopWords = filteredStopWords;
        buffer.querryWordList = resultArr;
        return resultArr;
    };

    function generateRegExpArray(queryArr, stemmedArr, config) {
        var resultArray = new Array(queryArr.length);
        var caseSensitive = config.caseSensitive;
        var wholeWords = config.wholeWords;
        var parameters = "";
        for (var i = 0; i<queryArr.length; i++) {
            if (caseSensitive) {
                parameters = "";
            } else {
                parameters = "i";
            }
            if (wholeWords)
                resultArray[i] = new RegExp('\\b' + queryArr[i] + '\\b', parameters);
            else
                resultArray[i] = new RegExp('('+queryArr[i]+')|('+stemmedArr[i]+')', parameters);
        }

        return resultArray;
    };

    function RenderBookList(searchProviders) {
        if (workingDocument !== null) {
            var bookList = workingDocument.getElementById("collapsible_search_books");

            if (bookList) {
                for (var i in searchProviders) {
                    var searchProvider = searchProviders[i];
                    var bookElement = workingDocument.createElement("div");
                    var bookSwitch = workingDocument.createElement("input");
                    bookSwitch.setAttribute("id", "book" + searchProvider.getName());
                    bookSwitch.setAttribute("type", "checkbox");
                    if (searchProvider.isEnabled()) {
                        bookSwitch.setAttribute("checked", "true");
                    }
                    bookSwitch.setAttribute("onClick", "top.HlpSys.search.data.searchProviders['"+i+"'].switchState()");
                    bookElement.appendChild(bookSwitch);

                    var text = workingDocument.createTextNode(searchProvider.getFullName());
                    bookElement.appendChild(text);
                    bookList.appendChild(bookElement);
                }
            }
        }
    }

    return {
        init : function(doc) {
            self = this;
            workingDocument = doc;
            restoreState(this.config);
            RenderBookList(this.data.searchProviders);
        },

        restoreState: function(doc) {
            var searchForm = doc.searchForm;

            var searchMethodState = this.config.searchMethod;
            for (var i = 0; i < searchForm.searchMethod.length; i++) {
                var radioElement = searchForm.searchMethod[i];
                if (radioElement.value == searchMethodState) {
                    radioElement.checked = true;
                }
            }

            var highlightCheckBox = searchForm.highlightSwitch;
            if (highlightCheckBox) {
                var highlightState = this.config.highlightEnable;
                highlightCheckBox.checked = highlightState;
            }

            var caseSensitiveSwitch = searchForm.caseSensitiveSwitch;
            if (caseSensitiveSwitch) {
                var caseSensitiveState = this.config.caseSensitive;
                caseSensitiveSwitch.checked = caseSensitiveState;
            }

            var wholeWordsSwitch = searchForm.wholeWordsSwitch;
            if (wholeWordsSwitch) {
                var wholeWordsState = this.config.wholeWords;
                wholeWordsSwitch.checked = wholeWordsState;
            }

            var searchTermField = searchForm.searchData;
            if (searchTermField) {
                var searchTermState = this.config.searchTerm;
                searchTermField.value = searchTermState;
            }
        },

        config:{
            workingDocument : null,
			caseSensitive: false,
			wholeWords: false,
			searchMethod: 'and',
			highlightEnable: true,
            searchTerm: "",

            setSearchMethod : function(option) {
                this.searchMethod = option;
                saveState(this);
            },

            setWholeWords : function(option) {
                if (typeof option == "boolean") {
                    this.wholeWords = option;
                } else {
                    this.wholeWords = !this.wholeWords;
                }
                saveState(this);
            },

            setHighlighting : function(option) {
                if (typeof option == "boolean") {
                    this.highlightEnable = option;
                } else {
                    this.highlightEnable = !this.highlightEnable;
                }
                saveState(this);
            },

            setCaseSensitive : function(option) {
                if (typeof option == "boolean") {
                    this.caseSensitive = option;
                } else {
                    this.caseSensitive = !this.caseSensitive;
                }
                saveState(this);
            }
		},

		data:{
			stopWordsList: new Array(),
            searchProviders: new Array(),

            registerSearchProvider : function(provider) {
                this.searchProviders[provider.getName()] = provider;
            },

            registerSearchDataProvider : function(name, dataProvider) {
                name = name != "" ? name : "default";
                var searchProvider = this.getSearchProvider(name);
                if (searchProvider) {
                    searchProvider.registerDataProvider(dataProvider);
                }
            },

            getSearchProvider : function(name) {
                name = name != "" ? name : "default";
                return this.searchProviders[name];
            }
		},

		buffer:{
			filteredStopWords:"",
			querryWordList: new Array()
		},

        SearchString: function(query) {
            //    document.getElementById("searchList").length = 0;
            var preQuery = prepareQuery(query);
            var preQueryArr = preQuery.split(" ");
            var queryArr = filterQuery(preQueryArr, this.buffer, this.data);
            var stemmedQueryArr = this.SearchStemmer.stem(queryArr);
            var regexpArr = generateRegExpArray(queryArr, stemmedQueryArr, this.config);

            var results = new this.ResultList();
            for (var i in this.data.searchProviders) {
                var searchProvider = this.data.searchProviders[i];
                if (searchProvider.isEnabled()) {
                    var resultsFromBook = searchProvider.SearchString(regexpArr, queryArr, this.config.searchMethod);
                    results.mergeResults(resultsFromBook);
                }
            }

            results.sortResults();
            return results;
        },

        doSearch : function(query, searchFrame) {
            this.ui.clearWarnings();
            this.config.searchTerm = query;
            saveState(this.config);
            var results = this.SearchString(query);
            if (this.buffer.filteredStopWords != "") {
                this.ui.showWarning("filtered.stopwords", this.buffer.filteredStopWords);
            }
            this.ui.displaySearchResult(results, searchFrame, this.config);
        },

        SearchResult: function(href, title, rank, bookName, description, ancestry) {
            return {
                href : href,
                title : title,
                rank: rank,
                bookName: bookName,
                description: description,
                ancestry: ancestry
            };
        },

        ResultList : function () {
            var list = new Array();
            var searchQuery = "";

            function quicksort(m, n, desc) {
                if (n <= m + 1) return;
                if ((n - m) == 2) {
                    if (compare(getElement(n - 1), getElement(m), desc)) exchange(n - 1, m);
                    return;
                }
                var i = m + 1;
                var j = n - 1;
                if (compare(getElement(m), getElement(i), desc)) exchange(i, m);
                if (compare(getElement(j), getElement(m), desc)) exchange(m, j);
                if (compare(getElement(m), getElement(i), desc)) exchange(i, m);
                var pivot = getElement(m);
                while (true) {
                    j--;
                    while (compare(pivot, getElement(j), desc)) j--;
                    i++;
                    while (compare(getElement(i), pivot, desc)) i++;
                    if (j <= i) break;
                    exchange(i, j);
                }
                exchange(m, j);
                if ((j - m) < (n - j)) {
                    quicksort(m, j, desc);
                    quicksort(j + 1, n, desc);
                } else {
                    quicksort(j + 1, n, desc);
                    quicksort(m, j, desc);
                }
            }

            ;

            function getElement(i) {
                return list[i].rank;
            }

            ;

            function compare(val1, val2, desc) {
                return (desc) ? val1 > val2 : val1 < val2;
            }

            ;

            function exchange(i, j) {
                // exchange adjacent
                // var tResult = new Array(4);
                var exchangeBuffer = list[i];
                list[i] = list[j];
                list[j] = exchangeBuffer;
            }

            ;

            return {
                addResult : function(searchResult) {
                    list[list.length] = searchResult;
                },

                sortResults : function(order) {
                    if (order === undefined) {
                        order = true;
                    }
                    quicksort(0, list.length, order);
                },

                getResults : function() {
                    return list;
                },

                addSearchQuery : function(query) {
                    searchQuery = query;
                },

                getSearchQuery : function() {
                    return searchQuery;
                },

                mergeResults : function(resultObject) {
                    var results = resultObject.getResults();
                    for (var i = 0; i< results.length; i++) {
                        list[list.length] = results[i];
                    }
                    searchQuery = resultObject.getSearchQuery();
                }
            };
        },

        SearchStemmer : function() {
            var step2list = new Array();
            step2list["ational"]="ate";
            step2list["tional"]="tion";
            step2list["enci"]="ence";
            step2list["anci"]="ance";
            step2list["izer"]="ize";
            step2list["bli"]="ble";
            step2list["alli"]="al";
            step2list["entli"]="ent";
            step2list["eli"]="e";
            step2list["ousli"]="ous";
            step2list["ization"]="ize";
            step2list["ation"]="ate";
            step2list["ator"]="ate";
            step2list["alism"]="al";
            step2list["iveness"]="ive";
            step2list["fulness"]="ful";
            step2list["ousness"]="ous";
            step2list["aliti"]="al";
            step2list["iviti"]="ive";
            step2list["biliti"]="ble";
            step2list["logi"]="log";

            var step3list = new Array();
            step3list["icate"]="ic";
            step3list["ative"]="";
            step3list["alize"]="al";
            step3list["iciti"]="ic";
            step3list["ical"]="ic";
            step3list["ful"]="";
            step3list["ness"]="";

            var c = "[^aeiou]";          // consonant
            var v = "[aeiouy]";          // vowel
            var C = c + "[^aeiouy]*";    // consonant sequence
            var V = v + "[aeiou]*";      // vowel sequence

            var mgr0 = "^(" + C + ")?" + V + C;               // [C]VC... is m>0
            var meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$";  // [C]VC[V] is m=1
            var mgr1 = "^(" + C + ")?" + V + C + V + C;       // [C]VCVC... is m>1
            var s_v   = "^(" + C + ")?" + v;                   // vowel in stem

            function stemWord(w) {
                var stem;
                var suffix;
                var firstch;

                if (w.length < 3) { return w; }

                   var re;
                   var re2;
                   var re3;
                   var re4;

                firstch = w.substr(0,1);
                if (firstch == "y") {
                    w = firstch.toUpperCase() + w.substr(1);
                }

                // Step 1a
                   re = /^(.+?)(ss|i)es$/;
                   re2 = /^(.+?)([^s])s$/;

                   if (re.test(w)) { w = w.replace(re,"$1$2"); }
                   else if (re2.test(w)) {	w = w.replace(re2,"$1$2"); }

                // Step 1b
                re = /^(.+?)eed$/;
                re2 = /^(.+?)(ed|ing)$/;
                if (re.test(w)) {
                    var fp1 = re.exec(w);
                    re = new RegExp(mgr0);
                    if (re.test(fp1[1])) {
                        re = /.$/;
                        w = w.replace(re,"");
                    }
                } else if (re2.test(w)) {
                    var fp2 = re2.exec(w);
                    stem = fp2[1];
                    re2 = new RegExp(s_v);
                    if (re2.test(stem)) {
                        w = stem;
                        re2 = /(at|bl|iz)$/;
                        re3 = new RegExp("([^aeiouylsz])\\1$");
                        re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
                        if (re2.test(w)) {	w = w + "e"; }
                        else if (re3.test(w)) { re = /.$/; w = w.replace(re,""); }
                        else if (re4.test(w)) { w = w + "e"; }
                    }
                }

                // Step 1c
                re = /^(.+?)y$/;
                if (re.test(w)) {
                    var fp3 = re.exec(w);
                    stem = fp3[1];
                    re = new RegExp(s_v);
                    if (re.test(stem)) { w = stem + "i"; }
                }

                // Step 2
                re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
                if (re.test(w)) {
                    var fp4 = re.exec(w);
                    stem = fp4[1];
                    suffix = fp4[2];
                    re = new RegExp(mgr0);
                    if (re.test(stem)) {
                        w = stem + step2list[suffix];
                    }
                }

                // Step 3
                re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
                if (re.test(w)) {
                    var fp5 = re.exec(w);
                    stem = fp5[1];
                    suffix = fp5[2];
                    re = new RegExp(mgr0);
                    if (re.test(stem)) {
                        w = stem + step3list[suffix];
                    }
                }

                // Step 4
                re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
                re2 = /^(.+?)(s|t)(ion)$/;
                if (re.test(w)) {
                    var fp6 = re.exec(w);
                    stem = fp6[1];
                    re = new RegExp(mgr1);
                    if (re.test(stem)) {
                        w = stem;
                    }
                } else if (re2.test(w)) {
                    var fp7 = re2.exec(w);
                    stem = fp7[1] + fp7[2];
                    re2 = new RegExp(mgr1);
                    if (re2.test(stem)) {
                        w = stem;
                    }
                }

                // Step 5
                re = /^(.+?)e$/;
                if (re.test(w)) {
                    var fp8 = re.exec(w);
                    stem = fp8[1];
                    re = new RegExp(mgr1);
                    re2 = new RegExp(meq1);
                    re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
                    if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
                        w = stem;
                    }
                }

                re = /ll$/;
                re2 = new RegExp(mgr1);
                if (re.test(w) && re2.test(w)) {
                    re = /.$/;
                    w = w.replace(re,"");
                }

                // and turn initial Y back to y

                if (firstch == "y") {
                    w = firstch.toLowerCase() + w.substr(1);
                }

                return w;

            }

            return {
                stem : function(words) {
                    if (top.HlpSys.config && top.HlpSys.config.locale == 'en_US' && !top.HlpSys.search.config.wholeWords) {
                        var resultWords = new Array();
                        for (var i = 0; i < words.length; i++) {
                            resultWords[resultWords.length] = stemWord(words[i]);
                        }
                        return resultWords;
                    } else {
                        return words;
                    }
                }
            };
        }(),

        ui : {
            messages : new Array(),
            showedMessages : new Array(),

            //Shows warning from on of predefined messages.
            //@param message - messege type to show in warning block.
            //@param parameters - that should be added to the message
            showWarning : function(message, param) {
                var result_message = "";
                if (!top.HlpSys.search.ui.messages[message]) {
                    return;
                }

                if (top.HlpSys.search.ui.showedMessages[message]) {
                    return;
                }

                switch (message) {
                    case "filtered.stopwords" : {
                        result_message = top.HlpSys.search.ui.messages[message] + param;
                        break;
                    }
                    default: {
                        result_message = top.HlpSys.search.ui.messages[message];
                        break;
                    }
                }

                if (result_message != "") {
                    top.HlpSys.search.ui.showedMessages[message] = true;
                    var warningBlock = workingDocument.getElementById("warningBlock");
                    var warning = workingDocument.createElement("div");
                    warning.setAttribute("class", "warning");

                    var text = workingDocument.createTextNode(result_message);
                    warning.appendChild(text);
                    warningBlock.appendChild(warning);
                }
            },

            //Clear warnings displayed during search
            clearWarnings : function() {
                var warningBlock = workingDocument.getElementById("warningBlock");
                while (warningBlock.hasChildNodes()) {
                    var node = warningBlock.firstChild;
                    warningBlock.removeChild(node);
                }
                top.HlpSys.search.ui.showedMessages = new Array();
            },

            //Update progress bar of search process.
            //Not Implemented
            updateProgress: function() {

            },

            //Displays result of the search.
            //@param results  - ResultList objects that contains all results and search query for highlithing.
            //@param resultsDocument - document which was passed to the function doSearch. Usually we sending document where results should be displayed.
            displaySearchResult : function(resultList, resultsDocument) {

                var results = resultList.getResults();
                var searchQuery = resultList.getSearchQuery();
                var searchList = resultsDocument.getElementById("searchList");
                searchList.length = 0;

                for (var i = 0; i < results.length; i++)
                {
                    var element = resultsDocument.createElement("OPTION");
                    element.text = results[i].rank + ": " + results[i].title;
                    element.value = results[i].href + "?"+searchQuery;
                    try
                    {
                        searchList.add(element, null);
                        // standards compliant
                    }
                    catch(ex)
                    {
                        searchList.add(element);
                        // IE only
                    }
                }

                if (searchList.length == 0) {
                    this.showWarning("no.results");
                }
            },

            viewResult : function(resultsDocument) {
                var searchList = resultsDocument.getElementById("searchList");
                if (searchList.selectedIndex > -1 ) {
                    window.open(searchList.options[searchList.selectedIndex].value, "content");
                }
            }

        }
    };
}();


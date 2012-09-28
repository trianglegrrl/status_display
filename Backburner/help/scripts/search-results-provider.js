function SearchResultsProvider(theName, theFullName) {
    var name = theName != "" ? theName : "default";
    var fullName = theFullName;
    var enabled = true;

    var data = {
        dataProviders : new Array(),
        topicInfoList: new Array()
    };

    var providerState = new CookieWorker(top.document, "autodesk_search_state" + name, 24000);
    loadState();

    function saveState() {
        var state = {enabled: enabled};
        providerState.store(state);
    };

    function loadState() {
        var state = {enabled: enabled};
        providerState.load(state);
        enabled = state.enabled == "false" ? false : true;
    };

    function PrepeareResults(result, query) {
        var results = new top.HlpSys.search.ResultList();
        for (var i in result)
        {
            if (data.topicInfoList[i])
            {
                var info = data.topicInfoList[i];
                var title = info.title;
                var href = info.href;
                var rank = result[i][0];
                var res = new top.HlpSys.search.SearchResult(href, title, rank, fullName, info.description, info.ancestry);
                results.addResult(res);
            }
        }

        var queryString = "";
        for (var j = 0; j < query.length; j++) {
            queryString += query[j];
            if (j < query.length - 1) {
                queryString += "|";
            }
        }
        queryString = "highlighting=" + encodeURIComponent(queryString);
        results.sortResults();
        results.addSearchQuery(queryString);
        return results;
    };

    function getWordOccurences(word) {
        var occurences = new Array();
        for (var i = 0; i < data.dataProviders.length; i++) {
            var dataProvider = data.dataProviders[i];
            SearchResultsProvider.mergeResult(occurences, dataProvider(word));
        }

        return occurences;
    };

    function getSmallestDifference(array1, array2) {
        var min = 32000;
        var stopWord = 1;
        for (var i1 = 0; i1 < array1.length; i1++) {
            for (var i2 = 0; i2 < array2.length; i2++) {
                if ((Math.abs(Math.abs(array1[i1]) - Math.abs(array2[i2])) < min) && (Math.abs(array2[i2]) < Math.abs(array1[i1]))) {
                    min = Math.abs(Math.abs(array1[i1]) - Math.abs(array2[i2]));
                    stopWord = ((array1[i1] < 0) || (Math.abs(array2[i2]) > Math.abs(array1[i1]))) ? -1 : 1;
                }
            }
        }
        if (min == 0) {
            //		alert("SOMETHING Wrong")
        }
        return stopWord * min;
    };

    function compactOccurences(array) {
        array.sort(function (a, b) {return a[0] - b[0];});

        var result = new Array();
        for (var i = 0; i < array.length; i++) {
            var currentEntry = array[i];
            while (array[i+1] && currentEntry[0] == array[i+1][0]) {
                currentEntry[1] += array[i+1][1];
                currentEntry[2] = currentEntry[2].concat(array[i+1][2]);
                i++;
            }
            currentEntry[2].sort(function(a,b) {return a-b;});
            result[result.length] = currentEntry;
        }

        return result;
    };

    return {

        getName : function() {
            return name;
        },

        getFullName : function() {
            return fullName;
        },

        switchState : function() {
            enabled = !enabled;
            saveState();
        },

        isEnabled : function() {
            loadState();
            return enabled;
        },

        registerDataProvider: function(dataProvider) {
            data.dataProviders[data.dataProviders.length] = dataProvider;
        },

        setTopicInfoList: function(infoList) {
            data.topicInfoList = infoList;
        },

        SearchString: function(regexpArr, queryArr, searchMethod) {
            var topicNumber = 0;
            var topicRank = 0;
            var occurences;
            var searchResults = new Array();

            for (var j1 = 0; j1 < regexpArr.length; j1++)
            {
                occurences = getWordOccurences(regexpArr[j1]);
                occurences = compactOccurences(occurences);
                for (i = 0; i < occurences.length; i++) {
                    topicNumber = occurences[i][0];
                    topicRank = occurences[i][1];
                    if (searchResults[topicNumber] == null) {
                        searchResults[topicNumber] = new Array(4);
                        searchResults[topicNumber][0] = topicRank;
                        searchResults[topicNumber][1] = 1;
                        searchResults[topicNumber][2] = occurences[i][2];
                        searchResults[topicNumber][3] = 0;
                    } else {
                        searchResults[topicNumber][0] += topicRank;
                        searchResults[topicNumber][1] += 1;
                        var diff = getSmallestDifference(occurences[i][2], searchResults[topicNumber][2]);
                        searchResults[topicNumber][3] = Math.abs(searchResults[topicNumber][3]) < Math.abs(diff) ? diff : searchResults[topicNumber][3];
                        searchResults[topicNumber][2] = occurences[i][2];
                    }
                }
            }


            var currentResult;
            for (var i in searchResults)
            {
                currentResult = searchResults[i];
                if (searchMethod == 'phrase'){
                    if ((Math.abs(currentResult[3]) > 2) || (currentResult[1] < queryArr.length)) {
                        delete searchResults[i];
                    }
                } else if (searchMethod == 'and') {
                    if (currentResult[1] < queryArr.length) {
                        delete searchResults[i];
                    }
                } else if (searchMethod == 'or') {

                }
            }

            return PrepeareResults(searchResults, queryArr);
        }
    };
}

SearchResultsProvider.mergeResult = function (array1, array2) {
    if (!array1) {
        array1 = new Array();
    } else if (!array2) {
        return array1;
    }

    for (var i3 = 0; i3 < array2.length; i3++)
    {
        var t2 = array1.length;
        array1[t2] = new Array(3);
        array1[t2][0] = array2[i3][0];
        array1[t2][1] = array2[i3][1];
//      array1[t2][2] = new Array(array2[i3][2].length);
        array1[t2][2] = array2[i3][2];
    }
    return array1;
};
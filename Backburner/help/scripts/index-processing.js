if (top.HlpSys === undefined) {
    top.HlpSys = new Object();
}

top.HlpSys.index = {

    data : {
        highlightedIndex : -1,
        highlightedIndexes : new Array(),
        indexesDocument : null
    },

    initialize : function(indexesDocument) {
        this.data.indexesDocument = indexesDocument;
    },

    defineLinkTargets : function(doc) {
        var indexes = doc.getElementsByTagName("a");
        for (var i = 0; i < indexes.length; i++) {
            if (indexes[i].className = "index_link" && indexes[i].target) {
                indexes[i].target = "content";
            }
        }
    },

    highlightIndex : function(searchKey)
    {
        var indexesDocument = this.getIndexesDocument();
        this.UnhighLightAll(indexesDocument);
        this.SearchForPartialMatch(indexesDocument, searchKey);
        this.showNext(indexesDocument);
    },

    getIndexesDocument : function() {
/*
        if (navigator.appName == "Netscape")
        {
            return document.getElementById("indexes").contentDocument;
        }
        else if (navigator.appName == "Microsoft Internet Explorer")
        {
            return document.frames("indexes").document;
        }
        else alert("Unsupported browser !") {
            return null;
        }
*/
        return this.data.indexesDocument;
    },

    UnhighLightAll : function(indexesDocument)
    {
        for (i = 0; i < this.data.highlightedIndexes.length; i++)
        {
            indexesDocument.getElementById(this.data.highlightedIndexes[i]).blur();
            indexesDocument.getElementById(this.data.highlightedIndexes[i]).className = "unhighlighted";
        }
        this.data.highlightedIndexes = new Array();
        this.data.highlightedIndex = -1;
    },

    SearchForPartialMatch : function(indexesDocument, searchKey)
    {
        var links = indexesDocument.links;
        var link;
        var regexpr = new RegExp(searchKey, "i");

        this.data.highlightedIndexes = new Array();
        for (var i = 0; i < links.length; i++)
        {
            link = links[i];
            if (searchKey && link.innerHTML.match(regexpr))
            {
                this.data.highlightedIndexes[this.data.highlightedIndexes.length] = link.id;
                link.className = 'highlighted';
            }
        }
    },

    showNext : function(theIndexesDocument) {
        var indexesDocument = theIndexesDocument != null ? theIndexesDocument : this.getIndexesDocument();
        if (this.data.highlightedIndexes.length > 0) {
            if (this.data.highlightedIndex < (this.data.highlightedIndexes.length - 1)) {
                this.data.highlightedIndex++;
            } else {
                this.data.highlightedIndex = 0;
            }
            indexesDocument.getElementById(this.data.highlightedIndexes[this.data.highlightedIndex]).focus();
            this.OpenHighlightedIndex(indexesDocument, this.data.highlightedIndex);
        }
    },

    OpenHighlightedIndex : function(indexesDocument, indexNumber)
    {
        if (indexNumber > -1 && indexNumber < this.data.highlightedIndexesNum)
        {
            window.open(indexesDocument.getElementById(this.data.highlightedIndexes[indexNumber]).href, "content");
        }
    },

    mouseEvent: function(event, selectedIndexId)
    {
        this.highlightCurrent(selectedIndexId);
        if (event.button != 0) {
            this.data.indexesDocument.getElementById(selectedIndexId).className = "highlighted";
        }
    },

    highlightCurrent : function(selectedIndexId)
    {
        var indexesDocument = this.getIndexesDocument();
        this.UnhighLightAll(indexesDocument);
        this.data.highlightedIndex = 0;
        this.data.highlightedIndexes[this.data.highlightedIndexes.length] = selectedIndexId;
    }






};

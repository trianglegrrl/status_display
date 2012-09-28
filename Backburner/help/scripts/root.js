if (top.HlpSys === undefined) {
    top.HlpSys = new Object();
}

top.HlpSys = {
    config : {
        frame: "Autodesk online help",
        locale: "en_US"
    },

    contextId : {
        data : {
            doc : top.document,
            contextIds : new Array(),
            providers : new Array(),
            includedFiles : new Array(),
            openId : null
        },

        includeFile : function(href) {
            this.data.includedFiles[href] = {};

            var body = this.data.doc.getElementsByTagName("head")[0];
            if (body) {
                var script = this.data.doc.createElement('script');
                script.src = href;
                script.type = 'text/javascript';
                body.appendChild(script);
            }
        },

        openFile : function () {
            if (this.data.openId) {
                var result = this.data.contextIds[this.data.openId];
                if (result) {
                    this.data.openId = null;
                    window.open(result, "content");
                }
            }
        },

        appendData : function(list) {
            for (var i in list) {
                this.data.contextIds[i] = list[i];
            }
            this.openFile();
        },

        registerProvider : function(provider) {
            if (typeof provider == "function") {
                this.data.providers.push(provider);
            }
        },

        resolveContextId : function(id) {
            this.data.openId = id;

            if (this.data.contextIds[id]) {
                setTimeout(this.openFile, 1);
            } else {
                for (var i = 0; i < this.data.providers.length; i++) {
                    var file = this.data.providers[i](id);
                    if (file != null) {
                        if (!this.data.includedFiles[file]) {
                            this.includeFile(file);
                        }
                    }
                }
            }
        }
    },

    hideLoaadingMask : function() {

    },

    parseUrlParameters : function(queryString) {
        var args = new Object();
        var pairs = queryString.split(",");                 // Break at comma
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');          // Look for "name=value"
            if (pos == -1) continue;                  // If not found, skip
            var argname = pairs[i].substring(0, pos);  // Extract the name
            var value = pairs[i].substring(pos + 1);    // Extract the value
            args[argname] = unescape(value);
        }

        return args;
    },

    checkURLParams : function() {
        var args = new Object();
        var query = window.location.search.substring(1);     // Get query string
        var pairs = query.split(",");                 // Break at comma
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');          // Look for "name=value"
            if (pos == -1) continue;                  // If not found, skip
            var argname = pairs[i].substring(0, pos);  // Extract the name
            var value = pairs[i].substring(pos + 1);    // Extract the value
            args[argname] = unescape(value);
        }
        if (args["url"] && args["topicNumber"]) {
            top.contentTree.expandTOCNode(args.topicNumber);
            document.all.content.src = args["url"], "content";
	    return true;
        }
        if (args["contextId"]) {
            this.contextId.resolveContextId(args["contextId"]);
	    return true;
        }
	return false;
    }
};


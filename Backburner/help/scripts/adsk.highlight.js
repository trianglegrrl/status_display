if (top.HlpSys === undefined) {
    top.HlpSys = new Object();
}

top.HlpSys.highlight = function(){
    var searchObj;
    var highlightObj;

    function decodeReferrer(q, config) {
        var query = new Array();

        if (q != null && q.length > 0) {
            query[0] = q[0];
            for (var i1 = 0; i1 < q.length; i1++) {
                query[query.length] = q[i1];
                if (i1 != 0) {
                    query[0] += "[^\\w]+" + q[i1];
                }
            }

        } else {
            return null;
        }

        var caseSens = config.caseSensitive;
        var exact = config.wholeWords;
        var qre = new Array();
        for (var i2 = 0; i2 < query.length; i2 ++) {
            query[i2] = caseSens ? query[i2] : query[i2].toLowerCase();
            if (exact)
                qre.push('\\b' + query[i2] + '\\b');
            else
                qre.push(query[i2]);
        }

        for (var i3 = 0; i3 < qre.length; i3 ++) {
            qre[i3] = new RegExp(qre[i3], caseSens ? "" : "i");
        }

        return qre;

    };

    function hiliteElement(elm, query) {
        if (!query || elm.childNodes.length == 0)
            return;

        var qre = query;
        var searchMethod = searchObj.config.searchMethod;

        var textproc = function(node, querryNum) {
            var q = querryNum;
            var match = null;
            var continuedSearch = true;
            if (searchMethod == 'phrase') {
                if (querryNum == 0) {
                    match = qre[q].exec(node.data);
                    q++;
                    querryNum++;
                    continuedSearch = false;
                }
                if (match) {
                    var val = match[0];
                    var k = '';
                    var node2 = node.splitText(match.index);
                    var node3 = node2.splitText(val.length);
                    var span = node.ownerDocument.createElement('SPAN');
                    node.parentNode.replaceChild(span, node2);
                    span.className = highlightObj.config.stylemapper[0];
                    span.appendChild(node2);
                    return span;
                } else {
                    if (qre[q] && qre[q].exec(node.data)) {
                        var words = normalizeSpace(node.data).split(/[\[ | \^ | \$ | \. | \| | \+ | \( | \) | ` | ~ | ! | # | % | & | - | \- | _ | = | \] | { | } | ; | ' | " | < | > | ,]/);
                        var w = 0;
                        var wrongSearch = false;
                        if (q == 1) {
                            for (w = 0; w < words.length; w++) {
                                if (qre[q].exec(words[w])) {
                                    break;
                                }
                            }
                        }
                        while (q < qre.length && w < words.length) {
                            if (qre[q].exec(words[w])) {
                                q++;
                                w++;
                            } else if (searchObj.data.stopWordsList[words[w].toLowerCase()] || words[w].length == 0) {
                                w++;
                            } else {
                                wrongSearch = true;
                                break;
                            }
                        }
                        if (!wrongSearch) {
                            q--;
                            if (q + 1 == qre.length) {
                                var matchS = qre[querryNum].exec(node.data);
                                var node2 = node.splitText(matchS.index);
                                var matchE = qre[q].exec(node2.data);
                                var node3 = node2.splitText(matchE.index + matchE[0].length);
                                var span = node.ownerDocument.createElement('SPAN');
                                node.parentNode.replaceChild(span, node2);
                                span.className = highlightObj.config.stylemapper[0];
                                span.appendChild(node2);
                                return span;
                            } else {
                                var nextNode = getFollowingTextNode(node);
                                if (nextNode != null) {
                                    var nextProcessedNode = textproc(nextNode, q + 1)
                                    if (nextNode != nextProcessedNode) {
                                        var matchS = qre[querryNum].exec(node.data);
                                        var node2 = node.splitText(matchS.index);
                                        var span = node.ownerDocument.createElement('SPAN');
                                        node.parentNode.replaceChild(span, node2);
                                        span.className = highlightObj.config.stylemapper[0];
                                        span.appendChild(node2);
                                        return nextProcessedNode;
                                    }
                                }
                            }
                        } else if (!continuedSearch && w < words.length) {
                            var matchT = (new RegExp(words[w], "i")).exec(node.data)
                            if (matchT) {
                                var node2 = node.splitText(matchT.index + matchT[0].length);
                                if (node.data.length - matchT.index - matchT[0].length == 0) {
                                    return node;
                                } else {
                                    return textproc(node2, 0);
                                }
                            }
                        }
                    }
                    return node;
                }
            } else {
                for (var i = 0; i < qre.length; i++) {
                    match = qre[i].exec(node.data);
                    if (match) {
                        var val = match[0];
                        var node2 = node.splitText(match.index);
                        var node3 = node2.splitText(val.length);
                        var span = node.ownerDocument.createElement('SPAN');
                        node.parentNode.replaceChild(span, node2);
                        span.className = highlightObj.config.stylemapper[0];
                        span.appendChild(node2);
                        return span;
                    }
                }
                return node;
            }
        };
        walkElements(elm.childNodes[0], 1, textproc);
    };

    function walkElements(node, depth, textproc) {
        var skipre = /^(head|script|style|textarea)/i;
        var count = 0;
        while (node && depth > 0) {
            count ++;
            if (count >= highlightObj.config.max_nodes) {
                var handler = function() {
                    walkElements(node, depth, textproc);
                };
                setTimeout(handler, 50);
                return;
            }

            if (node.nodeType == 1) { // ELEMENT_NODE
                if (!skipre.test(node.tagName) && node.childNodes.length > 0) {
                    node = node.childNodes[0];
                    depth ++;
                    continue;
                }
            } else if (node.nodeType == 3) { // TEXT_NODE
                node = textproc(node, 0);
                if (node.parentNode == null) {
                    alert(node.nodeName + ":1" + node.data + ":");
                }
            }

            if (node == null) {
                return;
            }

            if (node.nextSibling) {
                node = node.nextSibling;
            } else {
                while (depth > 0) {
                    node = node.parentNode;
                    depth --;
                    if (node.nextSibling) {
                        node = node.nextSibling;
                        break;
                    }
                }
            }
        }
    };

    function getFollowingTextNode(node) {
        node = getFollowingNode(node);
        if (node) {
            if (node.nodeType == 3 && normalizeSpace(node.data).length > 0) {
                return node;
            } else {
                return getFollowingTextNode(node);
            }
        } else {
            return null;
        }
    };

    function getFollowingNode(node) {
        if (node) {
            if (node.firstChild) {
                return node.firstChild;
            } else if (node.nextSibling) {
                return node.nextSibling;
            } else {
                while (node.parentNode) {
                    node = node.parentNode;
                    if (node.nextSibling) {
                        return node.nextSibling;
                    }
                }
                return null;
            }
        } else return null;
    };

    function normalizeSpace(string) {
        var regexp = new RegExp("[\\s][\\s]+","g");
        while(string.match(regexp)) {
            string = string.replace(regexp," ");
        }
        if (string.length == 1 && string == " ") {
            return "";
        } else {
            return string;
        }
    };

    function disHilite(node, config) {
        if (node != null) {
            if (node.nodeType == 1 || node.nodeType == 9) { // ELEMENT_NODE
                if ((node.nodeName.toLowerCase() == "span") && (node.attributes["class"] != null) && (node.attributes["class"].nodeValue.indexOf(config.stylename) == 0)) {
                    var childs1 = node.childNodes;
                    for (var j = 0; j < childs1.length; j++) {
                        node.parentNode.insertBefore(childs1[j], node);
                    }
                    node.parentNode.removeChild(node);
                } else if (node.childNodes.length > 0) {
                    var childs2 = node.childNodes;
                    for (var i = 0; i < childs2.length; i++) {
                        disHilite(childs2[i], config);
                    }
                }
            }
        }
    }

    function parseUrlParameters(queryString) {
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
    };



    return {
		config: {
            onload: true,
			elementid: '',
			max_nodes: 500,
			stylename: 'hilite',
			stylemapper: ['hilite','hilite1','hilite2'],
			debug_referrer: ''
		},

        onload: function() {
            if (top.HlpSys.search !== undefined) {
                searchObj = top.HlpSys.search;
                highlightObj = top.HlpSys.highlight;
                var parameters = window.location.search.substring(1);
                var args = parseUrlParameters(parameters);
                var arg = args["highlighting"];
                if (arg && arg.length > 0) {
                    var decodedWords = decodeURIComponent(arg);
                    var words = decodedWords.split("|");
                    var q = decodeReferrer(words, searchObj.config);
                    top.HlpSys.highlight.hilite(window.document, q, searchObj.config.highlightEnable);
                }
            }
        },

		hilite: function(doc, query, enable) {
			if (enable && query.length > 0) {
				if (doc != null) {
					hiliteElement(doc, query);
				}
			} else {
				disHilite(doc, this.config);
			}
		}
    };
}();

if (top.HlpSys.highlight.config.onload) {
    AddOnLoadFunction(top.HlpSys.highlight.onload);
}

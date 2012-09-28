// The constructor function: creates a Cookie object for the specified
// document, with a specified name and optional attributes.
// Arguments:
//   document: The Document object for which the cookie is stored. Required.
//   name:     A string that specifies a name for the cookie. Required.
//   hours:    An optional number that specifies the number of hours from now
//             after which the cookie should expire.
//   path:     An optional string that specifies the cookie path attribute.
//   domain:   An optional string that specifies the cookie domain attribute.
//   secure:   An optional boolean value that, if true, requests a secure cookie.
//

function CookieWorker(document, name, hours, path, domain, secure) {
    // All the predefined properties of this object begin with '$'
    // to distinguish them from other properties, which are the values to
    // be stored in the cookie
    this.$document = document;
    this.$name = name;
    if (hours) {
        this.$expiration = new Date((new Date()).getTime(  ) + hours*3600000);
    } else {
        this.$expiration = null;
    }
    if (path) {
        this.$path = path;
    } else {
        this.$path = null;
    }
    if (domain) {
        this.$domain = domain;
    } else {
        this.$domain = null;
    }
    if (secure) {
        this.$secure = true;
    } else {
        this.$secure = false;
    }
}

// This function is the store(  ) method of the Cookie object
CookieWorker.prototype.store = function ( object ) {
    // First, loop through the properties of the Cookie object and
    // put together the value of the cookie. Since cookies use the
    // equals sign and semicolons as separators, we'll use colons
    // and ampersands for the individual state variables we store
    // within a single cookie value. Note that we escape the value
    // of each state variable, in case it contains punctuation or other
    // illegal characters.

    var cookieval = "";
    for(var prop in object) {
        // Ignore properties with names that begin with '$' and also methods
        if ((prop.charAt(0) == '$') || ((typeof object[prop]) == 'function')) {
            continue;
        }
        if (cookieval != "") {
            cookieval += '&';
        }
        cookieval += prop + ':' + escape(object[prop]);
    }

    // Now that we have the value of the cookie, put together the
    // complete cookie string, which includes the name and the various
    // attributes specified when the Cookie object was created
    var cookie = this.$name + '=' + cookieval;
    if (this.$expiration) {
        cookie += '; expires=' + this.$expiration.toGMTString(  );
    }
    if (this.$path) {
        cookie += '; path=' + this.$path;
    }
    if (this.$domain) {
        cookie += '; domain=' + this.$domain;
    }
    if (this.$secure) {
        cookie += '; secure';
    }

    // Now store the cookie by setting the magic Document.cookie property
    this.$document.cookie = cookie;
};


// This function is the load(  ) method of the Cookie object
CookieWorker.prototype.load = function( object ) {
    // First, get a list of all cookies that pertain to this document
    // We do this by reading the magic Document.cookie property
    var allcookies = this.$document.cookie;
    if (allcookies == "") return false;

    // Now extract just the named cookie from that list
    var start = allcookies.indexOf(this.$name + '=');
    if (start == -1) return false;   // Cookie not defined for this page
    start += this.$name.length + 1;  // Skip name and equals sign
    var end = allcookies.indexOf(';', start);
    if (end == -1) end = allcookies.length;
    var cookieval = allcookies.substring(start, end);

    // Now that we've extracted the value of the named cookie, we
    // must break that value down into individual state variable
    // names and values. The name/value pairs are separated from each
    // other by ampersands, and the individual names and values are
    // separated from each other by colons. We use the split(  ) method
    // to parse everything.

    var a = cookieval.split('&');    // Break it into an array of name/value pairs
    for(var i1=0; i1 < a.length; i1++)  // Break each pair into an array
        a[i1] = a[i1].split(':');

    // Now that we've parsed the cookie value, set all the names and values
    // of the state variables in this Cookie object. Note that we unescape(  )
    // the property value, because we called escape(  ) when we stored it.
    for(var i2 = 0; i2 < a.length; i2++) {
        object[a[i2][0]] = unescape(a[i2][1]);
    }

    // We're done, so return the success code
    return true;
};

// This function is the remove(  ) method of the Cookie object
CookieWorker.prototype.remove = function(  ) {
    var cookie;
    cookie = this.$name + '=';
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';

    this.$document.cookie = cookie;
};







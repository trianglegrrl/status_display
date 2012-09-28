if (top.HlpSys === undefined) {
    top.HlpSys = new Object();
}

top.HlpSys.favorites = function() {
    var cookieWorker = new CookieWorker(top.document, "autodesk_online_help_favorites", 24000);
    var favoritesData = {
        urlString : "",
        titleString : ""
    };

    var favoritesList = new Array();
    var selectedFavoriteItem = 0;



    return {
        selectFavoriteItem: function(number) {
            selectedFavoriteItem = number;
        },

        removeSeceltedFavoriteItem: function() {

            if (selectedFavoriteItem < favoritesList.length) {
                favoritesList.splice(selectedFavoriteItem, 1);
                this.synchronizeFavoriteData();
            }
        },

        initalFavoritesLoad: function () {
            cookieWorker.load(favoritesData);
        },

        addToFavorites: function(doc)
        {
            var url = doc.URL;
            if (url.indexOf("?") != -1) {
                url = url.substring(0, url.indexOf("?"));
            }
            var title = doc.title;
            cookieWorker.load(favoritesData);
            if (favoritesData.urlString.indexOf(url) == -1) {
                if (favoritesData.urlString) favoritesData.urlString += ";" + url;
                else favoritesData.urlString = url;
                if (favoritesData.titleString) favoritesData.titleString += ";" + title;
                else favoritesData.titleString = title;
                cookieWorker.store(favoritesData);
                this.refreshFavoritesList();
            }
            this.refreshFavoritesPanel();
        },

        refreshFavoritesPanel: function() {
            if (navigator.appName == "Netscape")
            {
                top.left_tab.document.getElementById('iframeFavoritesFrame').contentDocument.location.reload();
            }
            else if (navigator.appName == "Microsoft Internet Explorer")
            {
                top.left_tab.document.frames("iframeFavoritesFrame").document.location.reload();
            }
            else alert("Unsupported browser !");


        },

        refreshFavoritesList: function()
        {
            cookieWorker.load(favoritesData);
            var urls = favoritesData.urlString.split(";");
            var titles = favoritesData.titleString.split(";");
            for (i = 0; i < urls.length; i++) {
                favoritesList[i] = new Array();
                favoritesList[i][0] = urls[i];
                favoritesList[i][1] = titles[i];
            }
        },

        synchronizeFavoriteData: function()
        {
            var url = "";
            var titles = "";
            for (i = 0; i < favoritesList.length; i++) {
                url += favoritesList[i][0];
                titles += favoritesList[i][1];
                if (i != (favoritesList.length - 1)) {
                    url += ";";
                    titles += ";";
                }
            }
            favoritesData.urlString = url;
            favoritesData.titleString = titles;
            cookieWorker.store(favoritesData);
            this.refreshFavoritesPanel();
        },

        loadFromFavorites: function()
        {
            if (navigator.appName == "Netscape")
            {
                document.getElementById('favoritesList').contentDocument.open();
                document.getElementById('favoritesList').contentDocument.write('<html><head><link rel="stylesheet" type="text/css" href="style/adsk.panels.css"><link rel="stylesheet" type="text/css" href="style/adsk.panels.custom.css"></head><body>');
                for (i = 0; i < favoritesList.length; i++) {
                    document.getElementById('favoritesList').contentDocument.write('<div ><a class="favoritesLink" target="content" onclick="top.HlpSys.favorites.selectFavoriteItem(' + i + ');" href="' + favoritesList[i][0] + '">' + favoritesList[i][1] + '</a></div>');
                }
                document.getElementById("favoritesList").contentDocument.write('</body></html>');
                document.getElementById('favoritesList').contentDocument.close();
            }
            else if (navigator.appName == "Microsoft Internet Explorer")
            {
                document.frames("favoritesList").document.open();
                document.frames("favoritesList").document.write('<html><head><link rel="stylesheet" type="text/css" href="style/adsk.panels.css"><link rel="stylesheet" type="text/css" href="style/adsk.panels.custom.css"></head><body>');
                for (i = 0; i < favoritesList.length; i++) {
                    var url = favoritesList[i][0];
                    url = unescape(url)
                    if (url.match(/^[\\\/][A-Z]:/g)) {
                        url = url.slice(1);
                    }
                    document.frames("favoritesList").document.write('<div><a class="favoritesLink" target="content"  onclick="top.HlpSys.favorites.selectFavoriteItem(' + i + ');" href="' + url + '">' + favoritesList[i][1] + '</a></div>');
                }
                document.frames("favoritesList").document.write('</body></html>');
                document.frames("favoritesList").document.close();
            }
            else alert("Unsupported browser !");
        }


    };
}();








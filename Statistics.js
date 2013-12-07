 var queryString = new Array();
    var winData;
    var lostData;
    var tieData;
    var GamePlayedData;
    var percentData;
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
        }
        if (queryString["win"] != null) {
            winData = queryString["win"];
            $("#win").html(winData);
            
        }
        if (queryString["lost"] != null) {
            lostData = queryString["lost"];
            $("#lost").html(lostData);
        }
        if (queryString["tie"] != null) {
            tieData = queryString["tie"];
            $("#tie").html(tieData);
        }
        GamePlayedData = parseInt(winData) + parseInt(lostData) + parseInt(tieData);
        $("#GamePlayed").html(GamePlayedData);
        percentData = parseInt((parseInt(winData) / parseInt(GamePlayedData))*100) +"%";
        $("#WinPercentage").html(percentData);
        
        
    });
    
    $(function () {
        $("#btnQueryString").bind("click", function () {
            var url = "index.html?win=" + encodeURIComponent(winData)
            + "&lost=" + encodeURIComponent(lostData)+ "&tie=" 
            + encodeURIComponent(tieData);
            window.location.href = url;
        });
    });
    
   

var url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9fa2e4d4-8647-406f-b10e-ef8749efdf76&response_type=code&redirect_uri=http://localhost/wordpress/wp-admin&response_mode=query&scope=Calendars.ReadWrite%20offline_access%20User.Read&state=12345";

$(document).ready(function () {
    $("#test").click(function () {
        getAuth();
    });

    var parts = window.location.search.substr(1).split("&");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    console.log("in ready", $_GET);

    if ($_GET['code'] != null || $_GET['code']) {
        getAccessToken($_GET['code']);
    }


});

function getAuth(callback) {
    window.location.assign(url);
}

function getAccessToken(code) {
    var url = "https://login.microsoftonline.com/common/oauth2/v2.0/token?client_id=9fa2e4d4-8647-406f-b10e-ef8749efdf76&scope' => 'Calendars.ReadWrite%20offline_access%20User.Read&code=" + code + "&redirect_uri=http://localhost/wordpress/wp-admin&grant_type=authorization_code&client_secret=cd129b9b-5c9d-4d93-b5c9-c1ccec1bbcf9";
    fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token",
        {
            method: 'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: {
                'client_id': '9fa2e4d4-8647-406f-b10e-ef8749efdf76',
                'scope': 'Calendars.ReadWrite%20offline_access%20User.Read',
                'code': code,
                'redirect_uri': 'http://localhost/wordpress/wp-admin',
                'grant_type': 'authorization_code',
                'client_secret': 'cd129b9b-5c9d-4d93-b5c9-c1ccec1bbcf9',
            }
        })
        .then(results=>results.json)
        .then(console.log(results))
}

function callback(response) {
    console.log("response ===> ");
    console.log(response);
}
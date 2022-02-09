var url = "<? get_redirect_url()?>";

    $( document ).ready(function() {
        $("#test").click(function(){
            getAuth();
        });

    });

    function getAuth(callback){
        window.location.href(url);
    }

    function callback(response){
        console.log("response ===> ");
        console.log(response);
    }
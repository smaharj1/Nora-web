
$(document).ready(function () {
    $(".nora-intro").hide();
    $("#nora-nora").hide();

    $(".nora-intro").fadeIn(4000, function() {
        // Animation complete
    });
    $("#nora-nora").fadeIn(4000, function() {
        // Animation complete
    });

    $.ajax({
        method: "GET",
        url: "http://cbf1bcba.ngrok.io/getUserData",
        datatype: "json"
    })
    .done(function( msg ) {
        parsedData = JSON.parse(msg);
        updatePictures(parsedData);
    });

    $.ajax({
        method: "POST",
        url: "http://cbf1bcba.ngrok.io/bankAnalytics",
        datatype: "json",
        data: { phone: "+19084774708", url : "https://api.twilio.com/2010-04-01/Accounts/AC6cde470a46432c2d0860e433c15c3e7c/Messages/MM7cc9790da51354363758fc06ebd46dd4/Media/ME20aec842371faa59f3cffec10a28b37c"} ,
    }).done(function(data) {
        alert(data+"");
    });


});


function updatePictures(parsedData) {
    var items = parsedData.items;

    for (i in items) {
        var imageURL = items[i].image;
        
        if ($('.images').children().last().children().size() == 3) {
            $('.images').append("<tr></tr>");
        }

        $('.images').children().last().append("<td><img src="+imageURL+"></td>");
    }
}

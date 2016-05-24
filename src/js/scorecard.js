function total() {
    var p1h1 = document.getElementById('p1h1').value;
    var p1h2 = document.getElementById('p1h2').value;
    var p1h3 = document.getElementById('p1h3').value;
    var p1h4 = document.getElementById('p1h4').value;
    var p1h5 = document.getElementById('p1h5').value;
    var p1h6 = document.getElementById('p1h6').value;
    var p1h7 = document.getElementById('p1h7').value;
    var p1h8 = document.getElementById('p1h8').value;
    var p1h9 = document.getElementById('p1h9').value;
    var p1total = Number(p1h1) + Number(p1h2) + Number(p1h3) + Number(p1h4) + Number(p1h5) + Number(p1h6) + Number(p1h7) + Number(p1h8) + Number(p1h9);
    document.getElementById('player1').innerHTML = p1total;
}


var xhttp = new XMLHttpRequest();


function currentWeather() {
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var myObj = JSON.parse(xhttp.responseText);
            document.getElementById("myWeather").innerHTML = myObj.weather[0].description;
            document.getElementById("weatherImg").src = "http://openweathermap.org/img/w/" + myObj.weather[0].icon + ".png";
        }
    }

    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Provo&appid=2ed7fbd66625cddb671decbf801e3add", true);
    xhttp.send();

}

function courseInformation() {
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var courseInfo = JSON.parse(xhttp.responseText);
            document.getElementById("myWeather").innerHTML = courseInfo.holes[0].description;
        }
    }

    xhttp.open("GET", "https://api.swingbyswing.com/v2/courses/search_by_location?lat=40.487&lng=-105.08&radius=20&active_only=yes&hole_count=18&order_by=distance_from_me_miles&from=1&limit=20&access_token={access_token}", true);
    xhttp.send();

}

function runCode() {
    for(var p = 1; p <= numPlayers; p++) {
        collectHoles(p);
    }
}



function collectHoles(player) {
    for(var p = 1; p <= numPlayers; P++) {
        for(var h = 1; h <= 18; h++){
            var hole = "<div id='Player'" + player + "Hole" + h + "' class='column'" + h +"'>Hole Display</div>";
            golfcourse += hole;
            $("#scorecard").append(golfcourse);
        }
    }
}

 var numplayers = 8;
 var numholes = 18;

 function buildcard(){
 beginTimer();
 var holecollection = "";
 var playercollection = "";

 // create column of player labels
 for(var pl = 1; pl <= numplayers; pl++ ){
 playercollection += "<div id='player" + pl +"' class='holebox playerbox'> Player " + pl + "</div>";
 }

 // create golf hole columns before you add holes to them.
 for(var c = numholes; c >= 1; c-- ){
 holecollection += "<div id='column" + c +"' class='holecol'><div class='holenumbertitle'>" + c + "</div></div>";
 }
 $("#leftcard").html(playercollection);
 $("#rightcard").html(holecollection);

 // call the function that builds the holes into the columns
 buildholes();
 }

 function buildholes() {
 // add 18 holes to the columns
 for(var p = 1; p <= numplayers; p++ ){
 for(var h = 1; h <= numholes; h++){
 $("#column" + h).append("<div id='player" + p +"hole" + h +"' class='holebox'>s</div>");
 }
 }
 }







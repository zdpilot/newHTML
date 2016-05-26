function total() {
    var h1 = document.getElementById('h1').value;
    var h2 = document.getElementById('h2').value;
    var h3 = document.getElementById('h3').value;
    var h4 = document.getElementById('h4').value;
    var h5 = document.getElementById('h5').value;
    var h6 = document.getElementById('h6').value;
    var h7 = document.getElementById('h7').value;
    var h8 = document.getElementById('h8').value;
    var h9 = document.getElementById('h9').value;
    var total = Number(p1h1) + Number(p1h2) + Number(p1h3) + Number(p1h4) + Number(p1h5) + Number(p1h6) + Number(p1h7) + Number(p1h8) + Number(p1h9);
    document.getElementById('player1').innerHTML = p1total;
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.402653, lng: -111.787216},
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    var hole1Tee = 'img/golfTee.png';
    var beachMarker1 = new google.maps.Marker({
        position: {lat: 40.4031413225741, lng: -111.787138581276},
        map: map,
        icon: hole1Tee
    });
    var hole1Green = 'img/golfFlag.png';
    var beachMarker2 = new google.maps.Marker({
        position: {lat: 40.401887209997, lng: -111.783217191696},
        map: map,
        icon: hole1Green
    });

}


var xhttp = new XMLHttpRequest();


function currentWeather() {
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var myObj = JSON.parse(xhttp.responseText);
            document.getElementById("myWeather").innerHTML = myObj.weather[0].description;
            document.getElementById("weatherImg").src = "http://openweathermap.org/img/w/" + myObj.weather[0].icon + ".png";
        }
    };

    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Provo&appid=2ed7fbd66625cddb671decbf801e3add", true);
    xhttp.send();

}

//Create a list of course ID's that they can choose from.
var CourseIdArray = [];

var testCourse = {};

getCourseInfo(18300);

function getCourseInfo(id) {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            testCourse = JSON.parse(xhttp.responseText);
            var course = body.course;
            document.getElementById("mytestCourse").innerHTML = course.holes[0].tee_boxes[0].yards.description;
        }
    };

    xhttp.open("GET", "http://golf-courses-api.herokuapp.com/courses/:id18300", true);
    xhttp.send();

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

 var numplayers = 1;
 var numholes = 18;

function startIt () {
    numplayers = document.getElementById('numPlayers').value;
    function buildcard(){
     beginTimer();

     var holecollection = "";
     var playercollection = "";

     for(var pl = 1; pl <= numplayers; pl++ ){
     playercollection += "<div id='player" + pl +"' class='holebox playerbox'> Player " + pl + "</div>";
     }

     for(var c = numholes; c >= 1; c-- ){
     holecollection += "<div id='column" + c +"' class='holecol'><div class='holenumbertitle'>" + c + "</div></div>";
     }
     $("#leftcard").html(playercollection);
     $("#rightcard").html(holecollection);

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

}





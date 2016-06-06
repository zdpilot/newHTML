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


function loadMe() {
    $
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

    xhttp.open("GET", "http://golf-courses-api.herokuapp.com/courses/18300", true);
    xhttp.send();

}

var numplayers = 1;
var numholes = 18;



function buildcard(){
    var numplayers = document.getElementById("numPlayers").value;
    var numholes = 18;
    var holecollection = "";
    var playercollection = "";
    var grandTotalCollection = "";
    var hole = "";



    // create column of player labels
    for(var pl = 1; pl <= numplayers; pl++ ){
        playercollection += "<input id='player" + pl + "' class='holebox playerbox' placeholder='Player Name'/><br/>";
        grandTotalCollection += "<div id='grand" + pl + "' class='grandTotal'></div>";
    }
    // create golf hole columns before you add holes to them.
    for(var c = numholes; c >= 1; c-- ){
        holecollection += "<div id='column" + c +"' class='holecol'><div class='holenumbertitle'>" + c + "</div></div>" ;
    }



    // call the function that builds the holes into the columns
    function collectHoles() {
        var p;
        var h;
        for(p = 1; p <= numplayers; p++) {
            for(h = 1; h <= 18; h++) {
                var playerId = "player" + p + "Hole" + h;
                var playerClass = "column" + h;
                hole = "<div id='holeInputs'><input id = " + playerId + " class='holeBox' onkeyup='calculateScore(" + p + ")'></div>";
                $("#rightcard").append(hole);

            }
            // Add the total cells to the total column in the players card
            // We add them after adding the holes so that they all align correctly
            var totalCell = $("<div id='grand" + p + "' class='grandTotal'></div>")
            $("#rightcard").append(totalCell);
        }
    }

    $("#leftcard").html(playercollection);
    $("#rightcard").html(("<div class='grandTotal'><div>Total</div></div>") + holecollection);




    function buildholes() {
        // add 18 holes to the columns
        for(var p = 1; p <= numplayers; p++ ){
            for(var h = 1; h <= numholes; h++){
                $("#column" + h).append("<div onkeyup='calculateScore(" + p + ")' id='player" + p + "hole" + h + "' class='holebox'></div>");
            }

        }
    }

    collectHoles();
    buildholes();

}




function courseInformationCard(){
    var infoRows = ['Black / Gold', 'Blue', 'White', 'Red', 'Handicap', 'Par'];
    var infoColumns = 18;
    var columncollection = "";
    var rowcollection = "";

    // create column of player labels
    for(var pl = 0; pl < infoRows.length; pl++ ){
        rowcollection += "<div id='infoplayer" + pl + "' class='holebox titlebox'>" + infoRows[pl] + "</div>";
           // "<span>par" + testCourse.course.holes[pl].tee_boxes[0].par + "</span>
    }
    // create golf hole columns before you add holes to them.
    for(var c = infoColumns; c >= 1; c-- ){
        columncollection += "<div id='column" + c +"' class='holecol'><div class='holenumbertitle'>" + c + "</div></div>";
    }
    $("#leftInfoCard").html(rowcollection);
    $("#rightInfoCard").html(columncollection);

    // call the function that builds the holes into the columns
    function collectHoles() {
        var p;
        var h;
        for(p = 1; p <= infoRows.length; p++) {
            for(h = 1; h <= 18; h++) {
                var playerId = "player" + p + "Hole" + h;
                var playerClass = "column" + h;
                var hole = '<div id="holeInputs"><div id = playerId class = playerClass></div></div>';
                $("#rightInfoCard").append(hole);
            }
        }
    }

    function buildholes() {
        // add 18 holes to the columns
        for(var p = 1; p <= numplayers; p++ ){
            for(var h = 1; h <= numholes; h++){
                $("#column" + h).append("<div id='player" + p + "hole" + h + "' class='holebox'></div>");
            }

        }
    }

    collectHoles();
    buildholes();

}
function calculateScore(thePlayer) {
    console.log("Got Here");
    var theTotal = 0;

    for(var t = 1;t <= numholes; t++) {
        var playerId = "#player" + thePlayer + "Hole" + t;
        theTotal += Number($(playerId).val());
    }
    $("#grand" + thePlayer).html(theTotal);
}






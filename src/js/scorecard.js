

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.402653, lng: -111.787216},
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });


}


var holes = 18;

function holeMaps() {

    var maps = [];

    for(var i = 1; i <= holes; i++) {


        var hole1Tee = 'img/golfTee.png';
        var beachMarker1 = new google.maps.Marker({
            position: {
                lat: myCourse.course.holes.hole_num[i].tee_boxes[0].location.lat,
                lng: myCourse.course.holes.hole_num[i].tee_boxes[0].location.lng,
            },
            map: map,
            icon: hole1Tee
        });
        var hole1Green = 'img/golfFlag.png';
        var beachMarker2 = new google.maps.Marker({
            position: {
                lat: myCourse.course.holes[0].green_location.lat,
                lng: myCourse.course.holes[0].green_location.lng,
            },
            map: map,
            icon: hole1Green
        });
        var newMap = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: beachMarker1.position.lat.value - beachMarker2.position.lat.value,
                lng: beachMarker1.position.lng.value - beachMarker2.position.lng.value,
            },
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        maps.push(newMap);
    }
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

var myCourse = {};

var goldYards = {};


function getCourseInfo() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myCourse = JSON.parse(xhttp.responseText);
            var course = myCourse.course;
            document.getElementById("g1").innerHTML = course.holes[0].tee_boxes[0].yards;
            document.getElementById("g2").innerHTML = course.holes[1].tee_boxes[0].yards;
            document.getElementById("g3").innerHTML = course.holes[2].tee_boxes[0].yards;
            document.getElementById("g4").innerHTML = course.holes[3].tee_boxes[0].yards;
            document.getElementById("g5").innerHTML = course.holes[4].tee_boxes[0].yards;
            document.getElementById("g6").innerHTML = course.holes[5].tee_boxes[0].yards;
            document.getElementById("g7").innerHTML = course.holes[6].tee_boxes[0].yards;
            document.getElementById("g8").innerHTML = course.holes[7].tee_boxes[0].yards;
            document.getElementById("g9").innerHTML = course.holes[8].tee_boxes[0].yards;
            document.getElementById("g10").innerHTML = course.holes[9].tee_boxes[0].yards;
            document.getElementById("g11").innerHTML = course.holes[10].tee_boxes[0].yards;
            document.getElementById("g12").innerHTML = course.holes[11].tee_boxes[0].yards;
            document.getElementById("g13").innerHTML = course.holes[12].tee_boxes[0].yards;
            document.getElementById("g14").innerHTML = course.holes[13].tee_boxes[0].yards;
            document.getElementById("g15").innerHTML = course.holes[14].tee_boxes[0].yards;
            document.getElementById("g16").innerHTML = course.holes[15].tee_boxes[0].yards;
            document.getElementById("g17").innerHTML = course.holes[16].tee_boxes[0].yards;
            document.getElementById("g18").innerHTML = course.holes[17].tee_boxes[0].yards;

            document.getElementById("b1").innerHTML = course.holes[0].tee_boxes[1].yards;
            document.getElementById("b2").innerHTML = course.holes[1].tee_boxes[1].yards;
            document.getElementById("b3").innerHTML = course.holes[2].tee_boxes[1].yards;
            document.getElementById("b4").innerHTML = course.holes[3].tee_boxes[1].yards;
            document.getElementById("b5").innerHTML = course.holes[4].tee_boxes[1].yards;
            document.getElementById("b6").innerHTML = course.holes[5].tee_boxes[1].yards;
            document.getElementById("b7").innerHTML = course.holes[6].tee_boxes[1].yards;
            document.getElementById("b8").innerHTML = course.holes[7].tee_boxes[1].yards;
            document.getElementById("b9").innerHTML = course.holes[8].tee_boxes[1].yards;
            document.getElementById("b10").innerHTML = course.holes[9].tee_boxes[1].yards;
            document.getElementById("b11").innerHTML = course.holes[10].tee_boxes[1].yards;
            document.getElementById("b12").innerHTML = course.holes[11].tee_boxes[1].yards;
            document.getElementById("b13").innerHTML = course.holes[12].tee_boxes[1].yards;
            document.getElementById("b14").innerHTML = course.holes[13].tee_boxes[1].yards;
            document.getElementById("b15").innerHTML = course.holes[14].tee_boxes[1].yards;
            document.getElementById("b16").innerHTML = course.holes[15].tee_boxes[1].yards;
            document.getElementById("b17").innerHTML = course.holes[16].tee_boxes[1].yards;
            document.getElementById("b18").innerHTML = course.holes[17].tee_boxes[1].yards;

            document.getElementById("w1").innerHTML = course.holes[0].tee_boxes[2].yards;
            document.getElementById("w2").innerHTML = course.holes[1].tee_boxes[2].yards;
            document.getElementById("w3").innerHTML = course.holes[2].tee_boxes[2].yards;
            document.getElementById("w4").innerHTML = course.holes[3].tee_boxes[2].yards;
            document.getElementById("w5").innerHTML = course.holes[4].tee_boxes[2].yards;
            document.getElementById("w6").innerHTML = course.holes[5].tee_boxes[2].yards;
            document.getElementById("w7").innerHTML = course.holes[6].tee_boxes[2].yards;
            document.getElementById("w8").innerHTML = course.holes[7].tee_boxes[2].yards;
            document.getElementById("w9").innerHTML = course.holes[8].tee_boxes[2].yards;
            document.getElementById("w10").innerHTML = course.holes[9].tee_boxes[2].yards;
            document.getElementById("w11").innerHTML = course.holes[10].tee_boxes[2].yards;
            document.getElementById("w12").innerHTML = course.holes[11].tee_boxes[2].yards;
            document.getElementById("w13").innerHTML = course.holes[12].tee_boxes[2].yards;
            document.getElementById("w14").innerHTML = course.holes[13].tee_boxes[2].yards;
            document.getElementById("w15").innerHTML = course.holes[14].tee_boxes[2].yards;
            document.getElementById("w16").innerHTML = course.holes[15].tee_boxes[2].yards;
            document.getElementById("w17").innerHTML = course.holes[16].tee_boxes[2].yards;
            document.getElementById("w18").innerHTML = course.holes[17].tee_boxes[2].yards;

            document.getElementById("r1").innerHTML = course.holes[0].tee_boxes[3].yards;
            document.getElementById("r2").innerHTML = course.holes[1].tee_boxes[3].yards;
            document.getElementById("r3").innerHTML = course.holes[2].tee_boxes[3].yards;
            document.getElementById("r4").innerHTML = course.holes[3].tee_boxes[3].yards;
            document.getElementById("r5").innerHTML = course.holes[4].tee_boxes[3].yards;
            document.getElementById("r6").innerHTML = course.holes[5].tee_boxes[3].yards;
            document.getElementById("r7").innerHTML = course.holes[6].tee_boxes[3].yards;
            document.getElementById("r8").innerHTML = course.holes[7].tee_boxes[3].yards;
            document.getElementById("r9").innerHTML = course.holes[8].tee_boxes[3].yards;
            document.getElementById("r10").innerHTML = course.holes[9].tee_boxes[3].yards;
            document.getElementById("r11").innerHTML = course.holes[10].tee_boxes[3].yards;
            document.getElementById("r12").innerHTML = course.holes[11].tee_boxes[3].yards;
            document.getElementById("r13").innerHTML = course.holes[12].tee_boxes[3].yards;
            document.getElementById("r14").innerHTML = course.holes[13].tee_boxes[3].yards;
            document.getElementById("r15").innerHTML = course.holes[14].tee_boxes[3].yards;
            document.getElementById("r16").innerHTML = course.holes[15].tee_boxes[3].yards;
            document.getElementById("r17").innerHTML = course.holes[16].tee_boxes[3].yards;
            document.getElementById("r18").innerHTML = course.holes[17].tee_boxes[3].yards;

            document.getElementById("h1").innerHTML = course.holes[0].tee_boxes[0].hcp;
            document.getElementById("h2").innerHTML = course.holes[1].tee_boxes[0].hcp;
            document.getElementById("h3").innerHTML = course.holes[2].tee_boxes[0].hcp;
            document.getElementById("h4").innerHTML = course.holes[3].tee_boxes[0].hcp;
            document.getElementById("h5").innerHTML = course.holes[4].tee_boxes[0].hcp;
            document.getElementById("h6").innerHTML = course.holes[5].tee_boxes[0].hcp;
            document.getElementById("h7").innerHTML = course.holes[6].tee_boxes[0].hcp;
            document.getElementById("h8").innerHTML = course.holes[7].tee_boxes[0].hcp;
            document.getElementById("h9").innerHTML = course.holes[8].tee_boxes[0].hcp;
            document.getElementById("h10").innerHTML = course.holes[9].tee_boxes[0].hcp;
            document.getElementById("h11").innerHTML = course.holes[10].tee_boxes[0].hcp;
            document.getElementById("h12").innerHTML = course.holes[11].tee_boxes[0].hcp;
            document.getElementById("h13").innerHTML = course.holes[12].tee_boxes[0].hcp;
            document.getElementById("h14").innerHTML = course.holes[13].tee_boxes[0].hcp;
            document.getElementById("h15").innerHTML = course.holes[14].tee_boxes[0].hcp;
            document.getElementById("h16").innerHTML = course.holes[15].tee_boxes[0].hcp;
            document.getElementById("h17").innerHTML = course.holes[16].tee_boxes[0].hcp;
            document.getElementById("h18").innerHTML = course.holes[17].tee_boxes[0].hcp;

            document.getElementById("p1").innerHTML = course.holes[0].tee_boxes[0].par;
            document.getElementById("p2").innerHTML = course.holes[1].tee_boxes[0].par;
            document.getElementById("p3").innerHTML = course.holes[2].tee_boxes[0].par;
            document.getElementById("p4").innerHTML = course.holes[3].tee_boxes[0].par;
            document.getElementById("p5").innerHTML = course.holes[4].tee_boxes[0].par;
            document.getElementById("p6").innerHTML = course.holes[5].tee_boxes[0].par;
            document.getElementById("p7").innerHTML = course.holes[6].tee_boxes[0].par;
            document.getElementById("p8").innerHTML = course.holes[7].tee_boxes[0].par;
            document.getElementById("p9").innerHTML = course.holes[8].tee_boxes[0].par;
            document.getElementById("p10").innerHTML = course.holes[9].tee_boxes[0].par;
            document.getElementById("p11").innerHTML = course.holes[10].tee_boxes[0].par;
            document.getElementById("p12").innerHTML = course.holes[11].tee_boxes[0].par;
            document.getElementById("p13").innerHTML = course.holes[12].tee_boxes[0].par;
            document.getElementById("p14").innerHTML = course.holes[13].tee_boxes[0].par;
            document.getElementById("p15").innerHTML = course.holes[14].tee_boxes[0].par;
            document.getElementById("p16").innerHTML = course.holes[15].tee_boxes[0].par;
            document.getElementById("p17").innerHTML = course.holes[16].tee_boxes[0].par;
            document.getElementById("p18").innerHTML = course.holes[17].tee_boxes[0].par;




            function total() {
                var g1 = document.getElementById('g1').innerHTML;
                var g2 = document.getElementById('g2').innerHTML;
                var g3 = document.getElementById('g3').innerHTML;
                var g4 = document.getElementById('g4').innerHTML;
                var g5 = document.getElementById('g5').innerHTML;
                var g6 = document.getElementById('g6').innerHTML;
                var g7 = document.getElementById('g7').innerHTML;
                var g8 = document.getElementById('g8').innerHTML;
                var g9 = document.getElementById('g9').innerHTML;
                var g10 = document.getElementById('g10').innerHTML;
                var g11 = document.getElementById('g11').innerHTML;
                var g12 = document.getElementById('g12').innerHTML;
                var g13 = document.getElementById('g13').innerHTML;
                var g14 = document.getElementById('g14').innerHTML;
                var g15 = document.getElementById('g15').innerHTML;
                var g16 = document.getElementById('g16').innerHTML;
                var g17 = document.getElementById('g17').innerHTML;
                var g18 = document.getElementById('g18').innerHTML;
                var gOutTotal = Number(g1) + Number(g2) + Number(g3) + Number(g4) + Number(g5) + Number(g6) + Number(g7) + Number(g8) + Number(g9);
                document.getElementById('gOutTotal').innerHTML = gOutTotal;
                var gGrandTotal = Number(g1) + Number(g2) + Number(g3) + Number(g4) + Number(g5) + Number(g6) + Number(g7) + Number(g8) + Number(g9) +
                Number(g10) + Number(g11) + Number(g12) + Number(g13) + Number(g14) + Number(g15) + Number(g16) + Number(g17) + Number(g18);
                document.getElementById('gGrandTotal').innerHTML = gGrandTotal;

                var b1 = document.getElementById('b1').innerHTML;
                var b2 = document.getElementById('b2').innerHTML;
                var b3 = document.getElementById('b3').innerHTML;
                var b4 = document.getElementById('b4').innerHTML;
                var b5 = document.getElementById('b5').innerHTML;
                var b6 = document.getElementById('b6').innerHTML;
                var b7 = document.getElementById('b7').innerHTML;
                var b8 = document.getElementById('b8').innerHTML;
                var b9 = document.getElementById('b9').innerHTML;
                var b10 = document.getElementById('b10').innerHTML;
                var b11 = document.getElementById('b11').innerHTML;
                var b12 = document.getElementById('b12').innerHTML;
                var b13 = document.getElementById('b13').innerHTML;
                var b14 = document.getElementById('b14').innerHTML;
                var b15 = document.getElementById('b15').innerHTML;
                var b16 = document.getElementById('b16').innerHTML;
                var b17 = document.getElementById('b17').innerHTML;
                var b18 = document.getElementById('b18').innerHTML;
                var bOutTotal = Number(b1) + Number(b2) + Number(b3) + Number(b4) + Number(b5) + Number(b6) + Number(b7) + Number(b8) + Number(b9);
                document.getElementById('bOutTotal').innerHTML = bOutTotal;
                var bGrandTotal = Number(b1) + Number(b2) + Number(b3) + Number(b4) + Number(b5) + Number(b6) + Number(b7) + Number(b8) + Number(b9) +
                    Number(b10) + Number(b11) + Number(b12) + Number(b13) + Number(b14) + Number(b15) + Number(b16) + Number(b17) + Number(b18);
                document.getElementById('bGrandTotal').innerHTML = bGrandTotal;

                var w1 = document.getElementById('w1').innerHTML;
                var w2 = document.getElementById('w2').innerHTML;
                var w3 = document.getElementById('w3').innerHTML;
                var w4 = document.getElementById('w4').innerHTML;
                var w5 = document.getElementById('w5').innerHTML;
                var w6 = document.getElementById('w6').innerHTML;
                var w7 = document.getElementById('w7').innerHTML;
                var w8 = document.getElementById('w8').innerHTML;
                var w9 = document.getElementById('w9').innerHTML;
                var w10 = document.getElementById('w10').innerHTML;
                var w11 = document.getElementById('w11').innerHTML;
                var w12 = document.getElementById('w12').innerHTML;
                var w13 = document.getElementById('w13').innerHTML;
                var w14 = document.getElementById('w14').innerHTML;
                var w15 = document.getElementById('w15').innerHTML;
                var w16 = document.getElementById('w16').innerHTML;
                var w17 = document.getElementById('w17').innerHTML;
                var w18 = document.getElementById('w18').innerHTML;
                var wOutTotal = Number(w1) + Number(w2) + Number(w3) + Number(w4) + Number(w5) + Number(w6) + Number(w7) + Number(w8) + Number(w9);
                document.getElementById('wOutTotal').innerHTML = wOutTotal;
                var wGrandTotal = Number(w1) + Number(w2) + Number(w3) + Number(w4) + Number(w5) + Number(w6) + Number(w7) + Number(w8) + Number(w9) +
                    Number(w10) + Number(w11) + Number(w12) + Number(w13) + Number(w14) + Number(w15) + Number(w16) + Number(w17) + Number(w18);
                document.getElementById('wGrandTotal').innerHTML = wGrandTotal;

                var r1 = document.getElementById('r1').innerHTML;
                var r2 = document.getElementById('r2').innerHTML;
                var r3 = document.getElementById('r3').innerHTML;
                var r4 = document.getElementById('r4').innerHTML;
                var r5 = document.getElementById('r5').innerHTML;
                var r6 = document.getElementById('r6').innerHTML;
                var r7 = document.getElementById('r7').innerHTML;
                var r8 = document.getElementById('r8').innerHTML;
                var r9 = document.getElementById('r9').innerHTML;
                var r10 = document.getElementById('r10').innerHTML;
                var r11 = document.getElementById('r11').innerHTML;
                var r12 = document.getElementById('r12').innerHTML;
                var r13 = document.getElementById('r13').innerHTML;
                var r14 = document.getElementById('r14').innerHTML;
                var r15 = document.getElementById('r15').innerHTML;
                var r16 = document.getElementById('r16').innerHTML;
                var r17 = document.getElementById('r17').innerHTML;
                var r18 = document.getElementById('r18').innerHTML;
                var rOutTotal = Number(r1) + Number(r2) + Number(r3) + Number(r4) + Number(r5) + Number(r6) + Number(r7) + Number(r8) + Number(r9);
                document.getElementById('rOutTotal').innerHTML = rOutTotal;
                var rGrandTotal = Number(r1) + Number(r2) + Number(r3) + Number(r4) + Number(r5) + Number(r6) + Number(r7) + Number(r8) + Number(r9) +
                    Number(r10) + Number(r11) + Number(r12) + Number(r13) + Number(r14) + Number(r15) + Number(r16) + Number(r17) + Number(r18);
                document.getElementById('rGrandTotal').innerHTML = rGrandTotal;

                var h1 = document.getElementById('h1').innerHTML;
                var h2 = document.getElementById('h2').innerHTML;
                var h3 = document.getElementById('h3').innerHTML;
                var h4 = document.getElementById('h4').innerHTML;
                var h5 = document.getElementById('h5').innerHTML;
                var h6 = document.getElementById('h6').innerHTML;
                var h7 = document.getElementById('h7').innerHTML;
                var h8 = document.getElementById('h8').innerHTML;
                var h9 = document.getElementById('h9').innerHTML;
                var h10 = document.getElementById('h10').innerHTML;
                var h11 = document.getElementById('h11').innerHTML;
                var h12 = document.getElementById('h12').innerHTML;
                var h13 = document.getElementById('h13').innerHTML;
                var h14 = document.getElementById('h14').innerHTML;
                var h15 = document.getElementById('h15').innerHTML;
                var h16 = document.getElementById('h16').innerHTML;
                var h17 = document.getElementById('h17').innerHTML;
                var h18 = document.getElementById('h18').innerHTML;
                var hOutTotal = Number(h1) + Number(h2) + Number(h3) + Number(h4) + Number(h5) + Number(h6) + Number(h7) + Number(h8) + Number(h9);
                document.getElementById('hOutTotal').innerHTML = hOutTotal;
                var hGrandTotal = Number(h1) + Number(h2) + Number(h3) + Number(h4) + Number(h5) + Number(h6) + Number(h7) + Number(h8) + Number(h9) +
                    Number(h10) + Number(h11) + Number(h12) + Number(h13) + Number(h14) + Number(h15) + Number(h16) + Number(h17) + Number(h18);
                document.getElementById('hGrandTotal').innerHTML = hGrandTotal;

                var p1 = document.getElementById('p1').innerHTML;
                var p2 = document.getElementById('p2').innerHTML;
                var p3 = document.getElementById('p3').innerHTML;
                var p4 = document.getElementById('p4').innerHTML;
                var p5 = document.getElementById('p5').innerHTML;
                var p6 = document.getElementById('p6').innerHTML;
                var p7 = document.getElementById('p7').innerHTML;
                var p8 = document.getElementById('p8').innerHTML;
                var p9 = document.getElementById('p9').innerHTML;
                var p10 = document.getElementById('p10').innerHTML;
                var p11 = document.getElementById('p11').innerHTML;
                var p12 = document.getElementById('p12').innerHTML;
                var p13 = document.getElementById('p13').innerHTML;
                var p14 = document.getElementById('p14').innerHTML;
                var p15 = document.getElementById('p15').innerHTML;
                var p16 = document.getElementById('p16').innerHTML;
                var p17 = document.getElementById('p17').innerHTML;
                var p18 = document.getElementById('p18').innerHTML;
                var pOutTotal = Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6) + Number(p7) + Number(p8) + Number(p9);
                document.getElementById('pOutTotal').innerHTML = pOutTotal;
                var pGrandTotal = Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6) + Number(p7) + Number(p8) + Number(p9) +
                    Number(p10) + Number(p11) + Number(p12) + Number(p13) + Number(p14) + Number(p15) + Number(p16) + Number(p17) + Number(p18);
                document.getElementById('pGrandTotal').innerHTML = pGrandTotal;

            }

            total()
        }
    };

    xhttp.open("GET", "http://golf-courses-api.herokuapp.com/courses/18300", true);
    xhttp.send();

}

function playertotals() {

    var p1h1 = document.getElementById('p1h1').value;
    var p1h2 = document.getElementById('p1h2').value;
    var p1h3 = document.getElementById('p1h3').value;
    var p1h4 = document.getElementById('p1h4').value;
    var p1h5 = document.getElementById('p1h5').value;
    var p1h6 = document.getElementById('p1h6').value;
    var p1h7 = document.getElementById('p1h7').value;
    var p1h8 = document.getElementById('p1h8').value;
    var p1h9 = document.getElementById('p1h9').value;
    var p1h10 = document.getElementById('p1h10').value;
    var p1h11 = document.getElementById('p1h11').value;
    var p1h12 = document.getElementById('p1h12').value;
    var p1h13 = document.getElementById('p1h13').value;
    var p1h14 = document.getElementById('p1h14').value;
    var p1h15 = document.getElementById('p1h15').value;
    var p1h16 = document.getElementById('p1h16').value;
    var p1h17 = document.getElementById('p1h17').value;
    var p1h18 = document.getElementById('p1h18').value;
    var p1OutTotal = Number(p1h1) + Number(p1h2) + Number(p1h3) + Number(p1h4) + Number(p1h5) + Number(p1h6) + Number(p1h7) + Number(p1h8) + Number(p1h9);
    document.getElementById('p1OutTotal').innerHTML = p1OutTotal;
    var p1GrandTotal = Number(p1h1) + Number(p1h2) + Number(p1h3) + Number(p1h4) + Number(p1h5) + Number(p1h6) + Number(p1h7) + Number(p1h8) + Number(p1h9) +
        Number(p1h10) + Number(p1h11) + Number(p1h12) + Number(p1h13) + Number(p1h14) + Number(p1h15) + Number(p1h16) + Number(p1h17) + Number(p1h18);
    document.getElementById('p1GrandTotal').innerHTML = p1GrandTotal;

}


function addPlayer() {

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
        holecollection += "<div id='column" + c +"'><div class='holenumbertitle' onclick='holeMaps()'>" + c + "</div></div>" ;
    }



    // call the function that builds the holes into the columns
    function collectHoles() {
        var p;
        var h;
        for(p = 1; p <= numplayers; p++) {
            for(h = 1; h <= 18; h++) {
                var playerId = "player" + p + "Hole" + h;
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
    $("#rightcard").html(("<div><div class='totalTitle'>Total</div></div>") + holecollection);




    function buildholes() {
        // add 18 holes to the columns
        for(var p = 1; p <= numplayers; p++ ){
            for(var h = 1; h <= numholes; h++){
                $("#column" + h).append("<div onkeyup='calculateScore(" + p + ")' id='player" + p + "hole" + h + "' class='holebox'></div>");
            }

        }
    }

    collectHoles();

}




function courseInformationCard(){
    var infoRows = ['Gold', 'Blue', 'White', 'Red', 'Handicap', 'Par'];
    var infoColumns = 18;
    var columncollection = "";
    var rowcollection = "";

    // create column of player labels
    for(var pl = 0; pl < infoRows.length; pl++ ){
        rowcollection += "<div id='infoplayer" + pl + "' class='holebox titlebox'>" + infoRows[pl] + "</div>";

    }
    // create golf hole columns before you add holes to them.
    for(var c = infoColumns; c >= 1; c-- ){
        columncollection += "<div id='column" + c +"'><div class='holenumbertitle'>" + c + "</div></div>";
    }
    $("#leftInfoCard").html(rowcollection);
    $("#rightInfoCard").html(columncollection);

    // call the function that builds the holes into the columns
    function collectHoles() {
        var p;
        var h;
        for(p = 1; p <= infoRows.length; p++) {
            for(h = 1; h <= 18; h++) {
                var teeId = infoRows[h] + "Hole" + h;
                var hole = '<div id="holeInputs"><div id = "' + teeId + '" class="holeBox">' + h + '</div></div>';
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
    var theTotal = 0;

    for(var t = 1;t <= numholes; t++) {
        var playerId = "#player" + thePlayer + "Hole" + t;
        theTotal += Number($(playerId).val());
    }
    $("#grand" + thePlayer).html(theTotal);
}






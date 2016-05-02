document.getElementById('firstdiv').innerHTML = "Players!";

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

    var p2h1 = document.getElementById('p2h1').value;
    var p2h2 = document.getElementById('p2h2').value;
    var p2h3 = document.getElementById('p2h3').value;
    var p2h4 = document.getElementById('p2h4').value;
    var p2h5 = document.getElementById('p2h5').value;
    var p2h6 = document.getElementById('p2h6').value;
    var p2h7 = document.getElementById('p2h7').value;
    var p2h8 = document.getElementById('p2h8').value;
    var p2h9 = document.getElementById('p2h9').value;
    var p2total = Number(p2h1) + Number(p2h2) + Number(p2h3) + Number(p2h4) + Number(p2h5) + Number(p2h6) + Number(p2h7) + Number(p2h8) + Number(p2h9);
    document.getElementById('player2').innerHTML = p2total;

    var p3h1 = document.getElementById('p3h1').value;
    var p3h2 = document.getElementById('p3h2').value;
    var p3h3 = document.getElementById('p3h3').value;
    var p3h4 = document.getElementById('p3h4').value;
    var p3h5 = document.getElementById('p3h5').value;
    var p3h6 = document.getElementById('p3h6').value;
    var p3h7 = document.getElementById('p3h7').value;
    var p3h8 = document.getElementById('p3h8').value;
    var p3h9 = document.getElementById('p3h9').value;
    var p3total = Number(p3h1) + Number(p3h2) + Number(p3h3) + Number(p3h4) + Number(p3h5) + Number(p3h6) + Number(p3h7) + Number(p3h8) + Number(p3h9);
    document.getElementById('player3').innerHTML = p3total;

    var p4h1 = document.getElementById('p4h1').value;
    var p4h2 = document.getElementById('p4h2').value;
    var p4h3 = document.getElementById('p4h3').value;
    var p4h4 = document.getElementById('p4h4').value;
    var p4h5 = document.getElementById('p4h5').value;
    var p4h6 = document.getElementById('p4h6').value;
    var p4h7 = document.getElementById('p4h7').value;
    var p4h8 = document.getElementById('p4h8').value;
    var p4h9 = document.getElementById('p4h9').value;
    var p4total = Number(p4h1) + Number(p4h2) + Number(p4h3) + Number(p4h4) + Number(p4h5) + Number(p4h6) + Number(p4h7) + Number(p4h8) + Number(p4h9);
    document.getElementById('player4').innerHTML = p4total;
}




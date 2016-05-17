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




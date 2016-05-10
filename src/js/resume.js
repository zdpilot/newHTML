/**
 * Created by patrickkesler on 5/3/16.
 */
var businesscard = {
    name: 'Patrick Kesler',
    address: '3382 N Dornock Dr. Eagle Mountain, UT 84005',
    phone: '801-633-6373',
    email: 'rimington4987@gmail.com',
    quote: '"The only easy day was yesterday"'
};

function card() {
    document.getElementById('quote').innerHTML= businesscard.quote;
    document.getElementById('name').innerHTML= businesscard.name;
    document.getElementById('address').innerHTML= businesscard.address;
    document.getElementById('phone').innerHTML= businesscard.phone;
    document.getElementById('email').innerHTML= businesscard.email;
}

$(function() {
    $("#pimg1").mouseenter(function() {
        $('#project1').fadeIn(500);
    })
});
$(function() {
    $("#project1").mouseleave(function() {
        $('#project1').fadeOut(500);
    })
});

$(function() {
    $("#pimg2").mouseenter(function() {
        $('#project2').fadeIn(500);
    })
});
$(function() {
    $("#project2").mouseleave(function() {
        $('#project2').fadeOut(500);
    })
});

$(function() {
    $("#pimg3").mouseenter(function() {
        $('#project3').fadeIn(500);
    })
});
$(function() {
    $("#project3").mouseleave(function() {
        $('#project3').fadeOut(500);
    })
});


$("#ana").click(function() {

    $(".hiddenbackground").fadeIn(800);
    $("#hiddendiv1").fadeIn(800);
});


$("#cla").click(function() {

    $(".hiddenbackground").fadeIn(800);
    $("#hiddendiv2").fadeIn(800);

});

$("#airborne").click(function() {

    $(".hiddenbackground").fadeIn(800);
    $("#hiddendiv3").fadeIn(800);

});

$(".glyphicon-remove").click(function() {

    $(".hiddenbackground").fadeOut(400);
    $("#hiddendiv1").fadeOut(400);
    $("#hiddendiv2").fadeOut(400);
    $("#hiddendiv3").fadeOut(400);

    $("#popupvideo").pauseOnExit(true);
});







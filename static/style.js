$(document).ready(function () {

    $("#cat1").text("Frank");
    $("#cat2").text("Sally");
    
    $('#myElem').click(function () {
        var num = parseInt($('#count').text());
        $('#count').text(num + 1);
    });

    $('#myElem2').click(function() {
        var num = parseInt($('#count2').text());
        $('#count2').text(num + 1);
    });
});
   
   
   


$(document).ready(function(){

    $('#aff').dblclick(function(){

        r=$('#R').val();
        g=$('#G').val();
        b=$('#B').val();

        color="rgb("+r+","+g+","+b+")";

        $('#d').css("background-color",color);


    });

    $('#cl').mouseenter(function(){

        $('#R').val("");
        $('#G').val("");
        $('#B').val("");
        $('#d').css("background-color","transparent");

    });

});
$(document).ready(function(){

    $('#rg').val("0");



    $('#rg').change(function(){

        p=$('#rg').val()+"px";

        $('#d').css("padding",p); 

        
    });

    $('#cl').click(function(){
        $('#rg').val("25");
        $('#d').css("padding","25px"); 


    });




});



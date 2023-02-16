$(document).ready(function(){
     
    $('#l1').hide();
    $('#l2').hide();
    $('#l3').hide();
    $('#l4').hide();


    
    $('#aff').click(function(){

        nom=$('#nom').val();
        if(nom=="") $('#l1').show().css("color","red");

        else $('#l1').hide();
    });

    

});
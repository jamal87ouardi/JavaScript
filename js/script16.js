
$('#mail').blur(function(){

    m=$('#mail').val();

    if(m=="")  $('#l3').html("  Obligatoire").show().css("color","red");

    else 
    {
        regex = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/;

        if(regex.test(m))   $('#l3').hide();

        else $('#l3').html("  Format Email invalide").show().css("color","red");

    }
});



$('#nom').blur(function(){

    nom = $('#nom').val();

    if(nom=="")  $('#l1').show().css("color","red").html(" Obligatoire");
    else $('#l1').hide();


});
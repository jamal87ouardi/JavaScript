
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


$('#phone').blur(function(){

    p=$('#phone').val();

    regex = /0[5-7]\d{8}$/;

    if(regex.test(p))   $('#l7').hide();

        else $('#l7').html("  Format Télephone invalide").show().css("color","red");

});


$('#pass').blur(function(){

    pass=$('#pass').val();

    regex = /((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

    if(regex.test(pass))  { 
        $('#l4').hide();
        $('#passco').prop('disabled', false); 
        
        $('#passco').blur(function(){
            if($('#pass').val()==$('#passco').val())  $('#l5').html("  Vérification réussie").show().css("color","green");
            else $('#l5').html("  Vérification échouée").show().css("color","red");
        
        });
    
    }

        else {
            $('#l4').html("  Mot de passe faible !").show().css("color","red");
            $('#passco').prop('disabled', true); 
            $('#l5').hide();    
    }

});






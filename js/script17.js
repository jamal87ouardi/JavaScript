$('#name').blur(function(){

    nom = $('#name').val();

    if(nom=="")   {
        $('#name').css("border-color","red");
        $('#l1').hide();
    }
    else 
    {
        $('#name').css("border-color","transparent");
        regex=/^[A-Z][A-Za-z]+$/;
        if(regex.test(nom))  $('#l1').hide();
        else  $('#l1').show().html(" Doit commencer par lettre majuscule").css("color","red");
       
    }

});

$('#pre').blur(function(){

    prenom = $('#pre').val();

    if(prenom=="")   {
        $('#name').css("border-color","red");
        $('#l2').hide();
    }
    else 
    {
        $('#pre').css("border-color","transparent");
        regex=/^[A-Z][A-Za-z]+/;
        if(regex.test(prenom))  $('#l2').hide();
        else  $('#l2').show().html(" Doit commencer par lettre majuscule").css("color","red");
       
    }

});
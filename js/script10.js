
function formatter() {

    // Entrées
    phrase = $('#ph').val();
    taille = parseInt($('#t').val());
    couleur = $('#c').val();
    gras=$('#g').prop('checked');


    $('#r').html(phrase);

    $('#r').css("font-size",taille);

    if(gras) $('#r').css("font-weight","bold");
    else  $('#r').css("font-weight","normal");

    
    switch(couleur) {
        case "Bleu":
          $('#r').css("color","blue");
          break;

        case "Vert":
            $('#r').css("color","green");
          break;

        case "Orange":
            $('#r').css("color","orange");
          break;

        case "Rouge":
            $('#r').css("color","red");
          break;

        default:
            
      } 



}
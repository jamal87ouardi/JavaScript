
$(document).ready(function(){

    $('#angle').focus(function(){

        $('#angle').css("border-color","red");
    });

    $('#angle').blur(function(){

        $('#angle').css("border-color","transparent");
    });

    $('#aff').click(function(){

        ang = $('#angle').val();

        t="rotate("+ang+"deg)";

        $('#d').css("transform",t);
        $('#d').css("transition","4s");


        bag = $('#c').val();

        switch(bag) {
            case "Bleu":
              $('#d').css("background-color","blue");
              break;
    
            case "Vert":
                $('#d').css("background-color","green");
              break;
    
            case "Orange":
                $('#d').css("background-color","orange");
              break;
    
            case "Rouge":
                $('#d').css("background-color","red");
              break;
    
            default:
                
        } 


    });

    $('#cl').mouseenter(function(){

        
        $('#d').css("background-color","transparent");

    });

});
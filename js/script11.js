
function formatterDIV() {

    a=$('#a').val()+"px";
    pad = $('#pad').val()+"px";
    bag = $('#c').val();


    $('#d').css("border-radius",a);
    $('#d').css("padding",pad);


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

}
function solutions() {

    // Entrées

    a = parseFloat($('#a').val());
    b = parseFloat($('#b').val());
    c = parseFloat($('#c').val());

    // Traitement

    delta = Math.pow(b,2) - 4*a*c;

    inter = "";
    x1="";
    x2="";

    if(delta < 0) {

        inter="Pas de solutions réelles";
        $('#x1').html("");
        $('#x2').html("");

    }

    else {
        if(delta==0) {
            inter="Il y a une solution ";
            x1 = -b/(2*a);
            $('#x1').html(x1.toFixed(2));
            $('#x2').html("");
            

        }
        else {

            inter="Il y a 2 solutions ";
            x1 = (-b-Math.sqrt(delta))/(2*a);
            x2 = (-b+Math.sqrt(delta))/(2*a);
            $('#x1').html(x1.toFixed(2));
            $('#x2').html(x2.toFixed(2));

            

        }


    }

    $('#delta').html(delta.toFixed(2));
    $('#inter').html(inter);
    
    


}
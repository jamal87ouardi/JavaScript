


function cacluler_imc() {

    // Entrées
    var x = document.getElementById("in_poids");

    var a=parseFloat(x.value);

    
    var b = parseFloat(document.getElementById("in_taille").value);

    //Traitement
    var c ;
    var m = "";

    if(document.getElementById("r_cm").checked==true) {

        b=b/100;
        c = (a/Math.pow(b,2)).toFixed(2);
    }
    else {
        c = (a/Math.pow(b,2)).toFixed(2);
    }

    if(c<18.5) {

        m="Insuffisance pondérale";
    }
    else {

        if(c<24.9)  { m = "Pois normal" ;}
        else {

             if(c<29.9)   { m = "Surpoids"; }
            else {

                m = "Obésité";


            }


        }

    }

    //Sortie
    document.getElementById("resultat").innerHTML = c;
    document.getElementById("msg").innerHTML = m;

}



function clear_imc() {
    document.getElementById("in_poids").value = "";
    document.getElementById("in_taille").value = "";
    document.getElementById("resultat").innerHTML="";
    document.getElementById("msg").innerHTML="";
}
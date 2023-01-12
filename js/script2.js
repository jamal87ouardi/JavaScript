function calculer_tav() {
    
    var a = parseInt(document.getElementById("puissance").value);

    var b = document.getElementById("diesel").checked;

    tav=0;
    
    if(b==true) {

        if(a==5) tav=600;
        else {
                if(a==6) tav=700;
                else {
                    if(a==7) tav=900;

                    else {
                        if(a==8) tav=1000;

                    }

                }
        }


    }

    else {

        if(a==5) tav=650;
        else {
                if(a==6) tav=750;
                else {
                    if(a==7) tav=950;

                    else {
                        if(a==8) tav=1100;

                    }

                }
        }



    }

    document.getElementById("tav").innerHTML=tav;

}

function clear_tav() {

document.getElementById("puissance").value ="";
document.getElementById("diesel").checked=true;
document.getElementById("tav").innerHTML="";


}
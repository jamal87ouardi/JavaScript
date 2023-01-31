


function calculer_tav() {

    a = parseInt($('#puissance').val());

    b = $('#diesel').prop('checked');

    tav=0;
    
    if(b) {

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

    $('#tav').html(tav);

    



}

function clear_tav() {
    c="";
    $('#tav').html(c);

}



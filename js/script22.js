$(document).ready(function() {

    url = 'https://run.mocky.io/v3/8e9973da-3c15-4ca3-a753-dd541f05f3d2';
    
    sel=$('#sel_tv');

    var d 

    $.getJSON(url, function(data) {

            d=data

            $.each(d.tvs, function (cle, valeur) {

                op='<option value="'+valeur.nom+'">'+ valeur.nom+'</option>'
                sel.append(op);
            
            });
             
    });

    $('#btn').click(function() {

        sel=$('#sel_tv').val();
        q=$('#txt_qt').val();

        $.each(d.tvs, function (cle, valeur) {

            if(sel==valeur.nom) {

                row =  '<tr>'+
                '<td style="width: 100px;">'+valeur.nom+'</td>'+
                '<td style="width: 100px;">'+q+'</td>'+
                '<td style="width: 100px;"><img src="'+valeur.image+'"></td>'+
                '<td style="width: 100px;"></td>'+
            '</tr>';

            $('#tab_tv').append(row);
                

            }
        
        });




    } );


});

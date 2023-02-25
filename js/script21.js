$('#btn').click(function(){

    url = 'https://run.mocky.io/v3/846f05a9-3c44-4c87-a051-8b2bc0d57e20';

    sel=$('#sel');

    $.getJSON(url, function(data) {
        
            $.each(data.cars, function (cle, valeur) {

                op='<option>'+ valeur.make+' '+valeur.model+'</option>'
            
                sel.append(op);
            
        });
    
   });   

});
 
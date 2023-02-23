


var data= {

    "tv":[
          { "nom":"Samsung X9","prix":4000,"taille":65,"image":"images/img1.jpg"},
         { "nom":"LG 320","prix":5000,"taille":67,"image":"images/img2.jpg"},
         { "nom":"Siera","prix":3900,"taille":64,"image":"images/img3.jpg"}     
     ]
  }

$(document).ready(function() {
    
    d = $('#sel_tv');
    //d.empty();
    $.each(data.tv, function (cle, valeur) {

        op= '<option>'+valeur.nom+'</option>';
        
        d.append(op);
    });
});

    //url="http://localhost:122/json/TV.json"

    //$.getJSON(url, function (data) {

   /* url = 'https://run.mocky.io/v3/5a1696b2-ab86-4964-b969-ce824d1db273'
    
    $.getJSON(url, function(data) {
        
            $.each(data.tvs, function (cle, valeur) {

            op= '<option>'+valeur.nom+'</option>';
            
            d.append(op);
            
        });
    
});   */






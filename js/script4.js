function calculer_ptr() {
// Entrées :
var nom=document.getElementById("np").value;
var type1=document.getElementById("done").checked;
var type2=document.getElementById("dtwo").checked;
var qt=parseInt(document.getElementById("quantite").value);
var fidele=document.getElementById("fidel").checked;


//Traitement :

var prix=0;
if(type1==true) prix=3500*qt;
else {
    if(type2==true) prix=4000*qt;
    else prix= 5200*qt;

}

if(fidele==true) prix=prix*0.9;
//Sorties
document.getElementById("client").innerHTML=nom;
document.getElementById("total").innerHTML=prix;




}


function clear_inputs() {
    document.getElementById("np").value="";
    document.getElementById("done").checked=true;
    document.getElementById("quantite").value="";
    document.getElementById("fidel").checked=false;
    document.getElementById("client").innerHTML="";
    document.getElementById("total").innerHTML="";


}
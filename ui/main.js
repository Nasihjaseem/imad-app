
var demo=document.getElementById("butn");
var counter=0;
demo.onclick=  function() {
counter=counter+1;
    document.getElementById("inc").innerHTML = counter.toString();
}
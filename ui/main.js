
var button=document.getElementById("butn");
button.onclick=  function() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("inc").innerHTML = xhttp.responseText;
    }
};
};
var bn = document.getElementById("bn");
bn.onclick=function(){
    xmlhttp = new XMLHttpRequest();
          
};
  

var demo=document.getElementById("counter");
var counter=0;
demo.onclick=  function() {
counter=counter+1;
    document.getElementById("inc").innerHTML = counter.toString();
}
};

var button=document.getElementById("butn");
button.onclick=  function() {
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
            var counter=request.responseText;
            document.getElementById("inc").innerHTML = counter.toString();
             alert(counter);
            }
        }
    }
    var inb=0;
   
    
}
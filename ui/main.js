
var button=document.getElementById("butn");
button.onclick=  function() {
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById("inc");
            span.innerHTML = counter.toString();
             console.log(counter);
            }
        }
    }
    var inb=0;
   
    
}
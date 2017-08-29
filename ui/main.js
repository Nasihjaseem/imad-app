
var button=document.getElementById("butn");
button.onclick=  function() {

//create object request
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.onreadyState===XMLHttpRequest.DONE){
        if(request.status===200){
            counter=request.responseText;
            var span=document.getElementById("inc");
            span.innerHTML=counter.toString();
        }
    }
}
          
};
  
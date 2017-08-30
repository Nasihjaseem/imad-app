
var button=document.getElementById("butn");
button.onclick=  function() {

//create object request
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
           var counter=request.responseText;
            var span=document.getElementById('inc');
            span.innerHTML=counter.toString();
        }
    }
};
request.open('GET','http://nasihjzofficial.imad.hasura-app.io',true);
request.send(null);
};

var button=document.getElementById("butn");
button.onclick=  function()
{
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
        request.open('GET','http://nasihjzofficial.imad.hasura-app.io/counter',true);
        request.send(null);
};

var nameInput= document.getElementById('name');
var name=nameInput.value;
var submit = document.getElementById('sub');

submit.onclick=function(){
    //function should make a request to the server. capture it and render it on the page.
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>'+ names[i] +'<li>';
    }
document.getElementById("nameList").innerHTML=list;

    alert("hyy");
};
document.getElementById("suv");
suv.onclick=function(){
    alert("blablabla")
}
alert("blablablabla");

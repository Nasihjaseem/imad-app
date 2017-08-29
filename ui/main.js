console.log('Loaded!');
var button=document.getElementById('counter');



button.onclick= function(){
    counter=counter+1;
    document.getElementById('count').innerHTML=counter.toString();
}
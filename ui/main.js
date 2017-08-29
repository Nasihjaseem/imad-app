console.log('Loaded!');
var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){


    counter=counter + 1;
    var count=document.getElementById('inc');
    count.innerHTML= counter.toString();
}

 var current = document.querySelector('.current');
 var next = document.querySelector('.next');
 var counter = 0;

 function startCounter(){
     var interval = setInterval(animate, 1000);
 }

 function animate(){
    counter ++;
    current.textContent = counter;
     next.classList.add('animate');
     setTimeout(function(){
         next.classList.remove('animate');
     }, 500);
 }
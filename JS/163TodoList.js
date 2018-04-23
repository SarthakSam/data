var lis=document.querySelectorAll("li");
/*lis.forEach(function(li){
    li.addEventListener("mouseover",function(){
        li.style.color="blue";
    });
    li.addEventListener("mouseout",function(){
    	li.style.color="black";
    });
    li.addEventListener("click",function(){
    	li.style.setProperty("text-decoration","line-through");
    });
});*/


lis.forEach(function(li){
    li.addEventListener("mouseover",function(){
        li.classList.toggle("green");
    });
    li.addEventListener("mouseout",function(){
    	li.classList.toggle("green");
    });
    li.addEventListener("click",function(){
    	li.classList.toggle("done");
    });
});
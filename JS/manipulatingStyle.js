var item=document.getElementsByClassName("highlight")[0];

item.style.background="#8023ff";
item.style.color="#ffffff";	
item.style.fontSize="100px";
item.style.border="10px solid #ff8912";
item.style.marginTop="100px";		

console.log(item.textContent);
console.log(item.innerHTML);


var list=document.querySelector("ul");
list.innerHTML="<li>Apple</li><li>Banana</li>"

var img=document.querySelector("img");
var prevSrc=img.getAttribute("src")
console.log(prevSrc);
var toggle=false;
setInterval(function(){
    if(!toggle)
   img.setAttribute("src","/home/sarthak/again/resume/fixedPhoto.jpg");    
    else
   img.setAttribute("src",prevSrc);
   toggle=!toggle; 	
},1000);


document.querySelector("a").setAttribute("href","https://www.facebook.com");



var h1=document.querySelector("h1");
h1.style.color="pink";

var body=document.querySelector("body");
isBlue=false;
setInterval(function(){
	if(!isBlue){
		body.style.background="blue";
	}
	else{
		body.style.background="#ffffff";
	}
	isBlue=!isBlue;
},1000);
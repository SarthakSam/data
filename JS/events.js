// var button=document.querySelector("button");
// button.addEventListener("click",function(){
// 	console.log("button clicked");
// });

// function func(){
// 	console.log("button clicked using action");
// }

// var button=document.querySelector("button");
// var p=document.querySelector("p");
// button.addEventListener("click",function(){
// 	p.textContent="Someone just clicked the button";
// });


var h1=document.querySelector("h1")
h1.addEventListener("click",function(){
	h1.style.color="orange";
});

var ul=document.querySelector("ul");
ul.addEventListener("click",function(){
	console.log("ul clicked");
	});

var li=document.getElementsByTagName("li");
	for(var i=0;i<li.length;i++){
		li[i].addEventListener("click",function(){
			console.log(this.textContent,"was clicked");
		});
	}	
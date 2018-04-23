// var button=document.querySelector("button");
// console.log("hello");
// button.addEventListener("submit",function(){
// 	console.log("hi");	
// 	 var color=document.getElementByName('color').textContent;
// 	 console.log(color);
// });
// Silly mistake i was malking is that i was  calling submit event on button rather than form


// var button=document.querySelector("button");
// button.addEventListener("click",function(){
// 	if(document.body.style.background=="white")
//   document.body.style.background="purple";
//     else
//     	document.body.style.background="white";
// });



 var form=document.querySelector("form");
 form.addEventListener("submit",function(e){
 	e.preventDefault();
 	var color=document.getElementsByName('color')[0].value;
 	// console.log(color);
 	document.body.style.background=color;
 	// alert(color);
 });
// $('#submit').click(function(){
// 	alert("clicked submit");
// })

// $('button').click(function(){
// 	$(this).css("backgroundColor","yellow");
// });

// var list=$('button');
// // for(var i=0;i<list.length;i++){
// //      list[i].click(function(){
// //           func(i+1);
// //      });
// // }

// console.log(list.text());
// list.click(func);
// function func(){
// 	console.log($(this).text()+" called");
// }


// $('input').keypress(function(event){
// 	console.log("keypress",event.charCode,event.key,event.keyCode,event.which);
// });

// $('input').keydown(function(event){
// 	console.log("keydown",event.charCode,event.key,event.keyCode,event.which);
// });


// $('input').keyup(function(event){
// 	console.log("keyup",event.charCode,event.key,event.keyCode,event.which);
// });


// $('input').keypress(function(event){
// 	if(event.which===13)
// 		alert("You pressed enter");
// });


$("button").on("click",function(event){
	$(this).css("backgroundColor","red");
	console.log('clicked',event,this);
});
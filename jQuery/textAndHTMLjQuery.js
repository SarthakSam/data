console.log($("body").text());   //Similar to textcontent in vanilla js
console.log($("ul").text()); 
console.log($("li").text()); 
$("h1").text("new text!!!!!");
 $("li").text("Mango is the , best")


console.log($("body").html());

$('img').attr("src","/home/sarthak/JS/barcelona.jpg");
// $('input').attr("type","number");

console.log($('input').val());
$('input').val("sub");
console.log($('select').val());

$('input').val($('select').val());
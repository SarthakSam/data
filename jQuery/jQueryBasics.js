$("#pressMe").click(function(){
	$("body").css("background","yellow");
    console.log("called");
    $("img").fadeOut("3000",function(){
    	$("this").remove();
    });
});

var lis=$("li");
for(var i=0;i<lis.length;i++)
    console.log(lis[i]);
$("ul li").css("color","blue");


var styles={
	background: "pink",
	fontSize: "60px",
	border: "2px solid red"
};

$("h1").css(styles);

$("img").css({
	border: "10px solid red",
	height: "500px"
});	


//$("li h1").css("fontSize","50px");  Doesnt work;
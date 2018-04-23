$('i').on('click',function(){
	$('input').toggleClass('displayTextBox');
});
var isEven=false;
$('input').on('keydown',function(event){
    if(event.which == 13&&$(this).val()!="" ) {
      event.preventDefault();     
      addTodo($(this).val());
      $(this).val("");
      color();
     }
});



function addTodo(todo){
     $('main').append($('<div><i class="far fa-trash-alt"></i><div class="todoContent">'+todo+'</div></div>'));
     var divs=$('main div');
	    $(divs[divs.length-1]).on('click',function(){
		   $(this).toggleClass('todoComplete');
	      });
        $(divs[divs.length-2]).on('mouseover',function(){
        	$(this).find("i").on("click",function(){
        		$(this).parent().fadeOut(500,function(){
        		 	$(this).remove();
        		});
        		color();
        	})
        }); 
}


// $('main').on('click','div',function(){
//  $(this).toggleClass('todoComplete');
// });


function color(){
	var todo=$('.todoContent');
	for(var i=0;i<todo.length;i++){
		if(i%2==0){
			// console.log("even");
		   $(todo[i]).css("background","rgb(256, 256, 256)"); 
		}
		else{
			// console.log("odd");
           $(todo[i]).css("background","rgb(240, 240, 240)"); 
		}
	}
}






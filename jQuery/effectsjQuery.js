$('button').click(function(){
	$('div').fadeToggle(5000,function(){
		console.log("done");
		// $(this).remove();
	});
	$('.slide').slideToggle(3000,function(){
		console.log("slided");
	})
});





//Same can be done to fadeIn fadeOut any element
//Same can be done to slideIn slideOut any element
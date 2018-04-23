movie=[];
var object={};
object.title="In Bruges";
object.rating= 5;
object.hasWatched=true;
movie.push(object);

object={};
object.title="Frozen";
object.rating= 4.5;
object.hasWatched=false;
movie.push(object);

object={};
object.title="Mad Max Fury Road";
object.rating= 5;
object.hasWatched=true;
movie.push(object);

object={};
object.title="Les Miserables";
object.rating= 3.5;
object.hasWatched=false;
movie.push(object);

movie.forEach(function(object){
	if(object.hasWatched){
		console.log("You have seen \"",object.title,"\" - ",object.rating);
	}
	else{
         console.log("You have not seen \"",object.title,"\" - ",object.rating);
	}
});
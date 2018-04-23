var string= prompt("are we there yet?");
while( string.indexOf("yes")===-1 && string.indexOf("yeah")===-1){
	string= prompt("are we there yet?");
}
console.log("yeah!!Finally we made it");
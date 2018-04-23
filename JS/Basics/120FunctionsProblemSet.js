function isEven(n){
	if(n%2===0){
		return true;
	}
	return false;
}


function factorial(n){
	if(n<2)
		return 1;
	return n*factorial(n-1);
}

var kebabToSnake=function(str){
	// for(var i=0;i<str.length;i++){
 //           if(str[i]=='-'){
 //           	str=str.substring(0,i)+'_'+str.substring(i+1);
 //           }
	// }
	var newstr=str.replace(/-/,"_");
	return str;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(7));

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("hello-world----oye-"));


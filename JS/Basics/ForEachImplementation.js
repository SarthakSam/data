function forEach(arr,myFunc){
       for(i=0;i<arr.length;i++){
       	myFunc(arr[i]);
       }
}



function fun(i){
     console.log("hello ",i);
}

var arr=[10,12,23,34];
forEach(arr,function(i){
	console.log("aio",i);
});


Array.prototype.myForEach= function(func){
        for(var i=0;i<this.length;i++){
        	func(this[i]);
        }
}

var arr=[10,12,23,34];

arr.myForEach(function(i){
      console.log(i);
})

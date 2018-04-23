function sing(){
	console.log("Twinkle twinkle little star");
    console.log("how I wonder what you are");
}

//setInterval(sing,1000);
// Set Interval returns a value which is used to stop its execution using clearInterval.
var n=prompt("Enter no.");
for(var i=0;i<n;i++){
	var str="";
    for(var j=0;j<n;j++){
        if(i==0||j==0||i==j||i+j==n-1||i==n-1||j==n-1){
            str+="#";
        }
        else{
        	str+=" ";
        }
    }
    console.log(str);
}


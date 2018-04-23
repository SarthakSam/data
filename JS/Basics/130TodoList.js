setTimeout(function(){ 
   var choice=1;
   var arr=[];
while(choice!=="quit"){
    choice=prompt("What would u like to do");
    if(choice==="new"){
        var newTodo=prompt("Enter Todo");
        arr.push(newTodo);
    }
    else if(choice==="list"){
       console.log(arr);
    }
    else if(choice==="quit"){
    	break;
    }

}
 },3000);
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
       console.log("****************");
        arr.forEach(function(element,index){
        console.log(index,": ",element);
       });
        console.log("****************");
    }
    else if(choice==="delete"){
         var Todo=prompt("Enter Todo to be deleted");
         var index=arr.indexOf(Todo);
         if (index > -1) {
             arr.splice(index, 1);
}
    }

}
 },3000);
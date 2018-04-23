var buttons=document.querySelectorAll("button");
var spans=document.querySelectorAll("span");
var input=document.getElementsByName("number")[0];

buttons.forEach(function(element,index){
	element.addEventListener("click",func.bind(this,index));
});


input.addEventListener("input",function(){
	spans[spans.length-1].textContent=this.value;
	checkColor();
})



function func(i){
	  var isPossible=isMovePossible();
	  
	  if(isPossible&&(i==0||i==1)){
            spans[i].textContent=parseInt(spans[i].textContent,10)+1;
        }
         else if(i==2){
            spans[0].textContent=0;
            spans[1].textContent=0;
         }
         checkColor();
         console.log(i);
   }
	
        function checkColor(){
        	var limit=parseInt(spans[spans.length-1].textContent,10);
	   	    var val1=parseInt(spans[0].textContent,10),val2=parseInt(spans[1].textContent,10);
              if(limit>val1&&limit>val2){
	   	          for(i=0;i<2;i++)
                      if(spans[i].style.color=="green")
                         spans[i].style.color="black";
	   	          }
              else{
 				if(limit==val1){
              		spans[0].style.color="green";
           		}
	            if(limit==val2){
	              	spans[1].style.color="green";
	            }
	           } 
        }

       function isMovePossible(){
       	   var limit=parseInt(spans[spans.length-1].textContent,10);
	   	   var val1=parseInt(spans[0].textContent,10),val2=parseInt(spans[1].textContent,10);
	   	   if(limit>val1&&limit>val2){
               return true;
	   	   }
           return false;

       }
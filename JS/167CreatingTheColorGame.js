function getRandomColor(){
	var no1=Math.random(),no2=Math.random(),no3=Math.random();
	no1*=255;
	no2*=255;
	no3*=255;
	var obj={};
	obj["arg1"]=Math.floor(no1);
	obj["arg2"]=Math.floor(no2);
	obj["arg3"]=Math.floor(no3);
	return obj;
}

	function setNewColor(){
       var spans=document.querySelectorAll("span");
       var obj=getRandomColor();
       spans.forEach(function(span,index){
           span.textContent=obj["arg"+(index+1)];
       });
       return obj;
	}

	function changeColorOfDiv(i,obj){
       var div=document.querySelectorAll(".choice div")[i];
           div.style.background=str(obj);
        if(div.classList.contains("display"))
           div.classList.toggle("display"); 
	}


    function setDivs(difficulty){
        var count=2;
        if(difficulty)
        	count+=3;
        var pos=Math.floor(Math.random()*count);
        for(var i=0;i<=count;i++){
        	if(i==pos){
                changeColorOfDiv(i,ansColor);
        	}
        	else{
               changeColorOfDiv(i,getRandomColor());
        	}
        }
        return pos;
    }
      function str(obj){
        var arg1=obj["arg1"],arg2=obj["arg2"],arg3=obj["arg3"];
        return "rgb("+arg1 +", "+arg2+", "+arg3 +")"; 
      }

      function isCorrect(div,i){
      	var li=document.querySelector(".status");
      	var colors=str(ansColor);
      	if(div.style.background==colors){
      		li.textContent="Correct";
           var divs=document.querySelectorAll(".choice div");
           for(var index=0;index<divs.length;index++){
           	divs[index].style.background=colors;
           }
           document.querySelector("header").style.background=colors;
      	}
      	else{ 
      		li.textContent="Incorrect";
            div.classList.toggle("display");  
      	}
      }

      function newAndDifficulty(index,difficultyArr){
                           var refresh=false;
                 switch(index){
					case 0:  	refresh=true;
				         break;
	     			case 3:  if(difficultyArr[0]){
	     				        difficultyArr[0]=false;
	                            refresh=true;
	                            document.querySelectorAll(".choice")[1].classList.toggle("display");
	     			          }    
	     			      break;
     			    case 4:     if(!difficultyArr[0]){
                                difficultyArr[0]=true;
	                            refresh=true; 
	                            document.querySelectorAll(".choice")[1].classList.toggle("display");
	                             }           
     			    	   break;
     			    default:	break;	   	    
				}
				if(refresh){
				ansColor=setNewColor();
				document.querySelector(".status").textContent="";
			    setDivs(difficultyArr[0]);
               }
     }



     var ansColor;
	window.onload=function(){
		var difficulty=[true];
	    ansColor=setNewColor();
	    setDivs(difficulty[0]);
	    
	    var divs=document.querySelectorAll(".choice div");
        for(var i=0;i<divs.length;i++){
        	divs[i].addEventListener("click",isCorrect.bind(this,divs[i],i));
        }
	    var lis=document.querySelectorAll(" li");
	    for(var i=0;i<lis.length;i++){
	    	lis[i].addEventListener("click",newAndDifficulty.bind(this,i,difficulty));
	    }
        


	}







     

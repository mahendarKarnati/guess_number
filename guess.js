        let inpValue=document.getElementById("inp");
        let result=document.getElementById("result");
        let randomNum=Math.ceil(Math.random()*100);
        let countElement=document.getElementById("countt");
        let reload=document.getElementById("reload");
        let count=9;
        function guessNum(){
            if(count>0){
            countElement.textContent=count+" more chances";
                count-=1;
        let inputV=parseInt(inpValue.value);
        if(inputV<randomNum){
            result.textContent="Too small! Try Again!";
            result.style.backgroundColor="blue";
        }
        else if(inputV>randomNum){
            result.textContent="Too High! Try Again!";
            result.style.backgroundColor="blue";
        }
        else if(inputV===randomNum){
            result.textContent="Congratulations you got it right!";
            result.style.backgroundColor="green";
            count=0;
            reload.style.display="block";
            countElement.style.display="none";

        }
    else{
        result.textContent="Wrong input try again!";
        result.style.backgroundColor="red";
    }

}
else{
            result.textContent="Game Over!";
            result.style.backgroundColor="black";
            reload.style.display="block";
            countElement.style.display="none";
            
        }
        }
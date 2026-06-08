let newbtn=document.querySelector("#newbtn");
let resetBtn=document.querySelector("#reset");
let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turn0=true;
const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>
{
    msg.innerText=`CONGRATULATION , WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!=""&&posval2!=""&&posval3!=""){
            if(posval1===posval2&&posval2===posval3){
                showwinner(posval1);
            }
        }

    }

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
        turn0=false;
        }
        else{
            turn0=true;
            box.innerText="X";
        }
        box.disabled=true;
        checkwinner();
    });

});
newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
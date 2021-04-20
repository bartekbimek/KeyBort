function onBtnDown(e){
    //console.log(e.keyCode); 
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    let x = document.querySelectorAll("[key='"+e.keyCode+"']");
    document.querySelector("#lastBtn").innerHTML = e.key;
    for(let i = 0; i<x.length; i++){
        x[i].classList.remove("checked");
        x[i].classList.add("pressed");
    }
}
function onBtnUp(e){
    //console.log(e.keyCode); 
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    let x = document.querySelectorAll("[key='"+e.keyCode+"']");
    (e.keyCode == 44) ? (document.querySelector("#lastBtn").innerHTML = e.key) : false;
    for(let i = 0; i<x.length; i++){
        x[i].classList.remove("pressed");
        x[i].classList.add("checked");
    }
}
function kbReset(){
   checked = document.querySelectorAll(".checked"); 
   for(i = 0; i < checked.length; i++){
        checked[i].classList.remove("checked");
   }
}

lastButton = document.querySelector("#lastButton");
document.addEventListener('keydown', onBtnDown);
document.addEventListener('keyup', onBtnUp);
document.querySelector(".kb-reset").addEventListener("click", kbReset);
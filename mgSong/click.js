
document.querySelectorAll(".listBody ul").forEach(function(ul){
    ul.addEventListener("click", function(){
        ul.className = ul.className == "" ? "selected" : "";
    });
});

const select = document.querySelector("#selectBtn");
function init(){
    select.addEventListener("click",function(){
        let temp;
        console.log("click");
        if(document.querySelectorAll("ul.selected").length > 0){
            temp = document.querySelectorAll("ul.selected");
            console.log(temp);
        } else{
            temp = document.querySelectorAll(".listBody ul");
            console.log(temp);
        }        
        let count = temp.length;
        let random = Math.floor(Math.random()*count);
        
        document.querySelector("#result").innerHTML = 
        temp[random].querySelector("li").innerText +'에서 식사합시다.';
    });
}

init();
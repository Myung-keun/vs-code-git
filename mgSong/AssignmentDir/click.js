//listBody 클래스에서 ul태그의 클래스 이름이 
//있으면 -> 공백으로, 없으면 ->selected로 변경
document.querySelectorAll(".listBody ul").forEach(function(ul){
    ul.addEventListener("click", function(){
        ul.className = ul.className == "" ? "selected" : "";
    });
});

const select = document.querySelector("#selectBtn");
const add = document.querySelector("#addBtn");
const insert = document.querySelector(".insert");
const addResult = document.querySelector("#addResult");

//select버튼에 click이벤트시 작동할 함수.
function init(){
    select.addEventListener("click",function(){
        let temp;
        console.log("click");
        //선택된 항목이 있는 경우 선택된 항목 반영.
        if(document.querySelectorAll("ul.selected").length > 0){
            temp = document.querySelectorAll("ul.selected");          
        } 
        //선택된 항목이 없는 경우 전체 항목이 반영
        else{
            temp = document.querySelectorAll(".listBody ul");
        }
        let count = temp.length;
        let random = Math.floor(Math.random()*count);
        //0~1사이 랜덤값을 올림함수로 1로 만들어준 후에 선택된 갯수만큼 곱해줌.
        
        document.querySelector("#result").innerHTML = 
        temp[random].querySelector("li").innerText +'에서 식사합시다.';
    });
    //랜덤숫자 번째 선택된 항목의 첫번째 li항목의 내용(식당이름) 반환.
}

function addEvent(){
    const ul = document.createElement("ul");
    const span = document.createElement("span");

    ul.className = "inserted";
    insert.appendChild(ul);

    //span.innerText = "정보추가 항목에 내용을 입력하고 Enter를 누르세요."
    //addResult.appendChild(document.createElement("br"));
    //addResult.appendChild(span);   
    console.log("addBtn is clicked");
}

function clickAdd(){
    add.addEventListener("click",addEvent);
}

init();
clickAdd();
const li = document.querySelectorAll("li");
li.forEach(function(li){
    li.addEventListener("click", function(){
        li.className = li.className == "" ? "menuSelected" : "";
    });
});

function clickTr(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "selected" : "";
    });
    return tr;
}

/*선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/ 
const RanSelectRes = document.querySelector("#clicks");
RanSelectRes.addEventListener("click", ranSelect);

function ranSelect(){
    let temp;
    if (document.querySelectorAll("tr.selected").length > 0) {
        temp = document.querySelectorAll("tr.selected");
    }
    else {
        temp = document.querySelectorAll("tbody tr");
    }
    let count = temp.length;
    let random = Math.floor(Math.random() * count);
    alert("\n식당이름: "+ temp[random].querySelector("td").innerText + " \n위치: " + temp[random].querySelectorAll("td")[1].innerText +"\n회사에서 "+ temp[random].querySelectorAll("td")[2].innerText + "거리");
}


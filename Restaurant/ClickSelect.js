const li = document.querySelectorAll("li");
li.forEach(function(li){
    li.addEventListener("click", function(){
        
        li.className = li.className == "" ? "menuSelected" : "";
        if(li.className=="menuSelected" && li.id=="Korean"){  
            tbody.innerHTML='';        
            console.log("한식 선택됨");
            const loadedMenu = localStorage.getItem('resInfo');
            const parsedMenu = JSON.parse(loadedMenu);
            
            for(let i=0; i<parsedMenu.length; i++){
                if(parsedMenu[i].resMenu=="한식"){
                    console.log(parsedMenu[i].resMenu);
                    sortTable(makeResObj(parsedMenu[i].resName, parsedMenu[i].resLoca, parsedMenu[i].resDis, parsedMenu[i].resMenu))                   
                }
            }
        } else{
            tbody.innerHTML='';
        }
    });
});

function sortTable(selectedInfo){
    const tbody = table.querySelector("tbody");
    let tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const delBtn = document.createElement("button"); //메뉴 옆에 삭제버튼 생성예정
    let newId = 1;

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(delBtn);

    tr.id = newId; //생성되는 행에 id순서 추가 -> 삭제시 id로 LS에 저장하기 위해.
    td1.innerText = selectedInfo.resName;
    td2.innerText = selectedInfo.resLoca;
    td3.innerText = selectedInfo.resDis + "분";
    td4.innerText = selectedInfo.resMenu;
    
    delBtn.innerText = "X";

    delBtn.addEventListener("click", deleteRes);
    tr = clickTr(tr);
}

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

const table = document.querySelector(".mainTable");
const tbody = table.querySelector("tbody");
    
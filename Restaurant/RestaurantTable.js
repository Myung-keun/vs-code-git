

let storageValue = [];

function printTable(resObj) {
    //loadLS에서 JSON.parse()로 LS의 내용을 전달받았을때, tbody에 tr&td*3 한 세트 생성 및 출력
    const tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const delBtn = document.createElement("button"); //메뉴 옆에 삭제버튼 생성예정

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4); 
    tr.appendChild(delBtn);

    td1.innerText = resObj.resName;
    td2.innerText = resObj.resLoca;
    td3.innerText = resObj.resDis + "분";
    td4.innerText = resObj.resMenu;
    
    delBtn.innerText = "X";
    
    let tempObj = makeResObj(resObj.resName, resObj.resLoca, resObj.resDis, resObj.resMenu)
    storageValue.push(tempObj);
    
    //거리순 내림차순 정렬 함수
    storageValue.sort(function(a,b){
        return a["resDis"] - b["resDis"];
    })

    delBtn.addEventListener("click", deleteRes);
    tr = clickTr(tr);
    //+버튼으로 생성과 동시에 생성되는 element에 click이벤트가 활성화될 수 있도록 지정해줌.
}

function makeResObj(name, loca, distance ,menu){
    return {
        resName: name,
        resLoca: loca,
        resDis: distance,
        resMenu: menu
    };
}


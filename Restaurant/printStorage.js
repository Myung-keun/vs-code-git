/* localStorage에서 value 값을 전달받아서 html파일에 출력해줌. */



//임시로 LS에 세 가지 value값들 저장해봄.
const name = 'LS_식당이름';
const loca = 'LS_식당위치';
const menu = 'LS_식당메뉴';

let storageValue = [];
const tempObj = {
    resName: name,
    resLoca: loca,
    resMenu: menu
};
storageValue.push(tempObj);
storageValue.push(tempObj);

function printTable(LSvalue){
    //loadLS에서 JSON.parse()로 LS의 내용을 전달받았을때, tbody에 tr&td*3 한 세트 생성 및 출력
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    td1.innerText=LSvalue.resName;
    td2.innerText=LSvalue.resLoca;
    td3.innerText=LSvalue.resMenu;
}

function saveToLS(){
    //resInfo라는 LS_key에 storageValue배열을 저장해줌.
    localStorage.setItem('resInfo', JSON.stringify(storageValue));
}

function loadLS(){
    //LS에 저장된 resInfo라는 키값을 가진 내용을 loadedInfo에 담아둠.
    const loadedInfo = localStorage.getItem('resInfo'); 
    JSON.parse(loadedInfo).forEach(function(items){
        console.log(items);
        //loadedInfo가 잘 출력되는지 확인.
        printTable(items);
        //loadedInfo의 값들을 바탕으로 td안에 내용 생성
    });
}

const addBtn = document.querySelector("button");
const addedTable = document.querySelector(".addedTable");
addBtn.addEventListener("click", makeAddTable);

function makeAddTable(){
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const submitBtn = document.createElement("button");
    submitBtn.innerText = '추가';

    addedTable.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(td1);
    td1.appendChild(input1);
    tr.appendChild(td2);
    td2.appendChild(input2);
    tr.appendChild(td3);
    td3.appendChild(input3);
    tr.appendChild(td4);
    td4.appendChild(submitBtn);
}

saveToLS();
loadLS();



/* tr을 클릭하여 선택 또는 해제 && 선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/
// var cli = 0;
// function
/* localStorage에서 value 값을 전달받아서 html파일에 출력해줌. */



//임시로 LS에 세 가지 value값들 저장해봄.
 const name = null;
 const loca = null;
 const menu = null;

let storageValue = [];


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
    
    const tempObj = {
        resName: name,
        resLoca: loca,
        resMenu: menu
    };
    tempObj.resName=LSvalue.resName;
    tempObj.resLoca=LSvalue.resLoca;
    tempObj.resMenu=LSvalue.resMenu;
    storageValue.push(tempObj);
    saveToLS();
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

const addBtn = document.querySelector("#plus");
const addedTable = document.querySelector(".addedTable");
addBtn.addEventListener("click", makeAddTable);

//+버튼 클릭시 실행될 함수: 새로운 테이블(추가할 텍스트 입력 창) 및 추가button 생성
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

    // 추가button 클릭할 시 각각의 text창의 내용(이름, 주소, 메뉴)를 임시객체 tempObj에
    // 저장시킨 후 printTable에 임시객체를 전달. printTable은 전달받은 객체를 바탕으로
    // printTable을 만든 뒤 storageValue[]에 전달받은 객체내용을 저장 -> sValue[]에
    // 존재하는 내용들은 saveLS()함수를 통해 localStorage에 저장된다. 이후 새로고침을
    // 하더라도 loadLS() -> printTable() -> saveLS() 를 통해 추가button을 눌러도 sValue[]
    // 에 0번 인덱스부터 다시 처음부터 저장하는 것이 아니라 추가로 쌓아가면서 저장 가능
    addedTable.querySelector("button").addEventListener("click",function(event){
        event.preventDefault();        
        const tempObj = {
            resName: name,
            resLoca: loca,
            resMenu: menu
        };
        tempObj.resName = input1.value;
        tempObj.resLoca = input2.value;
        tempObj.resMenu = input3.value;
        const arg = tempObj;
        printTable(arg);
    })
    
}

loadLS();

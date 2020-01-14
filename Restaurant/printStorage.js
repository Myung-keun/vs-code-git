/* localStorage에서 value 값을 전달받아서 html파일에 출력해줌. */

const tbody = document.querySelector("tbody");
const tr = document.createElement("tr");
const td = document.createElement("td");

//임시로 LS에 세 가지 value값들 저장해봄.
const name = '식당이름';
const loca = '식당위치';
const menu = '식당메뉴';

let storageValue = [];
const tempObj = {
    resName: name,
    resLoca: loca,
    resMenu: menu
};
storageValue.push(tempObj);

function printTable(LSvalue){
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.innerText='생성된 식당';
    td.innerText='생성된 식당';
    
}

function saveToLS(){
    //resInfo라는 LS_key에 storageValue배열을 저장해줌.
    localStorage.setItem('resInfo', JSON.stringify(storageValue));
}

function loadLS(){
    //LS에 저장된 resInfo라는 키값을 가진 내용을 loadedInfo에 담아둠.
    const loadedInfo = localStorage.getItem('resInfo'); //
    JSON.parse(loadedInfo).forEach(function(items){
        console.log(items);
        //loadedInfo가 잘 출력되는지 확인.
        printTable(loadedInfo);
        //loadedInfo의 값들을 바탕으로 td안에 내용 생성
    })
}

saveToLS();
loadLS();



/* tr을 클릭하여 선택 또는 해제 && 선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/
// var cli = 0;
// function
const li = document.querySelectorAll(".menu li");
const table = document.querySelector(".mainTable");
const tbody = table.querySelector("tbody");
const selMenu = document.getElementsByClassName("menuSelected");
const paging = document.getElementById("paging");

function initPaging(){
    paging.addEventListener("click",function(){
        paging.className = paging.className == "" ? "toggle" : "";

        if(paging.className == "toggle"){
            paging.innerText = "5개씩 보기";
            DisplayList(storageValue, list_element, rows, current_page);
            SetupPagination(storageValue, pagination_element, rows);
        } 
        else if(paging.className == ""){
            paging.innerText = "전체 보기 (5개씩 보려면 클릭)";
            DisplayList(storageValue, list_element, 50, current_page);
            SetupPagination(storageValue, pagination_element,50);
        }
    })
}



li.forEach(function (li) {
    li.addEventListener("click", function () {
        if (li.className == "" && selMenu.length < 1) {
            li.className = "menuSelected";
        } else if (li.className == "menuSelected" && selMenu.length < 2) {
            li.className = "";
            cancelSort();
        } else {
            alert("중복값은 허용하지 않습니다 ㅜㅜ")
        }

        if (li.className == "menuSelected" && li.id == "Korean") {
            sortKor();
        } else if (li.className == "menuSelected" && li.id == "Chinese") {
            sortChi();
        } else if (li.className == "menuSelected" && li.id == "Japanese") {
            sortJap();
        } else if (li.className == "menuSelected" && li.id == "Foreign") {
            sortForeign();
        }
    })
})


function sortTable(selectedInfo) {

    const tbody = table.querySelector("tbody");
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

    td1.innerText = selectedInfo.resName;
    td2.innerText = selectedInfo.resLoca;
    td3.innerText = selectedInfo.resDis + "분";
    td4.innerText = selectedInfo.resMenu;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteRes);
    tr = clickTr(tr);

    // let tempObj = makeResObj(selectedInfo.resName, selectedInfo.resLoca, selectedInfo.resDis, selectedInfo.resMenu)
    // storageValue.push(tempObj);
}

function clickTr(tr) {
    tr.addEventListener("click", function () {
        tr.className = tr.className == "" ? "selected" : "";
    });
    return tr;
}

function sortKor() {
    tbody.innerHTML = '';
    console.log("한식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);
    let tempArray = [];
    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "한식") {           
            let tempObj = makeResObj(
                storageValue[i].resName,
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu)
            tempArray.push(tempObj);
                       
        }
    }
    //console.log(tempArray)
    DisplayList(tempArray, list_element, rows, 1);
    SetupPagination(tempArray, pagination_element, rows);
}

function sortChi(){
    tbody.innerHTML = '';
    console.log("중식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);
    let tempArray = [];

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "중식") {
            let tempObj = makeResObj(
                storageValue[i].resName, 
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu)
            tempArray.push(tempObj); 
        }
    }
    DisplayList(tempArray, list_element, rows, 1);
    SetupPagination(tempArray, pagination_element, rows);
}

function sortJap(){
    tbody.innerHTML = '';
    console.log("일식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);
    let tempArray = [];

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "일식") {
            let tempObj = makeResObj(
                storageValue[i].resName, 
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu)
            tempArray.push(tempObj);    
        }
    }
    DisplayList(tempArray, list_element, rows, 1);
    SetupPagination(tempArray, pagination_element, rows);
}

function sortForeign(){
    tbody.innerHTML = '';
    console.log("양식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "양식") {
            sortTable(makeResObj(
                storageValue[i].resName, 
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu)
                )
        }
    }
}

function cancelSort() {
    tbody.innerHTML = '';
    let tempArray = [];
    for (let i = 0; i < storageValue.length; i++) {
        tempObj = makeResObj(
            storageValue[i].resName, 
            storageValue[i].resLoca, 
            storageValue[i].resDis, 
            storageValue[i].resMenu)
        tempArray.push(tempObj);
    }
    DisplayList(tempArray, list_element, rows, 1);
    SetupPagination(tempArray, pagination_element, rows);
}

/*선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/
const RanSelectRes = document.querySelector("#clicks");
RanSelectRes.addEventListener("click", ranSelect);

function ranSelect() {
    let temp;
    if (document.querySelectorAll("tr.selected").length > 0) {
        temp = document.querySelectorAll("tr.selected");
    }
    else {
        temp = document.querySelectorAll("tbody tr");
    }
    let count = temp.length;
    let random = Math.floor(Math.random() * count);
    alert("\n식당이름: " + temp[random].querySelector("td").innerText + " \n위치: " + temp[random].querySelectorAll("td")[1].innerText + "\n회사에서 " + temp[random].querySelectorAll("td")[2].innerText + "거리");
}

initPaging();
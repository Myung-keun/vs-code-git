const li = document.querySelectorAll(".menu li");
const table = document.querySelector(".mainTable");
const tbody = table.querySelector("tbody");
const selMenu = document.getElementsByClassName("menuSelected");
const paging = document.getElementById("paging");
let pagingText = ["5개씩 보기","전체 보기","초기화"];
let menuText = ["한식 목록","중식 목록","일식 목록","양식 목록"];

function initNavigator(){
    paging.className="default";
    paging.addEventListener("mouseout",function(){
        if(selMenu.length > 0){paging.innerText=selMenu[0].innerText+' 목록'}
        if(paging.className=="default" && selMenu.length != 1){paging.innerText = pagingText[1]}
        if(paging.className=="totalView" && selMenu.length != 1){paging.innerText=pagingText[0]}
    })

    paging.addEventListener("mouseover",function(){
        if(selMenu.length > 0 ){paging.innerText=pagingText[2]}
        if(paging.className=="default" && selMenu.length != 1){paging.innerText = "클릭시 "+paging.innerText}
        if(paging.className=="totalView" && selMenu.length !=1){paging.innerText="클릭시 "+pagingText[0]}
    })

    paging.addEventListener("click",function(){

        //클릭시 menu정렬 초기화
        li.forEach(function(li){
            li.className = "";
        })

        if(paging.className == "totalView"){
            paging.className="default";
            paging.innerText = pagingText[1];
            DisplayList(storageValue, list_element, rows, current_page);           
            SetupPagination(storageValue, pagination_element, rows);
        } 
        else if(paging.className == "default"){
            paging.className="totalView";
            paging.innerText = pagingText[0];
            DisplayList(storageValue, list_element, 50, 1);
            pagination_element.innerHTML="";
        }
    })
}



//메뉴바 클릭시 동작할 함수 지정

li.forEach(function (li) {
    li.addEventListener("click", function () {
        if (li.className == "" && selMenu.length < 1) {
            li.className = "menuSelected";
        } else if (li.className == "menuSelected" && selMenu.length < 2) {
            li.className = "";
            paging.className="default";
            paging.innerText=pagingText[1];
            cancelSort();
        } else {
            alert("중복값은 허용하지 않습니다 ㅜㅜ")
        }

        if (li.className == "menuSelected" && li.id == "Korean") {
            paging.innerText=menuText[0];
            sortKor();
        } else if (li.className == "menuSelected" && li.id == "Chinese") {
            paging.innerText=menuText[1];
            sortChi();
        } else if (li.className == "menuSelected" && li.id == "Japanese") {
            paging.innerText=menuText[2];
            sortJap();
        } else if (li.className == "menuSelected" && li.id == "Foreign") {
            paging.innerText=menuText[3];
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
}

function clickTr(tr) {
    tr.addEventListener("click", function () {
        tr.className = tr.className == "" ? "selected" : "";
    });
    return tr;
}

function sortKor() {
    tbody.innerHTML = '';
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);
    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "한식") {           
            sortTable(makeResObj(
                storageValue[i].resName,
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu))                    
        }
    }
    pagination_element.innerHTML=""; //pageNavigator 삭제

}

function sortChi(){
    tbody.innerHTML = '';
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "중식") {
            sortTable(makeResObj(
                storageValue[i].resName, 
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu))
        }
    }
    pagination_element.innerHTML="";
}

function sortJap(){
    tbody.innerHTML = '';
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);


    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "일식") {
            sortTable(makeResObj(
                storageValue[i].resName, 
                storageValue[i].resLoca, 
                storageValue[i].resDis, 
                storageValue[i].resMenu))   
        }
    }
    pagination_element.innerHTML="";
}

function sortForeign(){
    tbody.innerHTML = '';
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
    pagination_element.innerHTML="";
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

initNavigator();
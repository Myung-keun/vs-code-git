const li = document.querySelectorAll("li");
const table = document.querySelector(".mainTable");
const tbody = table.querySelector("tbody");
const selMenu = document.getElementsByClassName("menuSelected");

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

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "한식") {
            sortTable(makeResObj(storageValue[i].resName, storageValue[i].resLoca, storageValue[i].resDis, storageValue[i].resMenu))
        }
    }
}

function sortChi(){
    tbody.innerHTML = '';
    console.log("중식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "중식") {
            sortTable(makeResObj(storageValue[i].resName, storageValue[i].resLoca, storageValue[i].resDis, storageValue[i].resMenu))
        }
    }
}

function sortJap(){
    tbody.innerHTML = '';
    console.log("일식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "일식") {
            sortTable(makeResObj(storageValue[i].resName, storageValue[i].resLoca, storageValue[i].resDis, storageValue[i].resMenu))
        }
    }
}

function sortForeign(){
    tbody.innerHTML = '';
    console.log("양식");
    const loadedMenu = localStorage.getItem('resInfo');
    const storageValue = JSON.parse(loadedMenu);

    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i].resMenu == "양식") {
            sortTable(makeResObj(storageValue[i].resName, storageValue[i].resLoca, storageValue[i].resDis, storageValue[i].resMenu))
        }
    }
}

function cancelSort() {
    tbody.innerHTML = '';
    for (let i = 0; i < storageValue.length; i++) {
        sortTable(makeResObj(storageValue[i].resName, storageValue[i].resLoca, storageValue[i].resDis, storageValue[i].resMenu))
    }
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

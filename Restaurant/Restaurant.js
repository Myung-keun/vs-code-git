/* localStorage에서 value 값을 전달받아서 html파일에 출력해줌. */



//임시로 LS에 세 가지 value값들 저장해봄.

let storageValue = [];

function deleteRes(event) {
    //X버튼 클릭시에 HTML의 table행 삭제해주는 코드
    const btn = event.target;
    const tr = btn.parentNode;
    document.querySelector("tbody").removeChild(tr);
    //filter함수(원 배열의 id와 새로 만들어진 배열의 id값을 비교->삭제된 행의 아이디없는 배열 반환)
    const updateLS = storageValue.filter(function (resId) {
        return resId.id !== parseInt(tr.id); //tr.id는 string형식, 비교를위해 정수형으로 변환
    });
    //filter()를 거쳐 새롭게 만들어진 배열을 원래 배열에 저장 후 LocalStorage를 덮어서 저장
    storageValue = updateLS;
    saveToLS();
}

function printTable(resObj) {
    //loadLS에서 JSON.parse()로 LS의 내용을 전달받았을때, tbody에 tr&td*3 한 세트 생성 및 출력
    const tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const delBtn = document.createElement("button"); //메뉴 옆에 삭제버튼 생성예정
    const newId = storageValue.length + 1; //retaurant 정보에 고유 id부여

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(delBtn);

    tr.id = newId; //생성되는 행에 id순서 추가 -> 삭제시 id로 LS에 저장하기 위해.
    td1.innerText = resObj.resName;
    td2.innerText = resObj.resLoca;
    td3.innerText = resObj.resDis;
    td4.innerText = resObj.resMenu;
    
    delBtn.innerText = "X";
    
    let tempObj = makeResObj(resObj.resName, resObj.resLoca, resObj.resDis,resObj.resMenu)
    storageValue.push(tempObj);
    saveToLS();

    delBtn.addEventListener("click", deleteRes);
    tr = clickTr(tr);
    //+버튼으로 생성과 동시에 생성되는 element에 click이벤트가 활성화될 수 있도록 지정해줌.
}

function clickTr(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "selected" : "";
    });
    return tr;
}

function saveToLS() {
    //resInfo라는 LS_key에 storageValue배열을 저장해줌.
    localStorage.setItem('resInfo', JSON.stringify(storageValue));
}

function loadLS() {
    //LS에 저장된 resInfo라는 키값을 가진 내용을 loadedInfo에 담아둠.
    const loadedInfo = localStorage.getItem('resInfo');
    //LS에 저장된 값이 있을 경우 LS내용을 바탕으로 table 생성
    if (loadedInfo !== null) {
        JSON.parse(loadedInfo).forEach(function (items) {
            printTable(items);
        });
    //LS에 저장된 값이 없을 경우, LS에 초기화 시켜줄 내용(기본 6개 식당)
    } else{
        let initValue = makeResObj("오카에리","봉은사로 44길 68","1분","일식");
        printTable(initValue);

        initValue = makeResObj("청운각","언주로 98길 21", "5분","중식");
        printTable(initValue);

        initValue = makeResObj("매반생면","언주로 508 지하1층","5분","한식");
        printTable(initValue);

        initValue = makeResObj("아랑졸 돈까스","언주로 98길 22","5분", "양식");
        printTable(initValue);

        initValue = makeResObj("일미리 금계찜닭", "선릉로 93길 22","10분", "한식");
        printTable(initValue);

        initValue = makeResObj("어메이징 타이", "언주로 98길 25","5분", "아시안");
        printTable(initValue);

        initValue = makeResObj("포하임", "선릉로86길 15","5분", "아시안");
        printTable(initValue);

        initValue = makeResObj("해변에서", "언주로98길 5-3","1분", "한식");
        printTable(initValue);

        initValue = makeResObj("고돼지", "언주로98길 14","1분", "한식");
        printTable(initValue);

        initValue = makeResObj("동해식당", "역삼동 700-22","5분", "한식");
        printTable(initValue);

        initValue = makeResObj("코우", "언주로98길 23","5분", "일식");
        printTable(initValue);

        initValue = makeResObj("쌈밥", "동해식당 옆","5분", "한식");
        printTable(initValue);

        initValue = makeResObj("백억한우", "언주로 508","5분", "한식");
        printTable(initValue);

        initValue = makeResObj("담소", "선릉로86길 48","1분", "한식");
        printTable(initValue);

        initValue = makeResObj("김가면옥", "언주로98길 9","1분", "한식");
        printTable(initValue);

        initValue = makeResObj("소소가츠", "언주로98길 21","5분", "양식");
        printTable(initValue);

        initValue = makeResObj("샐러디", "선릉로93길 26","5분", "양식");
        printTable(initValue);

        initValue = makeResObj("메이크샐러드", "언주로98길 15","5분", "양식");
        printTable(initValue);

        initValue = makeResObj("김가네", "언주로98길 18","5분", "한식");
        printTable(initValue);

        initValue = makeResObj("모쿠", "봉은사로44길 70","5분", "일식");
        printTable(initValue);
    }
}

function makeResObj(name, loca, distance ,menu){
    const newId = storageValue.length+1;
    return {
        resName: name,
        resLoca: loca,
        resDis: distance,
        resMenu: menu,
        id: newId
    };
}


const selAddBtn = document.querySelector(".bt");
const addBtn = document.querySelector(".plus");
const addedTable = document.querySelector(".addedTable");
addBtn.addEventListener("click", makeAddTable);
let toggleCount = 0;

//+버튼 클릭시 실행될 함수: 새로운 테이블(추가할 텍스트 입력 창) 및 추가button 생성
function makeAddTable() {
    //+버튼 클릭시 토글로 + -> X 로 변화 & 색상도 변화
    toggleCount++;
    let toggleFormula = toggleCount % 2;

    if (toggleFormula == 1) {
        addBtn.innerText = 'x';
        addBtn.className = 'changePlus';

        const table = document.createElement("table");
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const input1 = document.createElement("input");
        const input2 = document.createElement("input");
        const input3 = document.createElement("input");
        const input4 = document.createElement("input");
        const submitBtn = document.createElement("button");
        submitBtn.innerText = '+';
        submitBtn.id = 'addingBtn';

        addedTable.appendChild(table);
        table.appendChild(tr);
        tr.appendChild(td1);
        td1.appendChild(input1);
        input1.placeholder = "식당이름 입력";
        tr.appendChild(td2);
        td2.appendChild(input2);
        input2.placeholder = "식당위치 입력";
        tr.appendChild(td5);
        td5.appendChild(input4);
        input4.placeholder = "거리 입력";
        tr.appendChild(td3);
        td3.appendChild(input3);
        input3.placeholder = "메뉴 입력";
        tr.appendChild(td4);
        td4.appendChild(submitBtn);

        function addingTableValues(event) {
            if (input1.value.trim() == '' || input2.value.trim() == '' || input3.value.trim() == '' || input4.value.trim() == '') {
                alert("빈 칸을 모두 채워주셔야 합니다!!!");
            } else {
                event.preventDefault();

                toggleCount++;
                selAddBtn.querySelector("button").className = 'plus';
                selAddBtn.querySelector("button").innerText = '+';

                const arg = makeResObj(input1.value, input2.value, input4.value, input3.value);
                printTable(arg);

                const btn = event.target;
                const td = btn.parentNode;
                const tr = td.parentNode;
                const table = tr.parentNode;
                document.querySelector(".addedTable").removeChild(table);
            }
        }

        // 추가button 클릭할 시 각각의 text창의 내용(이름, 주소, 메뉴)를 임시객체 tempObj에
        // 저장시킨 후 printTable에 임시객체를 전달. printTable은 전달받은 객체를 바탕으로
        // printTable을 만든 뒤 storageValue[]에 전달받은 객체내용을 저장 -> sValue[]에
        // 존재하는 내용들은 saveLS()함수를 통해 localStorage에 저장된다. 이후 새로고침을
        // 하더라도 loadLS() -> printTable() -> saveLS() 를 통해 추가button을 눌러도 sValue[]
        // 에 0번 인덱스부터 다시 처음부터 저장하는 것이 아니라 추가로 쌓아가면서 저장 가능
        addedTable.querySelector("button").addEventListener("click", addingTableValues);
    } else {
        addBtn.innerText = '+';
        addBtn.className = 'plus';
        addedTable.innerHTML = '';
    }
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
    alert("오늘의 점심메뉴: " + temp[random].querySelectorAll("td")[2].innerText +"\n식당이름: "+ temp[random].querySelector("td").innerText + " \n위치: " + temp[random].querySelectorAll("td")[1].innerText);
}

loadLS();

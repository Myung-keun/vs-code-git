

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
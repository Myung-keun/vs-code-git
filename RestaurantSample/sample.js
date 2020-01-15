/**************** 초기 세팅 부분 ****************/
const LOCALSTORAGE_RESTAURANTLIST_NAME = 'restaurantList';

// 초기화
function init() {
    initTable();
    registInitEventListener();
    initFunction();
}

// 테이블 초기 세팅
function initTable()
{
    let restaurantList;

    if(localStorage.getItem(LOCALSTORAGE_RESTAURANTLIST_NAME) == null)
    {
        // localstorage에 저장된 식당 목록이 없을 경우 초기 세팅
        restaurantList = initRestaurantList();
    }
    else
    {
        // 있을 경우 가져옴
        restaurantList = getRestaurantList();
    }

    restaurantList.forEach(function(restaurantInfo){
        insertRestaurantToTable(restaurantInfo);
    });
}

// 이벤트 리스너 등록 함수
function registInitEventListener()
{
    // 골라주세요! 버튼 클릭 이벤트
    document.querySelector("#selectButton").addEventListener("click", function() {
        selectRestaurant();
    });

    // 추가 버튼 클릭 이벤트
    document.querySelector("#addButton").addEventListener("click", function() {
        const insertFormTable = document.querySelector("#restaurantInsertForm");
        if(insertFormTable.childElementCount < 1)
        {
            insertFormTable.appendChild(makeInsertTR());
        }
    });
    
    // 삭제 버튼 클릭 이벤트
    document.querySelector("#delButton").addEventListener("click", function() {
        removeRestaurant();
    });

    // delete 버튼으로 리스트에서 삭제
    document.onkeydown = function(key) {
        if(key.keyCode == 46) removeRestaurant();
    }
}

// 기타 기능 정의
function initFunction()
{
    // 리스트에서 식당 삭제
    Array.prototype.removeRestaurant = function(tr) {
        const uuid = tr.querySelector("input").value;
        const restaurant = this.find(x => x.uuid == uuid);

        const index = this.indexOf(restaurant);
        if (index > -1) {
        this.splice(index, 1);
        }
    }
}

// 초기 식당 리스트 세팅
function initRestaurantList()
{
    let restaurantList = [];

    let restaurant = makeRestaurantInfo("식당1", "식당1의 위치", "식당1의 메뉴");
    restaurantList.push(restaurant);

    restaurant = makeRestaurantInfo("식당2", "식당2의 위치", "식당2의 메뉴");
    restaurantList.push(restaurant);

    restaurant = makeRestaurantInfo("식당3", "식당3의 위치", "식당3의 메뉴");
    restaurantList.push(restaurant);

    setRestaurantList(restaurantList);

    return restaurantList;
}

// UUID
function getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
        return v.toString(16);
    });
}
/**************** 초기 세팅 부분 ****************/



/**************** LocalStorage 관련 ****************/
// 저장된 리스트 가져오기
function getRestaurantList()
{
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_RESTAURANTLIST_NAME));
}

// 리스트 저장하기
function setRestaurantList(restaurantList)
{
    localStorage.setItem(LOCALSTORAGE_RESTAURANTLIST_NAME, JSON.stringify(restaurantList));
}

// localstorage에 추가
function addRestaurantToLocalStorage(restaurant)
{
    let restaurantList = getRestaurantList();

    restaurantList.push(restaurant);

    setRestaurantList(restaurantList);
}
/**************** LocalStorage 관련 ****************/



/**************** 식당 데이터 관련 ****************/
// 오늘의 식당 선택
function selectRestaurant()
{
    var selectedRows;

    if(document.querySelectorAll("tr.selected").length > 0)
        selectedRows = document.querySelectorAll("tr.selected");
    else
        selectedRows = document.querySelectorAll("#restaurantTable tbody tr");

    var menuCount = selectedRows.length;
    var rand = Math.floor(Math.random() * menuCount);

    alert("오늘은 " + selectedRows[rand].querySelector("td").innerText + "(으)로 갑시다!");
}

function makeRestaurantInfo(name, location, menu)
{
    return { uuid: getUUID(), name : name, location : location, menu : menu };
}

// 식당 추가
function addRestaurant(insertForm)
{
    let insertRestaurantDatas = insertForm.childNodes;

    if(!checkFormData(insertRestaurantDatas))
    {
        alert('모든 데이터를 입력해주세요.');
        return;
    }
    
    let restaurant = makeRestaurantInfo(insertRestaurantDatas[0].firstElementChild.value, insertRestaurantDatas[1].firstElementChild.value, insertRestaurantDatas[2].firstElementChild.value);

    // 테이블에 추가
    insertRestaurantToTable(restaurant);

    // localstorage에 추가
    addRestaurantToLocalStorage(restaurant);

    // insert form 삭제
    document.querySelector("#restaurantInsertForm").innerHTML = "";
}

// 식당 추가 데이터 체크
function checkFormData(insertRestaurantDatas)
{
    for(let i = 0; i < insertRestaurantDatas.length; i++)
    {
        if(insertRestaurantDatas[i].firstElementChild.value.trim() == '')
            return false;
    }
    return true;
}

// 식당 삭제
function removeRestaurant()
{
    const selectedTR = document.querySelectorAll("tr.selected");
    let restaurantList = getRestaurantList();

    // 선택된 리스트가 없을 경우 종료
    if(selectedTR.length < 1)
    {
        alert('삭제할 리스트를 선택해주세요.');
        return;
    }

    // table-tbody에서 tr삭제
    for(let i = 0; i < selectedTR.length; i++)
    {
        // localStorage에서 리스트 삭제
        restaurantList.removeRestaurant(selectedTR[i]);

        document.querySelector("#restaurantTable tbody").deleteRow(selectedTR[i].rowIndex - 1);
    }

    setRestaurantList(restaurantList);
}
/**************** 식당 데이터 관련 ****************/



/**************** 테이블 관련 ****************/
// 식당 TR 생성
function makeRestaurantTR(restaurant)
{
    let tr;

    tr = document.createElement("tr");

    tr.appendChild(makeRestaurantTD(restaurant.name));
    tr.appendChild(makeRestaurantTD(restaurant.location));
    tr.appendChild(makeRestaurantTD(restaurant.menu));

    let hiddenUUID = document.createElement("input");
    hiddenUUID.type = "hidden";
    hiddenUUID.value = restaurant.uuid;
    tr.appendChild(hiddenUUID);

    tr = addTRClickEvent(tr);

    return tr;
}

// 식당 TD 생성
function makeRestaurantTD(tdText)
{
    let td = document.createElement("td");
    td.innerText = tdText;

    return td;
}

// 테이블에 레스토랑 추가
function insertRestaurantToTable(restaurant){
    const tbody = document.querySelector("tbody");
    
    tbody.appendChild(makeRestaurantTR(restaurant));
}

// tr 이벤트 리스너 등록
function addTRClickEvent(tr)
{
    tr.addEventListener("click", function() {
        tr.className = tr.className == "" ? "selected" : "";
    });

    return tr;
}

// 식당 추가 TR 생성
function makeInsertTR()
{
    let tr;

    tr = document.createElement("tr");

    tr.appendChild(makeInsertTD("text"));
    tr.appendChild(makeInsertTD("text"));
    tr.appendChild(makeInsertTD("text"));
    tr.appendChild(makeInsertTD("button"));

    tr = addTRClickEvent(tr);

    return tr;
}

// input td 생성
function makeInsertTD(inputType)
{
    let td = document.createElement("td");
    let input = document.createElement("input");

    input.type = inputType;

    if(inputType == "button")
    {
        input.value = "등록";
        input.addEventListener("click", function() {
            addRestaurant(this.parentElement.parentElement);
        })
    }

    td.appendChild(input);

    return td;
}
/**************** 테이블 관련 ****************/



init();
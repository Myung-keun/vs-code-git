const form = document.querySelector(".submits"),
  info = form.querySelector(".info"),
  infoBtn = form.querySelector("button"),

  //insert = document.querySelector(".inserted"),
  inserted = document.querySelector(".js-inserted");

const ITEM_LS = 'items';

let items = [];
let type =[];
let tables =[];

//local storage에 Key: items, Value: items[] 생성.
function saveItems(){
  localStorage.setItem(ITEM_LS, JSON.stringify(items)); 
  localStorage.setItem('type',JSON.stringify(type));
  localStorage.setItem('tables',JSON.stringify(tables));
}

//ul에 li를 추가해주는 함수.
function paintTable(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newId = items.length + 1;

  //li.id = newId;
  span.innerText = text;
  li.appendChild(span);
  inserted.appendChild(li);
  const itemsObj = {
    text: text,
    id: newId
  };
  items.push(itemsObj);
  saveItems();
}

//Enter 입력시에 자동 새로고침 방지
function handleSubmit(event){
  event.preventDefault(); //새로고침 방지
  const currentValue = info.value; //현재 textbox에 들어있는 내용 
  paintTable(currentValue); //현재내용 li생성시 parameter(내용)으로 전달
  info.value = ""; //textbox는 다시 공백으로 초기화  
}

//페이지 시작시 localS에 있는 item들 가져와서 새로운 행을 만든 뒤 출력해줌.
function loadItems(){
  const loadedItems = localStorage.getItem(ITEM_LS);
  if(loadedItems!==null){
    const parseItems = JSON.parse(loadedItems);
    parseItems.forEach(function(items){
      paintTable(items.text);
      console.log(items);
    });
  }
}


function init(){
    loadItems(); //원래 local storage에 있는 text들을 출력
    infoBtn.addEventListener("click", handleSubmit);
    //Enter입력시 handleSubmit실행
}

init();

//loadItems()와 paintTable()함수를 수정해야 원하는대로 1행 4열씩 추가 가능할 듯.
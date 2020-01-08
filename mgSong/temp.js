const form = document.querySelector(".submits"),
  info = form.querySelector(".info"),
  inserted = document.querySelector(".js-inserted");

const ITEM_LS = 'items';

let items = [];

//local storage에 Key: items, Value: items[] 생성.
function saveItems(){
  localStorage.setItem(ITEM_LS, JSON.stringify(items));
}


if(inserted.querySelectorAll("li").length < 5){
  console.log("count");
  } else{
      const newUl = document.querySelector("div .insert");
      const ul = document.createElement("ul");
      newUl.appendChild(ul);
      ul.className='inserted';
  }

function paintTable(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newId = items.length + 1;

  span.innerText = text;
  li.appendChild(span);
  li.id = newId;
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
  event.preventDefault();
  const currentValue = info.value; //현재 textbox에 들어있는 내용
  paintTable(currentValue); //현재내용 li생성시 parameter(내용)으로 전달
  info.value = ""; //textbox는 다시 공백으로 초기화
}

//페이지 시작시 localS에 있는 item들 가져와서 새로운 행에 출력해줌.
function loadItems(){
  const loadedItems = localStorage.getItem(ITEM_LS);
  if(loadedItems!==null){
    const parseItems = JSON.parse(loadedItems);
    parseItems.forEach(function(items){
      paintTable(items.text);
    });
  }
}

function init(){
    loadItems(); //원래 local storage에 있는 text들을 출력
    form.addEventListener("submit", handleSubmit);
    //Enter입력시 handleSubmit실행
}

init();

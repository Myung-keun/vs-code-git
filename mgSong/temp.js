const form = document.querySelector(".submits"),
  info = form.querySelector(".info"),
  inserted = document.querySelector(".js-inserted");

const ITEM_LS = 'items';

let items = [];

//local storage에 Key: items, Value: items[] 생성.
function saveItems(){
  localStorage.setItem(ITEM_LS, JSON.stringify(items));
}
 
function paintTable(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newId = items.length +1;
  
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

  if(inserted.querySelectorAll("li").length < 5){
    console.log("count");
    } else{
        localStorage.setItem('items2', JSON.stringify(items));
    }
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = info.value;
  paintTable(currentValue);
  info.value = "";
}

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
    loadItems();
    form.addEventListener("submit", handleSubmit);    
}

init();

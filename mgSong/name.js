const addName = document.querySelector(".name"),
    addNameInput = addName.querySelector("input");


const NAMES_LS = 'addedNames';

let addedNames = [];

function saveAddNames(){
    localStorage.setItem(NAMES_LS, JSON.stringify(addedNames));
}

function addedNames(text){
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    
    td.innerText = text;
    tr.appendChild(td); 
    const addNameObj = {
        name: text
    };
    addedNames.push(addNameObj);
    saveAddNames();
}

//엔터 누르면 초기화 되는 현상 방지
function handleSubmit(event){
    event.preventDefault();
    const currentValue = addNameInput.value;
    addedNames(currentValue);
    addNameInput.value='';
}

//현재 로컬 스토리지에 있는 value 반환, 없으면 추가.
function loadName(){
    const aNames = localStorage.getItem(NAMES_LS);
    if(aNames !== null){
        const parseAddNames = JSON.parse(aNames);
        parseAddNames.forEach(function(toAdd){
            addedNames(toAdd.text);
        });
    }
}

function init(){
    loadName();
    addName.addEventListener("submit", handleSubmit);
}
init();
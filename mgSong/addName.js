//현재 사용하지 않는 js파일입니다.


const addTable = document.querySelector(".insert");
const submits = document.querySelector(".submits");
const info = document.querySelector(".info");


//새로운 행 추가
document.querySelector("#addBtn").addEventListener("click", function(){
    const ul = addTable.appendChild(document.createElement("ul"));
    for(let i=1; i<5; i++){
        console.log("click is working");
        ul.appendChild(document.createElement("li"));      
    }
});

let subItems = [];

function saveItems(){
    localStorage.setItem('입력내용',JSON.stringify(subItems));
}

function paintRow(text){
    const ul = addTable.createElement("ul");
    const li = document.createElement("li");
    const newId = subItems.length + 1; 

    ul.appendChild(li);
    ul.appendChild(li);
    ul.appendChild(li);
    ul.appendChild(li);

    const subItemsObj ={
        text: text,
        id: newId
    };
    subItems.push(subItemsObj);
    console.log(subItemsObj);
    saveItems();  
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = info.value;
    paintRow(currentValue);
    info.value = '';
}

function loadItems(){
    const loadedItems = localStorage.getItem('입력내용');
    if(loadedItems !== null){
        const parseItems = JSON.parse(loadedItems); //LS에서 '입력내용' 추출
        parseItems.forEach(function(Items){
            paintRow(Items.text);
        });
    }
}

function init(){
    loadItems();
    info.addEventListener("submit", handleSubmit);
}

init();

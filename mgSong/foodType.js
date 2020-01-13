const form3 = document.querySelector(".submits3"),
    foodType = form3.querySelector(".type"),
    typeBtn = form3.querySelector("button")
    //inserted = document.querySelector(".js-inserted");

const TYPE_LS = 'types';
let types =[];

function saveTypes(){
    localStorage.setItem(TYPE_LS, JSON.stringify(types));
}

function paintType(type){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = types.length+1;

    span.innerText = type;
    li.appendChild(span);
    inserted.appendChild(li);
    const typesObj = {
        types: type,
        id: newId
    };
    types.push(typesObj);
    saveTypes();
}

function handleSubmit3(event){
    event.preventDefault();
    const currentType = foodType.value;
    paintType(currentType);
    foodType.value="";
}

function loadType(){
    const loadedType = localStorage.getItem(TYPE_LS);
    if(loadedType !== null){
        const parseType = JSON.parse(loadedType);
        parseType.forEach(function(types){
            paintType(types.types);
            console.log(types);
        });
    } else{
        console.log("type is missing");
    }
}

function init(){
    loadType();
    typeBtn.addEventListener("click",handleSubmit3);
}
init();
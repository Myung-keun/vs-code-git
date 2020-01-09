const form4 = document.querySelector(".submits4"),
    tableNum = form4.querySelector(".count"),
    numBtn = form4.querySelector("button")
    inserted = document.querySelector(".js-inserted");

const NUM_LS = 'numbers';
let tableNumbers = [];

function saveTableNum(){
    localStorage.setItem(NUM_LS, JSON.stringify(tableNumbers))
}

function paintTableNum(number){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = tableNumbers.length + 1;

    span.innerText = number;
    li.appendChild(span);
    inserted.appendChild(li);
    const numbersObj = {
        numbers: number,
        id: newId
    };
    tableNumbers.push(numbersObj);
    saveTableNum();
}

function handleSubmit4(event){
    event.preventDefault();
    const currentNumber = tableNum.value;
    paintTableNum(currentNumber);
    tableNum.value = "";
}

function loadTableNum(){
    const loadedTableNum = localStorage.getItem(NUM_LS);
    if(loadedTableNum !== null){
        const parseTableNum = JSON.parse(loadedTableNum);
        parseTableNum.forEach(function(numbers){
            paintTableNum(numbers.numbers);
            console.log(numbers);
        });
    } else{
        console.log("table number is missing");
    }
}

function init(){
    loadTableNum();
    numBtn.addEventListener("click",handleSubmit4);
}
init();
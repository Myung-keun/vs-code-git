const addTable = document.querySelector(".Select");


document.querySelector("#addBtn").addEventListener("click", function(){
    const tr = addTable.appendChild(document.createElement("tr"));
    for(let i=1; i<5; i++){
        console.log("click is working");
        tr.appendChild(document.createElement("td")).className = "insert";        
    }
});
/* tr을 클릭하여 선택 또는 해제 하는 함수*/ 
document.querySelectorAll("tbody tr").forEach(function(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "selected" : "";
    });
});

/*선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수제작 예정*/ 
// function menu(){
//     select.addEventListener("click", function(){
//         let temp;
//         console.log("click");
//         if(document.querySelectorAll("tr.selected").length > 0){
//             temp = document.querySelectorAll("tr.selected");          
//         }
//         else{
//             temp = document.querySelectorAll("tbody tr");
//         }
//         let count = temp.length;
//         let random = Math.floor(Math.random()*count);

//         alert("random");
//     });
// }






//X버튼 클릭시 선택된 tr을 삭제하는 함수 제작 예정.
/*const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", deleteRes);

const tBody = document.querySelector("tbody");
const selectedTr = document.querySelector(".selected");
function deleteRes(){
    tBody.removeChild(selectedTr);
    console.log("delete is complete");
}*/
/* tr을 클릭하여 선택 또는 해제 && 선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/
document.querySelectorAll("tbody tr").forEach(function(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "selected" : "";
    });
});

//X버튼 클릭시 선택된 tr을 삭제하는 함수 제작 예정.
const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", deleteRes);


function deleteRes(){
    console.log("delete is complete");
}
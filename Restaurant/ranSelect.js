/* tr을 클릭하여 선택 또는 해제 && 선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/
document.querySelectorAll("tbody tr").forEach(function(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "selected" : "";
    });
});


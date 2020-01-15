/* tr을 클릭하여 선택 또는 해제 하는 함수*/ 
document.querySelectorAll("tbody tr").forEach(function(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "selected" : "";
    });
});

/*선택된 tr에서 랜덤으로 식당의 정보를 alert로 보여주는 함수*/ 
document.querySelector("#clicks").addEventListener("click", function () {
    let temp;
    if (document.querySelectorAll("tr.selected").length > 0) {
        temp = document.querySelectorAll("tr.selected");
    }
    else {
        temp = document.querySelectorAll("tbody tr");
    }
    let count = temp.length;
    let random = Math.floor(Math.random() * count);
    console.log("랜덤 뽑기");
    alert("오늘의 점심메뉴: " + temp[random].querySelectorAll("td")[2].innerText +"\n식당이름: "+ temp[random].querySelectorAll[0].innerText + " \n위치: " + temp[random].querySelectorAll("td")[1].innerText);
});

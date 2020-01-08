//행 추가와 삭제하는 함수
function addRow(){
    var my_tbody = document.getElementById('my_tbody');
    var row = my_tbody.insertRow(my_tbody.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = '항목'; //항목 추가했을때 안에 내용을 쓸수있게 해야함,,//
    cell2.innerHTML = '항목';
}

function delRow(){
    var my_tbody = document.getElementById('my_tbody');
    if (my_tbody.rows.length < 1) return;
    //my_tbody.deleteRow(0);//
    my_tbody.deleteRow(my_tbody.rows.length-1); //하단에서부터 삭제인데 왜 상단에서부터 삭제되는?//
}






//테이블 칸이 클릭 되게하는 함수
window.onload = function(){
    var cli = document.getElementsById('title1').onclick = function(){
        this.style.backgroundcolor = 'red';
    }
};







//local storage에 저장하고 다시 배열해주는 함수

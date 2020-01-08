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

}

function delRow(){
    var my_tbody = document.getElementById('my_tbody');
    if (my_tbody.rows.length < 1) return;
    //my_tbody.deleteRow(0);//
    my_tbody.deleteRow(my_tbody.rows.length-1);
}




//테이블 칸 클릭되게하는 함수
function HighLightRow(obj){
    var table = document.getElementsByClassName(".table1");
    var tr = table.getElementsByTagName("tr");
    for(var i =0; i<tr.length; i++){
        tr[i].style.background = "pink";
    }
    obj.style.backgroundcolor = "pink";
}












//local storage에 저장하고 다시 배열해주는 함수

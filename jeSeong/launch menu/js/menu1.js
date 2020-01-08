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
    cell3.innerHTML = '';
    cell4.innerHTML = '';
    cell5.innerHTML = '';
    cell6.innerHTML = '';
}

function delRow(){
    var my_tbody = document.getElementById('my_tbody');
    if (my_tbody.rows.length < 1) return;
    //my_tbody.deleteRow(0);//
    my_tbody.deleteRow(my_tbody.rows.length-1); //하단에서부터 삭제인데 왜 상단에서부터 삭제되는?//
}






//테이블 칸 클릭 되게하는 이벤트
function cli(){
    var mouseclick = document.getElementsByTagName('tr').onclick = function(){
        backgroundcolor = 'red';
    }
    cli();
};





//local storage에 식당 리스트 저장하고, 저장된 리스트 배열로 가져와서 화면에 보여주는 함수

// localStorage.test = '123';
// localStorage.setltem('test','123');


// localStorage.test;
// localStorage.getltem('test');

    localStorage.test = '123';
    localStorage.setltem('test','123');


    localStorage.test;
    localStorage.getltem('test');


function saveElement(){
    if(!storageSupport()) {
        return false;
    }
    window.localStorage.setItem('name','ddd');
    return true;
} //로컬 스토리지에 데이터를 저장하는 코드

function localElement(){
    if(!storageSupport()) {
        return null;
    }
    return window.localStorage.getItem('name');
} //로컬 스토리지에서 데이터를 가져오는 코드

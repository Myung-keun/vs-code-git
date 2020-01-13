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
    cell1.innerHTML = '종류'; //항목 추가했을때 안에 내용을 쓸수있게 해야함,,//
    cell2.innerHTML = '<input type = text>';
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
//구글링 검색해서 클릭이벤트 전에 alert 창으로 띄워보는거 해봤는데 안됐어요ㅜㅜ 

// document.querySelector('.table1').addEventListener('click', function(){
//     alert('click');
// }); alert창 뜨게 하려고 한건데 창이 안뜹니다.(1)

// window.onloag = function(){
//     var obj = document.getElementsByClassName('.table1');
//     obj.onclick = function(){
//         var mg = 'hello';
//         alert(mg);
//     }
// }; alert창 뜨게 하려고 한건데 창이 안뜹니다.(2)

// var clicks = document.getElementsByClassName(".table1");
// clicks.addEventListener("click", clicksclick,false);
// function clicks(){
//     alert('click!');
// } alert창 뜨게 하려고 한건데 창이 안뜹니다.(3)


// document.addElementClassName('.table1').addEventListener('click',function(){
//     ('.table1 td.active')
// }

var t = document.getElementsByClassName('.table1');
t.addEvantListener('click', function(event){
    alert('Hello world, '+event.target.value);
});










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

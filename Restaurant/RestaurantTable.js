

let storageValue = [];

function printTable(resObj) {
    //loadLS에서 JSON.parse()로 LS의 내용을 전달받았을때, tbody에 tr&td*3 한 세트 생성 및 출력
    const tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const delBtn = document.createElement("button"); //메뉴 옆에 삭제버튼 생성예정
    const newId = storageValue.length + 1; //retaurant 정보에 고유 id부여

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    tr.appendChild(delBtn);

    tr.id = newId; //생성되는 행에 id순서 추가 -> 삭제시 id로 LS에 저장하기 위해.
    td1.innerText = resObj.resName;
    td2.innerText = resObj.resLoca;
    td3.innerText = resObj.resDis + "분";
    td4.innerText = resObj.resMenu;
    
    delBtn.innerText = "X";
    
    let tempObj = makeResObj(resObj.resName, resObj.resLoca, resObj.resDis, resObj.resMenu)
    storageValue.push(tempObj);
    //거리순 내림차순 정렬 함수
    storageValue.sort(function(a,b){
        return a["resDis"] - b["resDis"];
    })
    saveToLS();

    delBtn.addEventListener("click", deleteRes);
    tr = clickTr(tr);
    //+버튼으로 생성과 동시에 생성되는 element에 click이벤트가 활성화될 수 있도록 지정해줌.
}

function makeResObj(name, loca, distance ,menu){
    const newId = storageValue.length+1;
    return {
        resName: name,
        resLoca: loca,
        resDis: distance,
        resMenu: menu,
        id: newId
    };
}

//페이징하는 함수
// var totalData = 19; //총 데이터 수
// var dataPerPage = 5; //한 페이지에 나타낼 데이터 수
// var pageCount = 3; //한 화면에 나타낼 페이지 수

// function paging(totalData, dataPerPage, pageCount){
//     console.log("currentPage : " + currentPage);

//     var totalPage = Math.ceil(totalData/dataPerPage); //총 페이지수
//     var pageGroup = Math.ceil(currentPage/pageCount); //페이지그룹

//     console.log("pageGroup : " + pageGroup);

//     var last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
//     if(last > totalPage) 
//         last = totalPage;
//     var first = last - (pageCount-1); //화면에 보여딜 첫번째 페이지 번호
//     var next = last+1;
//     var prev = first-1;

//     console.log("last : " + last);
//     console.log("first : " + first);
//     console.log("next : " + next);
//     console.log("prev : " + prev);

//     var $pingingView = $("table tbody");

//     var html = "";

//     if(prev>0)
//     html += "<a href =# id='prev'><</a>";

//     for(var i =first, i <= last; i++){
//         html += "<a href ='#' id="+i+">"+i+"</a>";

//     if(last<totalPage)
//     html += "<a href =# id='next'>></a>";

//     $("table tbody").html(html); //페이지목록생성
//     $("table tbody" + currentPage).css({"text-decoration" : "none",
//                                         "color" : "red",
//                                         "font-weight" : "bold"}); //현재 페이지 표시

//     $("table tbody").click(function(){
//         var $item = $(this);
//         var $id = $item.attr("id");
//         var selectPage = $item.text();

//         if($id == "next") selectPage = next;
//         if($id == "prev") selectPage = prev;

//         paging(totalData, dataPage, pagrCount, selectPage);
//     });

//     $("document").ready(function(){
//         paging(totalData, dataPage, pageCount, 1);
//     });
//     }
}


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

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4); 
    tr.appendChild(delBtn);

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

    delBtn.addEventListener("click", deleteRes);
    tr = clickTr(tr);
    //+버튼으로 생성과 동시에 생성되는 element에 click이벤트가 활성화될 수 있도록 지정해줌.
}

function makeResObj(name, loca, distance ,menu){
    return {
        resName: name,
        resLoca: loca,
        resDis: distance,
        resMenu: menu
    };
}

//페이징하는 함수
// function (startIndex){
//     var pagingHTML ="";
//     var page = parselnt($("#page").val());
//     var totalCount = parselnt($("#totalCount").val());
//     var pageBlock = parselnt($("#pageBlock").val());
//     var navigatorNum = 19;
//     var firstPageNum = 1;
//     var lastPageNum		= Math.floor((totalCount-1)/pageBlock) + 1;
//     var previewPageNum  = page == 1 ? 1 : page-1;
//     var nextPageNum		= page == lastPageNum ? lastPageNum : page+1;
//     var indexNum		= startIndex <= navigatorNum  ? 0 : parseInt((startIndex-1)/navigatorNum) * navigatorNum;

// 	    if (totalCount > 1) {
// 		    if (startIndex > 1) {

// 			    pagingHTML += "<a class='btn_first disabled' href='#' id='"+firstPageNum+"'><em>Go First</em></a> ";

// 			    pagingHTML += "<a class='btn_prev disabled' href='#' id='"+previewPageNum+"'><em>Preview</em></a> ";

// 					}

					
					

// 		    for (var i=1; i<=navigatorNum; i++) {

// 			    var pageNum = i + indexNum;

						

// 		    if (pageNum == startIndex) 

// 			    pagingHTML += "<a class='selected' href='#' id='"+pageNum+"'>"+pageNum+"</a> ";

// 		    else 

// 			    pagingHTML += "<a href='#' id='"+pageNum+"'>"+pageNum+"</a>  ";

						

// 		    if (pageNum==lastPageNum)

// 			    break;

// 		    }

					

// 		    if (startIndex < lastPageNum) {

// 			    pagingHTML += "<a class='btn_next' href='#' id='"+nextPageNum+"'><em>Next</em></a> ";

// 			    pagingHTML += "<a class='btn_end' href='#' id='"+lastPageNum+"'><em>Go End</em></a>";

// 		    }

					

// 	}             

// 		$("#page").html(pagingHTML);

// 		$("table tbody").click(function (e) {

// 			page($(this).attr('id'));

// 		});

// }


//페이징 하는 함수 2
function setPage(listCount, currentPage){
    var listCount = listCount; //전체 게시글 수
    var pageCount = (parseInt (listCount/19) + 1); //페이지 개수
    var currentPage = currentPage; //현재 페이지
    var endPage = (parseInt(pageCount/19 +1)*5) + 1; //최종 페이지
    var displayPage = parseInt((currentPage + 4)/5)*5; //밑에 보여줄 페이지
    

}
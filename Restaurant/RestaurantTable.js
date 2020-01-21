

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
var PageUtil = function() // 페이지 처리 함수
 {
  var totalCnt; // 총 건수
  var pageRows; // 한 페이지에 출력될 항목 갯수
  var curPage; // 현재 페이지
  var disPagepCnt;// 화면출력 페이지수
  var totalPage;

  this.setTotalPage = function()
  {
   this.totalPage = parseInt((this.totalCnt/this.pageRows)) + (this.totalCnt%this.pageRows>0 ? 1:0);
  }

  this.getPrev = function()
  {
   var prev    = 0;

   if(this.curPage > 1)
    prev    = this.curPage - 1;
   else
    prev    = 1;

   return prev;
  }

  this.getNext = function()
  {
   var next    = 0;

   if(this.curPage < this.totalPage)
    next = this.curPage + 1;
   else
    next = this.totalPage;

   return next;
  }

  this.getPrevPage = function()
  {
   var prevPage    = 0;
   var curPos      = (parseInt((this.curPage/this.disPagepCnt))+(this.curPage%this.disPagepCnt>0 ? 1:0));

   if(curPos>1)
   {
    prevPage    = parseInt((curPos-1))*this.disPagepCnt;
   }

   return prevPage;
  }

  this.getNextPage = function()
  {
   var nextPage    = 0;
   var curPos  = parseInt((parseInt((this.curPage/this.disPagepCnt))+(this.curPage%this.disPagepCnt >0 ? 1:0)));

   if((curPos*this.disPagepCnt+1) <= this.totalPage)
   {
    nextPage    = curPos*this.disPagepCnt+1;
   }

   if( this.totalPage >= nextPage )
   return nextPage;
  else
   return this.totalPage;
 }

 this.Drow = function()
 {
  var sb = '';

  var start   = ((parseInt((this.curPage/this.disPagepCnt))+(this.curPage%this.disPagepCnt>0 ? 1:0)) * this.disPagepCnt - (this.disPagepCnt-1));
  var end     = ((parseInt((this.curPage/this.disPagepCnt))+(this.curPage%this.disPagepCnt>0 ? 1:0)) * this.disPagepCnt);
  if(end > this.totalPage)
   end = this.totalPage;

  if(this.curPage > this.disPagepCnt)
  {
   sb += "&nbsp;&nbsp;<a href='javascript:prev_page();'>◀◀</a>&nbsp;&nbsp;";
  }

  if(this.getPrev() < this.curPage)
  {
   sb += "&nbsp;&nbsp;<a href='javascript:prev();'>◀</a>&nbsp;&nbsp;";
  }

  for(var i=start; i<=end; i++)
  {
   if(i==this.curPage)
   {
    sb += "&nbsp;&nbsp;<b>"+i+"</b>&nbsp;&nbsp;";
   }
   else
   {
    sb += "&nbsp;&nbsp;<a href='javascript:goPage("+i+");'>"+i+"</a>&nbsp;&nbsp;";
   }
  }

  if(this.curPage < this.getNext())
  {
   sb += "&nbsp;&nbsp;<a href='javascript:next();'>▶</a>&nbsp;&nbsp;";
  }
  if(this.totalPage > this.getNextPage() && this.getNextPage() != 0 )
  {
   sb += "&nbsp;&nbsp;<a href='javascript:next_page();'>▶▶</a>&nbsp;&nbsp;";
  }

  return sb;
 }
}



//- pageUtil end

var util = new PageUtil();

util.totalCnt = 19; //게시물의 총 건수
util.pageRows = 5; // 한번에 출력될 게시물 수
util.disPagepCnt= 3; //화면 출력 페이지 수

function fn_DrowPageNumber()
{
 parent.document.getElementById('page').innerHTML  = util.Drow();
}

function goPage(pageNo)
{
 util.curPage = pageNo;  
 util.setTotalPage();
 fn_DrowPageNumber();
}

function next_page()
{
 util.curPage    = util.getNextPage();
 util.setTotalPage();
 fn_DrowPageNumber();
}

function next()
{
 util.curPage    = util.getNext();
 util.setTotalPage();
 fn_DrowPageNumber();
}

function prev_page()
{
 util.curPage    = util.getNextPage();
 util.setTotalPage();
 fn_DrowPageNumber();
}

function prev()
{
 util.curPage    = util.getNext();
 util.setTotalPage();
 fn_DrowPageNumber();
}

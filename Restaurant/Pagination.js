

const list_element = document.querySelector('#list');
const pagination_element = document.getElementById('pagination');

//default: 현재 페이지 1, 출력행 5개씩
let current_page = 1;
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = ""; //처음 생성시 list목록 초기화 해줘야함 => tbody 초기화
    page--; //page == 1 기준으로array[0] 부터 시작해야 하기 때문에

    let start = rows_per_page * page; //시작 시 5*0 == 0 , 2페이지: 5*1 == 5
    let end = start + rows_per_page; //시작시: 0+5 == 5, 2페이지: 5+5 == 10
    let paginatedItems = items.slice(start, end); // 0~5까지 잘라서 넣어줌.
    console.log(paginatedItems);

// }

var pageCount = 4;
var currentPage = currentPage;
var totalSize = totalSize;
var totalPage = Math.ceil(totalSize/5);
var totalPageList = Math.ceil(totalPage/pageCount);
var pageList = Math.ceil(currentPage/pageCount);

if(pageList<1) pageList=1;
if(pageList>totalPageList) pageList=totalPageList;
var startPageList = (pageList-1)*pageCount+1;
var endPageList = startPageList+pageCount-1;

if(startPageList<1) startPageList=1;
if(endPageList>totalPage) endPageList=totalPage;
if(endPageList<1) endPageList=1;

var pageInner="";

if(pageList!==1){
    pageInner+=""+"◀◀"+"";
}
for(var i=startPageList; i<=endPageList; i++){
    pageInner = pageInner+""+(i)+"";
}

if(totalPageList>pageList){
    pageInner+=""+"▶▶"+"";
}

document.getElementById("page").innerHTML=pageInner;
function prevPage(){
    currentPage-=pageCount;
    pageList=Math.ceil(currentPage/pageCount);
    currentPage=(pageList-1)*pageCount+pageCount;
    document.frm.currentPage.value=currentPage;
    document.frm.action="/Restaurant/Restaurant.do";
    document.frm.submit();
}

function nextPage(){
    currentPage+=pageCount;
    pageList=Math.ceil(currentPage/pageCount);
    currentPage=(pageList-1)*pageCount+1;
    document.frm.currentPage.value=curentPage;
    document.frm.action="/Restaurant/Restaurant.do";
    document.frm.submit();
}

function goPage(num){
    document.frm.surrentPage.value=num;
    document.frm.action="/Restaurant/Restaurant.do";
    document.frm.submit();
}
}

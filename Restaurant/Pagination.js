

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

document.getElementById("pagination").innerHTML=pageInner;
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


//페이징하는 함수
// function setPage(listCount, currentPage) {
//     var listCount = listCount;  // 전체 게시글 수
//     var pageCount = (parseInt( listCount/ 5) + 1); // 페이지 개수
//     var currentPage = currentPage; // 현재 페이지
//     var endPage = (parseInt(pageCount/10 + 1) * 5)+1; // 최종 페이지
//     var displayPage = parseInt((currentPage + 4 ) / 5 ) * 5; // 밑에 보여줄 페이지

//     /* 게시글 수가 페이지 수와 딱 맞을 땐 다음 페이지 안보이게*/
//     if(parseInt( listCount% 5)==0){
//         pageCount -=1;
//     };
//     console.log("listCount", listCount);
//     console.log("pageCount", pageCount);
//     console.log("currentPage", currentPage);
//     console.log("endPage", endPage);
//     console.log("displayPage", displayPage);

//     var pager = $('#page');
//         if(currentPage <= 5){
//         pager.prepend('<tr>◀</tr>');
//     }else{
//         pager.append('<tr><a href=/Restaurant/Restaurant/'+(displayPage-5)+'?kwd='+kwd+'>'+'◀'+'</tr>');
//     }

//     for (var i = displayPage-4; i <= displayPage; i++) {
//         if(i==currentPage){
//             pager.append('<tr class="selected">'+i+'</tr>')
//             continue;
//         }else if(i>pageCount){
//             pager.append('<tr>'+i+'</tr>')
//             continue;
//         }
//         pager.append('<tr><a href=/Restaurant/Restaurant/'+i+'?kwd='+kwd+'>'+i+'</tr>');
//     }

//     var nextPage = displayPage+1

//     if(currentPage < endPage && endPage < pageCount){
//         pager.append('<tr><a href=/Restaurant/Restaurant/'+nextPage+ '?kwd='+kwd+'>'+'▶'+'</tr>');
//     }else{
//         pager.append('<tr>'+'▶'+'</tr>');
// }

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
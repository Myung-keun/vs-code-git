

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
QueryString = function(str) {
    var str = str ? str : document.location.href;
    this.argv = new Array();
    this.queryString = str.split('?')[1];
    if (!this.queryString) this.queryString = '';
    var _argv = this.queryString.split('&');
    for(var i=0; i<_argv.length; i++) {
        $=_argv[i].split('=');
        var _key = $[0];
        var _val = $[1];
        this.argv[_key] = $[1];
    }
  
    if (!this.argv) this.argv = new Array();
  
    this.setVar = function(key,val) {
        if (typeof key == 'object') {
          for (var item in key) this.argv[item] = key[item];
        } else {
          this.argv[key] = val;
        }
        return this.getVar();
    }
  
    this.getVar = function(key) {
        if (key) {
          if (!this.argv[key]) return '';
          else {
              return this.argv[key];
          }
        } else {
          var cnt = 0;
          for(var c in this.argv) cnt++;  // XXX: 키 이름을 가진 array 는 length 속성으로 항상 0 을 벹어낸다.
          if (cnt > 0) {
              var _item = new Array();
              for (var x in this.argv) if (this.argv[x]) _item[_item.length] = x + '=' + this.argv[x];
              else continue;
              return '?' + _item.join('&');
          } else return '?';
        }
    }
  }
  
  Paging = function(total) {
    this.config = {
        thisPageStyle: 'font-weight: bold;',
        itemPerPage: 3,  // 리스트 목록수
        pagePerView: 5      // 페이지당 네비게이션 항목수
    }
  
    this.totalItem = total;
    this.qs = new QueryString;
  
    this.calculate = function() {
        this.totalPage = Math.ceil(this.totalItem / this.config.itemPerPage);
        this.currentPage = this.qs.getVar('page');
        if (!this.currentPage) this.currentPage = 1;
        if (this.currentPage > this.totalPage) this.currentPage = this.totalPage;
        this.lastPageItems = this.totalPage % this.config.itemPerPage;
  
        this.prevPage = this.currentPage-1;
        this.nextPage = this.currentPage+1;
        this.seek = this.prevPage * this.config.itemPerPage;
        this.currentScale = parseInt(this.currentPage / this.config.pagePerView);
        if (this.currentPage % this.config.pagePerView < 1) this.currentScale--;
        this.totalScale = parseInt(this.totalPage / this.config.pagePerView);
        this.lastScalePages = this.totalPage % this.config.pagePerView;
        if (this.lastScalePages == 0) this.totalScale--;
        this.prevPage = this.currentScale * this.config.pagePerView;
        this.nextPage = this.prevPage + this.config.pagePerView + 1;
    }
  
    this.toString = function() {
        var ss, se;
        this.calculate();
        if (this.config.prevIcon) var prevBtn ='<img src="'+this.config.prevIcon+'" border="0" align="absmiddle">';
        else var prevBtn = '◀';
        if (this.currentPage > this.config.pagePerView) {
          prevBtn = prevBtn.link(this.qs.setVar('page',this.prevPage));
        }
  
        ss = this.prevPage + 1;
        if ((this.currentScale >= this.totalScale) && (this.lastScalePages != 0)) se = ss + this.lastScalePages;
        else if (this.currentScale <= -1) se = ss;
        else se = ss + this.config.pagePerView;
  
        var navBtn = '';
        for(var i = ss; i<se; i++) {
          if (i == this.currentPage) {
              _btn = '<span style="'+this.config.thisPageStyle+'">['+i+']</span>';
          } else {
              _btn = '<a href="'+this.qs.setVar('page',i)+'" style="'+this.config.otherPageStyle+'">['+i+']</a>'
          }
          navBtn+=_btn;
        }
  
        if (this.config.prevIcon) var nextBtn ='<img src="'+this.config.nextIcon+'" border="0" align="absmiddle">';
        else var nextBtn = '▶';
        if (this.totalPage > this.nextPage) {
          nextBtn = nextBtn.link(this.qs.setVar('page',this.nextPage));
        }
        return prevBtn+navBtn+nextBtn;
    }
  }

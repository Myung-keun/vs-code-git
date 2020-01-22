

const list_element = document.querySelector('#list');
const pagination_element = document.querySelector('#pagination');

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

    for (let i = 0; i < paginatedItems.length; i++){
        //전달받은 items매개변수(storageValue)에서 5개씩 출력하기 위해서 item변수 생성 후 paginatedItem 대입.
        let item = paginatedItems[i];
        sortTable(item);
    }
}

//전달받은 행 갯수를 바탕으로 페이지 네비게이션 생성
function SetupPagination(items, wrapper, rows_per_page){
    wrapper.innerHTML="";

    //전달받은 행 나누기 페이지 당 행 갯수 (올림)
    let page_count = Math.ceil(items.length / rows_per_page);

    //페이지 네비게이션의 설정된 버튼갯수 생성 
    for (let i = 1; i <page_count +1; i++){
       let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

//버튼 생성 함수
function PaginationButton(page, items){   
    let button = document.createElement("button");
    button.innerText = page;

    //전달받은 페이지가 현재 페이지와 같다면 active클래스 부여.
    if(current_page == page){button.className='active'}

    button.addEventListener("click",function(){
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector(".pagenumbers button.active");
        current_btn.classList.remove("active");

        button.className="active";
    });

    return button;
}

DisplayList(storageValue, list_element, rows, current_page);
SetupPagination(storageValue, pagination_element, rows);

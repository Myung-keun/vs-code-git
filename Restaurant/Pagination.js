

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

    for (let i = 0; i < paginatedItems.length; i++){
        //전달받은 items매개변수(storageValue)에서 5개씩 출력하기 위해서 item변수 생성 후 paginatedItem 대입.
        let item = paginatedItems[i];
        sortTable(item);
    }
}

DisplayList(storageValue, list_element, rows, current_page);
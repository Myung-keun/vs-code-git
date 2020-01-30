import React from 'react';
import PaintTable from './paintTable';
import PlusRes from './plusRes';

function App() {
  const style = {
    width:'35pt',
    height:'35pt',
    cursor: 'pointer'
  };

  return (
    <>
      <div className="text1">
        <h1>오늘의 점심 메뉴는?</h1>
        <h4>오늘 특별히 가고싶은 식당이 있다면 선택을 눌러주세요!<br />
          선택된 식당들 중에서만 식당을 골라줍니다!!
      </h4>
      </div>
      <div class="wrap">
        <ul><li id="paging">전체 보기</li></ul>
        <ul class="menu">
          <li id="Korean">한식</li>
          <li id="Chinese">중식</li>
          <li id="Japanese">일식</li>
          <li id="Foreign">양식</li>
        </ul>
      </div>
      <table class="mainTable">
        <thead>
          <tr>
            <td>식당 이름</td>
            <td>식당 위치</td>
            <td>거리</td>
            <td>메뉴</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody id="list">
          <PaintTable />
        </tbody>
      </table>
      <div class="pagenumbers" id="pagination">

      </div>
      <div class="bt">
        <button class="plus" style={style}>+</button>
      </div>
      <div class="addedTable">
        <PlusRes/>
      </div>
      <div class="clickbox">
        <button id="clicks">이 중에 갈 식당은?</button>
      </div>
      <div class="pagination"></div>
    </>
  );
}

export default App;

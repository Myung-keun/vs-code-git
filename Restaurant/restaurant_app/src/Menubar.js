import React from 'react';

function Menubar() {
    return (  
        <div>   
        <ul>
            <li id="paging">전체 보기</li>
        </ul>
        <ul class="menu">
          <li id="Korean">한식</li>
          <li id="Chinese">중식</li>
          <li id="Japanese">일식</li>
          <li id="Foreign">양식</li>
        </ul>   
        </div>   
    );
  }

  export default Menubar;
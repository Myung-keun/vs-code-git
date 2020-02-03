import React, { Component } from 'react';
import PlusRes from './plusRes';
import TableForm from './TableForm';


const style = {
  width: '35pt',
  height: '35pt',
  cursor: 'pointer'
};

class App extends Component {
  id = 5
  state = {
    resInfo: [
      {
          resName:"오카에리",
          resLoca:"봉은사로 44길 68",
          resDis:"1분",
          resMenu:"일식",
          id:0
      }, {
          resName:"해변에서",
          resLoca:"언주로98길 5-3",
          resDis:"1분",
          resMenu:"한식",
          id:1
      },{
          resName:"담소",
          resLoca:"선릉로86길 48",
          resDis:"1분",
          resMenu:"한식",
          id:2 
      },{
          resName:"김가면옥",
          resLoca:"언주로98길 9",
          resDis:"1분",
          resMenu:"한식",
          id:3 
      }, {
          resName:"청운각",
          resLoca:"언주로98길 21",
          resDis:"5분",
          resMenu:"중식",
          id:4
      }, {
        resName:"매반생면",
        resLoca:"언주로508 지하1층",
        resDis:"5분",
        resMenu:"한식",
        id:5
    }, {
      resName:"어메이징 타이",
      resLoca:"언주로98길 25",
      resDis:"5분",
      resMenu:"양식",
      id:6
    },{
      resName:"포하임",
      resLoca:"선릉로86길 15",
      resDis:"5분",
      resMenu:"양식",
      id:7
    }, {
      resName:"동해식당",
      resLoca:"역삼동 700-22",
      resDis:"5분",
      resMenu:"한식",
      id:8
    }, {
      resName:"코우",
      resLoca:"언주로98길 23",
      resDis:"5분",
      resMenu:"일식",
      id:9
    }, {
      resName:"쌈밥",
      resLoca:"동해식당 옆",
      resDis:"5분",
      resMenu:"한식",
      id:10
    }
    ]
  }


  handleCreate = (data) => {
    const {resInfo} = this.state;
    this.setState({
      resInfo: resInfo.concat({id: this.id++, ...data})
    })
    console.log(data);
  }

  handleRemove = (id) => {
    const { resInfo } = this.state;
    this.setState({
      resInfo: resInfo.filter(info => info.id !== id)
    })
  }

  render() {
    const {resInfo} = this.state;
    return (
      <>
        <div className="text1">
          <h1>오늘의 점심 메뉴는?</h1>
          <h4>오늘 특별히 가고싶은 식당이 있다면 선택을 눌러주세요!<br />
            선택된 식당들 중에서만 식당을 골라줍니다!!
      </h4>
        </div>
        <div className="wrap">
          <ul><li id="paging">전체 보기</li></ul>
          <ul className="menu">
            <li id="Korean">한식</li>
            <li id="Chinese">중식</li>
            <li id="Japanese">일식</li>
            <li id="Foreign">양식</li>
          </ul>
        </div>
        <table className="mainTable">
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
            <PlusRes 
            data = {this.state.resInfo}
            onRemove = {this.handleRemove}/>
          </tbody>
        </table>
        <div className="pagenumbers" id="pagination">

        </div>
        <div className="bt">
          <button className="plus" style={style}>+</button>
        </div>
        <div className="addedTable">
          <TableForm onCreate={this.handleCreate} />          
        </div>
        <div className="clickbox">
          <button id="clicks">이 중에 갈 식당은?</button>
        </div>
        <div className="pagination"></div>
      </>
    );
  }
}

export default App;

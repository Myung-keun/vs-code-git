import React, { Component } from 'react';

class TableForm extends Component {
  state = {
    resName: '',
    resLoca: '',
    resDis:'',
    resMenu:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      resName: '',
      resLoca: '',
      resDis:'',
      resMenu:'',
    })
  }
  render() {
    return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><input
                                placeholder="식당이름"
                                value={this.state.name}
                                onChange={this.handleChange}
                                name="resName"
                            /></td>
                            <td><input
                                placeholder="식당주소"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                name="resLoca"
                            /></td>
                            <td><input
                                placeholder="식당거리"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                name="resDis"
                            /></td>
                            <td><input
                                placeholder="종류"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                name="resMenu"
                            /></td>
                            <td><button type="submit">+</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default TableForm;
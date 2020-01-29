import React, {Component} from 'react';

class PaintTable extends Component{
    state = {
        char: 'X' 
    }

    clickDelete = () => {
        if (this.state.char === 'X') {
            this.setState({
                char: 'O'
            })
        } else if(this.state.char ==='O'){
            this.setState({
                char:'X'
            })
        }
    }

    render(){
        return(
            <tr>
                <td>식당이름</td>
                <td>식당위치</td>
                <td>거리</td>
                <td>메뉴</td>
                <button onClick={this.clickDelete}>{this.state.char}</button>
            </tr>
        )
    }
}

export default PaintTable;
import React, {Component} from 'react';

class PaintTable extends Component{
    static defaultProps = {
        resName: '식당이름',
        resLoca: '식당위치',
        resDis: '식당거리',
        resMenu: '음식종류'
    }

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
                <td>{this.props.resName}</td>
                <td>{this.props.resLoca}</td>
                <td>{this.props.resDis}</td>
                <td>{this.props.resMenu}</td>
                <button onClick={this.clickDelete}>{this.state.char}</button>
            </tr>
        )
    }
}


export default PaintTable;
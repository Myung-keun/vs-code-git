import React, {Component} from 'react';

class PaintTable extends Component{
    static defaultProps = {
            resInfo : {
                resName:"오카에리",
                resLoca:"봉은사로 44길 68",
                resDis:"1분",
                resMenu:"일식",
                id: 0
            }
        }
    

    handleRemove= () => {
        const {resInfo, onRemove} = this.props;
        onRemove(resInfo.id);
    }

    render(){
        const {resName, resLoca, resDis, resMenu, id} = this.props.resInfo;
        return(
            <tr>
                <td>{resName}</td>
                <td>{resLoca}</td>
                <td>{resDis}</td>
                <td>{resMenu}</td>
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        )
    }
}



export default PaintTable;
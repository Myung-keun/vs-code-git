import React, { Component } from 'react';

class PlusRes extends Component{
    state = {
        resName: '',
        resLoca: '',
        resDis: '',
        resMenu:''
    }

    addInfo1 = (event) =>{
        const input = event.target;

        this.setState({
            resName: input.value,
            resLoca: this.state.resLoca,
            resDis: this.state.resdid,
            resMenu: this.state.resMenu
        })
    }
    addInfo2 = (event) =>{
        const input = event.target;

        this.setState({
            resName: this.state.resName,
            resLoca: input.value,
            resDis: this.state.resdid,
            resMenu: this.state.resMenu
        })
    }
    addInfo3 = (event) =>{
        const input = event.target;

        this.setState({
            resName: this.state.resName,
            resLoca: this.state.resLoca,
            resDis: input.value,
            resMenu: this.state.resMenu
        })
        console.log(this.state)
    }
    addInfo4 = (event) =>{
        const input = event.target;

        this.setState({
            resName: this.state.resName,
            resLoca: this.state.resLoca,
            resDis: this.state.resdid,
            resMenu: input.value
        })
        console.log(this.state)
    }

    addInfos = () => {
        console.log(this.state)
    };


  
    render(){
        return(
            <form onSubmit={this.addInfos}>
                <table>
                    <tr>
                        <td><input onChange={this.addInfo1}/></td>
                        <td><input onChange={this.addInfo2}/></td>
                        <td><input onChange={this.addInfo3}/></td>
                        <td>
                            <select onChange={this.addInfo4}>
                                <option value={'한식'}>한식</option>
                                <option value={'중식'}>중식</option>
                                <option value={'일식'}>일식</option>
                                <option value={'양식'}>양식</option>
                            </select>
                        </td>
                        <td><button type="submit">+</button></td>
                    </tr>
                </table>
            </form>
        )
    }
}

export default PlusRes;
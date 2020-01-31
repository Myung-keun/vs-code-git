import React, { Component } from 'react';

class PlusRes extends Component{
    state={
        resName:'',
        resLoca:'',
        resDis:'',
        resMenu:''
    };
    
    addObj = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        
    }

    addInfos = (e) => {
        e.preventDefault();
        localStorage.setItem("resInfo",JSON.stringify(this.state))
        this.props.onCreate(this.state);
        this.setState([{
            resName:'',
            resLoca:'',
            resDis:'',
            resMenu:''
        }])
    };

    componentWillMount(){
        const resInfo = localStorage.resInfo;

        if(resInfo){
            this.setState({
                resInfo: JSON.parse(resInfo)
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.resInfo) !== JSON.stringify(this.state.resInfo)){
            localStorage.resInfo = JSON.stringify(this.state.resInfo);
        }
    }

    render(){
        return(
            <form onSubmit={this.addInfos}>
                <table>
                    <tr>
                        <td><input onChange={this.addObj} name="resName"/></td>
                        <td><input onChange={this.addObj} name="resLoca"/></td>
                        <td><input onChange={this.addObj} name="resDis"/></td>
                        <td>
                            <select onChange={this.addObj} name="resMenu" >
                                <option value={'한식'} selected>한식</option>
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
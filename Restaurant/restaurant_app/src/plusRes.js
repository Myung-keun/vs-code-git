import React, { Component } from 'react';
import PaintTable from './paintTable';

class PlusRes extends Component{
    static defaultProps = {
        data: []
    }
    

    render(){
        const {data} = this.props;
        const list = data.map(
            resInfo => (<PaintTable key={resInfo.id} resInfo={resInfo} />)
        );

        return(
            <>{list}</>
        )
    }
}

export default PlusRes;
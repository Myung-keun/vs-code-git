import React, { Component } from 'react';
import PaintTable from './paintTable';

class PlusRes extends Component{
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
    }
    

    render(){
        const {data, onRemove} = this.props;
        const list = data.map(
            resInfo => (<PaintTable 
                key={resInfo.id} 
                resInfo={resInfo} 
                onRemove={onRemove}
                />)
        );

        return(
            <>{list}</>
        )
    }
}

export default PlusRes;
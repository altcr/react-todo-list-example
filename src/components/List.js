import React, { Component } from 'react';

/*Icons*/
import { FaTrash } from "react-icons/fa";

class List extends Component {
    constructor(props) {
        super(props);
        this.itemDelete = this.itemDelete.bind(this);
    }

    itemDelete(e, val){
        e.preventDefault();
        this.props.itemDelete(val);
    }
    
    render() {
        const items = this.props.works.map((item, id) => {
            return(
                <div className="listItem" key={id}>
                    <div className="listNumber">{id+1}</div>
                    <div className="listDescription">{item}</div>
                    <div className="listButtons">
                        <FaTrash className="itemDelete" onClick={(e) => this.itemDelete(e, id)}/>
                    </div>
                </div>
            )
        });
        return (
            <div className="containerList">
                {React.Children.count(items) > 0 ? items : <p className="listMessage">There is no work to be done.</p>}                
            </div>
        );
    }
}

export default List;
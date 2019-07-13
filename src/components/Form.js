import React, { Component } from 'react';

/*Icons*/
import { FaPlus } from "react-icons/fa";

class Form extends Component {
    constructor(props) {
        super(props);
        this.addWork = this.addWork.bind(this);
    }
    
    addWork(e){
        e.preventDefault();
        const txt = document.getElementById("inputID");
        const val = txt.value;
        txt.value = "";
        this.props.addWork(val);
    }

    render() {
        return (
            <div className="containerForm">
                <form onSubmit={this.addWork} className="todoForm">
                    <input name={"work"} id={"inputID"} placeholder={"Enter a work!"}/>
                </form>
                <button type="button" className="addBtn" id={"btnADD"} onClick={this.addWork}>
                    <FaPlus />
                </button>
            </div>
        );
    }
}

export default Form;
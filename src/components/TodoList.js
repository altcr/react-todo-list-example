import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import '../styles/TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works : []
        }

        this.addWork = this.addWork.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
    }

    addWork(val){
        if(val !== ""){
            let works = this.state.works;
            works.push(val);
            this.setState({ works:  works});
        }
    }

    itemDelete(val){
        if(val !== ""){
            let works = this.state.works;
            works.splice(val,1);
            this.setState({ works: works });
        }
    }

    render() {
        return (
            <div>
                <Form addWork={this.addWork}></Form>
                <List works={this.state.works} itemDelete={this.itemDelete}></List>
            </div>
        );
    }
}

export default TodoList;
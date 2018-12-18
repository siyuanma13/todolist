import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ToDo } from './ToDo.js';
import { ToDoDisplay } from './ToDoDisplay.js';

class App extends Component {

    constructor(props) {
    super();
    this.state = {
        currentItem: {
            key: "",
            item: ""
        },
        itemList: []
    }
    //dont forget to bind functions, otherwise the children components 
    //wont be able to use these. 
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    addItem = (event) => {
        event.preventDefault();

        if (this.state.currentItem.item != "") {
 

            let itemList2 = this.state.itemList.concat(this.state.currentItem);


            //I did not realize setState was async and spent some time troubleshooting why my console.log
            //wasn't working.   
            this.setState(
                {
                    itemList: itemList2,
                    currentItem: { key: "", item: "" }
                },
         
            )

          
           
            
        }
       

    }

    handleChange = (event) => {
       
        let current_key = Date.now();
        let current_item = event.target.value;
        this.setState(
            {
                currentItem: {
                    key: current_key,
                    item: current_item
                }
            }
        )
        
    }


    deleteItem = (key) => {
        let filteredList = this.state.itemList.filter(
            (item) => {
                return item.key !== key;
            }
        )

        this.setState(
            {
                itemList: filteredList
            }
        )
    }

    render() {
    return (
            <div className="App BackgroundStyle">
            <ToDo
                addItem={this.addItem}
                input={this.state.currentItem}
                handleChange={this.handleChange}

            />
            <ToDoDisplay
                listEntries={this.state.itemList}
                delete={this.deleteItem}
            />
        </div>


    );
    }
}

export default App;

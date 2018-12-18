// JavaScript source code
import React, { Component } from 'react'

class ToDoDisplay extends Component {
    constructor(props) {
        super(props);
    }


    render() {
       
        const listEntries = this.props.listEntries;
        const returnedList = listEntries.map(
            //need to use an arrow function for this, otherwise 'this' won't 
            //be bound to props. 
            (items) => {
                console.log(this.props.listEntries);
                return <li key={items.key} onClick={() =>
                    { this.props.delete(items.key) }

                }> {items.item} </li>
            }
        )

        
        return (
            <div className ="text-center">
                <div className= "d-inline-block">
                    <ul> {returnedList} </ul>
                </div>
            </div>

        )
    }
}

export { ToDoDisplay }


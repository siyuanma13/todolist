// JavaScript source code
import React, { Component } from 'react'


class ToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "container">
                <div className="row fill-viewport align-items-center"> 
                    <div className="col-12 fill-viewport text-center">
                        <h1 className="pt-5">
                            <form onSubmit={this.props.addItem}>

                                <input type="text" placeholder="Enter Task"
                                    onChange={this.props.handleChange}
                                    value={this.props.input.item}
                                />

                            <button type="submit">Submit</button>
                            </form>
                             
                        </h1>
                    </div>
                </div>
            </div>
        )

    }
}

export { ToDo };
import React, { Component } from 'react'

export default class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    
  render() {
    return (
      <div className="well output">
        {this.props.value}
      </div>
    )
  }
}

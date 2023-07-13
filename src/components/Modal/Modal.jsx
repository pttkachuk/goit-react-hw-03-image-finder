import React, { Component } from 'react'

export default class Modal extends Component {
    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.on
        }
    }
  render() {
    return (
      <div>Modal</div>
    )
  }
}

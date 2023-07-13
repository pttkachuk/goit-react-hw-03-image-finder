import React, { Component } from 'react'

export default class App extends Component {

  state = {
    images: [],
    largeImage: '',
    isLoading: false,
    page: 1,
    showModal: false,
    erroe: '',
  }
  
  
  render() {
    return (
      <div>App</div>
    )
  }
}


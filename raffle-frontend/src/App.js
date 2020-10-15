import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3001/users")
    .then(response => response.json())
    .then(data => console.log(data))
}
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

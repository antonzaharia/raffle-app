import React, { Component } from 'react'
import Registration from './containers/Registration'
import Container from 'react-bootstrap/Container'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Registration />
      </Container>
    )
  }
}

import React, { Component } from 'react'
import Header from './containers/Header'
import Footer from './containers/Footer'
import MainComponent from './containers/MainComponent'
import Container from 'react-bootstrap/Container'

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Container>
        <MainComponent />
      </Container>
      <Footer />
      </div>
    )
  }
}

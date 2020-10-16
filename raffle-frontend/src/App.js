import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header'
import Footer from './containers/Footer'
import MainComponent from './containers/MainComponent'
import AccountContainer from './containers/AccountContainer'
import Container from 'react-bootstrap/Container'

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Container>
        <Router>
          <div>
            <Route exact path='/' component={MainComponent} />
            <Route path='/account' component={AccountContainer} />
          </div>
        </Router>
      </Container>
      <Footer />
      </div>
    )
  }
}

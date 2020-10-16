import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from './actions/UserActions'

import Header from './containers/Header'
import Footer from './containers/Footer'
import MainComponent from './containers/MainComponent'
import AccountContainer from './containers/AccountContainer'
import Container from 'react-bootstrap/Container'

 class App extends Component {
  render() {
    return (
      <div>
      <Header signUp={this.props.signUp}/>
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
const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
})
export default connect(null, mapDispatchToProps)(App)
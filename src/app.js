import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import Home from 'page/home'
import Layout from 'component/layout'

import './index.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Redirect from='*' to='/'/>
          </Switch>
        </Layout>
      </Router>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)


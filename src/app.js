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
            <Route exact path='/product' component={Home}/>
            <Route exact path='/product-category' component={Home}/>
            <Route exact path='/order' component={Home}/>
            <Route exact path='/user' component={Home}/>
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


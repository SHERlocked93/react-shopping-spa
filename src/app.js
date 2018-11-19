import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import Layout from 'component/layout'
import Error from 'component/error'
import Home from 'page/home'
import Login from 'page/login'
import User from 'page/user'

import './index.scss'
import 'style/theme.css'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' render={props =>
            <Layout>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/product' component={Home}/>
                <Route exact path='/product-category' component={Home}/>
                <Route exact path='/order' component={Home}/>
                <Route exact path='/user' component={User}/>
                <Route component={Error}/>
              </Switch>
            </Layout>
          }/>
        </Switch>
      </Router>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)


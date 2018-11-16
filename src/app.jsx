import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css'
import './index.scss'

class A extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <div>Component A</div>
        <Switch>
          <Route path={`${this.props.match.path}`} render={route => <div>当前组件是不带参数的A</div>} exact/>
          <Route path={`${this.props.match.path}/sub`} render={route => <Sub>进入Sub组件</Sub>} exact/>
          <Route path={`${this.props.match.path}/:id`} render={route => <div>当前组件是带参数的A：{route.match.params.id}</div>}/>
        </Switch>
      </div>
    )
  }
}

class B extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>Component B</div>
    )
  }
}

class Sub extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>当前是sub组件</div>
    )
  }
}

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}


ReactDOM.render(
  <Router>
    <Wrapper> Hello, world ~! <i className="fa fa-address-card-o" aria-hidden="true"/>
      <br/>
      <Link to='/a'>组件A</Link>
      <br/>
      <Link to='/a/sub'>组件A 进入/a/sub</Link>
      <br/>
      <Link to='/a/1231231'>组件A 带参数</Link>
      <br/>
      <Link to='/b'>组件B</Link>
      <hr/>
      <Route path='/a' component={A}/>
      <Route path='/b' component={B}/>
    </Wrapper>
  </Router>,
  document.getElementById('app')
)


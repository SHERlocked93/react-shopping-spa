import React, { Component } from 'react'
import * as Utils from 'utils'
import * as Api from 'api'
import { Link } from 'react-router-dom'

class NavTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: Utils.getStorage('userInfo').username || ''
    }
  }
  
  /**
   * 退出登录
   */
  onLogout() {
    Api.logout()
      .then(res => {
        Utils.removeStorage('userInfo')
        window.location.href = '/login'
      })
      .catch(err => console.error(err))
  }
  
  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>React</b> Shop</Link>
        </div>
        
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="#" aria-expanded="false">
              <i className="fa fa-user fa-fw"/>
              {
                this.state.username
                ? <span>欢迎：{this.state.username}</span>
                : <span>欢迎您</span>
              }
              <i className="fa fa-caret-down"/>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={() => this.onLogout()}><i className="fa fa-sign-out fa-fw"/>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavTop

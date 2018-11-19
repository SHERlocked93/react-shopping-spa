import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Api from 'api'
import PageTitle from 'component/page-title'

import './index.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userCount: '-',
      productCount: '-',
      orderCount: '-'
    }
  }
  
  componentDidMount() {
    this.loadCount()
  }
  
  loadCount() {
    Api.getHomeCount()
      .then(res => this.setState(res))
  }
  
  render() {
    return (
      <div id='page-wrapper'>
        <PageTitle title='首页'/>
        
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.state.userCount}</span>
            <Link to='/user'>
              <i className="fa fa-user-o"/> 用户数：
            </Link>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.state.productCount}</span>
            <Link to='/product'>
              <i className="fa fa-archive"/> 商品数：
            </Link>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.state.orderCount}</span>
            <Link to='/order'>
              <i className="fa fa-file-text-o"/> 订单数：
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home

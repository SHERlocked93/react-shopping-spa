import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class navSide extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            
            {/* 一级导航 */}
            <li>
              <Link to="/"><i className="fa fa-dashboard"/>首页</Link>
            </li>
            
            {/* 二级导航 */}
            <li className='active'>
              <Link to="/"><i className="fa fa-sitemap"/>Multi-Level Dropdown<span className="fa arrow"/></Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <Link to="/">Second Level Link</Link>
                </li>
                <li>
                  <Link to="/">Second Level Link</Link>
                </li>
              </ul>
            </li>
          </ul>
        
        </div>
      
      </div>
    )
  }
}

export default navSide

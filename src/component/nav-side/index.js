import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class navSide extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            
            {/* 首页 */}
            <li>
              <NavLink to="/" activeClassName='active-menu' exact>
                <i className="fa fa-dashboard"/>首页
              </NavLink>
            </li>
            
            {/* 商品管理 */}
            <li className='active'>
              <Link to="/product"><i className="fa fa-archive"/>商品<span className="fa arrow"/></Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/product" activeClassName='active-menu'>商品管理</NavLink>
                </li>
                <li>
                  <NavLink to="/product-category" activeClassName='active-menu'>品类管理</NavLink>
                </li>
              </ul>
            </li>
            
            {/* 订单 */}
            <li className='active'>
              <Link to="/order"><i className="fa fa-file-text-o"/>订单<span className="fa arrow"/></Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/order" activeClassName='active-menu'>订单管理</NavLink>
                </li>
              </ul>
            </li>
            
            {/* 用户 */}
            <li className='active'>
              <Link to="/user"><i className="fa fa-user-o"/>用户<span className="fa arrow"/></Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/user" activeClassName='active-menu'>用户管理</NavLink>
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

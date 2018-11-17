import React, { Component } from 'react'

class navSide extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            
            <li>
              <a href="#"><i className="fa fa-dashboard"/> Dashboard</a>
            </li>
            <li>
              <a href="#" className="active-menu"><i className="fa fa-desktop"/> UI Elements</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-bar-chart-o"/> Charts</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-qrcode"/> Tabs &amp; Panels</a>
            </li>
            
            <li>
              <a href="#"><i className="fa fa-table"/> Responsive Tables</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-edit"/> Forms </a>
            </li>
            
            
            <li>
              <a href="#"><i className="fa fa-sitemap"/> Multi-Level Dropdown<span className="fa arrow"/></a>
              <ul className="nav nav-second-level collapse">
                <li>
                  <a href="#">Second Level Link</a>
                </li>
                <li>
                  <a href="#">Second Level Link</a>
                </li>
                <li>
                  <a href="#">Second Level Link<span className="fa arrow"/></a>
                  <ul className="nav nav-third-level collapse">
                    <li>
                      <a href="#">Third Level Link</a>
                    </li>
                    <li>
                      <a href="#">Third Level Link</a>
                    </li>
                    <li>
                      <a href="#">Third Level Link</a>
                    </li>
                  
                  </ul>
                
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><i className="fa fa-fw fa-file"/> Empty Page</a>
            </li>
          </ul>
        
        </div>
      
      </div>
    )
  }
}

export default navSide

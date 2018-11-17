/**
 * 创建于 2018/11/17
 * 作者: SHERlocked93
 * 功能: 仿 https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/ui-elements.html
 */

import React, { Component } from 'react'
import NavTop from '../nav-top'
import NavSide from '../nav-side'

class Layout extends Component {
  render() {
    return (
      <div id='wrapper'>
        <NavTop/>
        <NavSide/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout

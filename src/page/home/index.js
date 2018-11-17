import React, { Component } from 'react'
import PageTitle from 'component/page-title'
import './theme.css'

class Home extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <PageTitle title='首页'/>
        <button className='btn btn-default'>测试</button>
      </div>
    )
  }
}

export default Home

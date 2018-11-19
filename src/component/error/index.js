import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from 'component/page-title'

import './index.scss'

class Error extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <PageTitle/>
        <div className="w3-main">
          <div className="agile-info">
            <PageTitle title='404'/>
            <h3>SORRY</h3>
            <p>The Page You're Looking for Was Not Found.</p>
            <Link to="/">
              <i className="fa fa-angle-double-left"/>go back</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Error

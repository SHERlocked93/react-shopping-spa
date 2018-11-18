import React, { Component } from 'react'
import * as Api from 'api'
import * as Utils from 'utils'
import './index.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: Utils.getUrlParam('redirect') || '/'
    }
  }
  
  componentWillMount() {
    document.title = '登陆'
  }
  
  /**
   * 表单输入
   * @param ev
   * @param tar
   */
  onStateChange(ev, tar) {
    this.setState({
      [tar]: ev.target.value
    })
  }
  
  /**
   * 提交表单
   */
  onSubmit() {
    const formData = new FormData()
    formData.append('username', this.state.username)
    formData.append('password', this.state.password)
    Api.login(formData)
      .then(res => {
        this.props.history.push(this.state.redirect)
      })
      .catch(err => alert(err))
  }
  
  onKeyUp(ev) {
    ev.keyCode === 13 && this.onSubmit()
  }
  
  render() {
    return (
      <div className='col-md-4 col-md-offset-4'>
        <div className='panel panel-default login-panel'>
          <div className="panel-heading">欢迎登陆 React-Shopping-SPA</div>
          <div className="panel-body">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="请输入用户名"
                     onKeyUp={ev => this.onKeyUp(ev)}
                     onChange={ev => this.onStateChange(ev, 'username')}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="请输入密码"
                     onKeyUp={ev => this.onKeyUp(ev)}
                     onChange={ev => this.onStateChange(ev, 'password')}/>
            </div>
            <button type="submit" className="btn btn-info btn-block"
                    onClick={ev => this.onSubmit()}>登陆
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

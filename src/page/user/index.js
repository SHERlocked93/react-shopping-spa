import React, { Component } from 'react'
import * as Api from 'api'
import PageTitle from 'src/component/page-title'
import Pagination from 'src/component/pagination'


class User extends Component {
  constructor(props) {
    super(props)
    this.state = { pageNum: 1, list: [] }
  }
  
  
  componentDidMount() {
    this.loadUserList()
  }
  
  /**
   * 加载用户列表
   */
  loadUserList() {
    Api.getUserList(this.state)
      .then(res => this.setState(res))
  }
  
  /**
   * 改变页码
   * @param pageNum
   */
  onPageNumChange(pageNum) {
    this.setState({ pageNum }, this.loadUserList)
  }
  
  render() {
    let tableBody = this.state.list.map(user => (<tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{new Date(user.createTime).toLocaleString()}</td>
    </tr>))
    
    let tableError = (<tr>
      <td colSpan={5} className='text-center'>暂无数据</td>
    </tr>)
    
    return (
      <div>
        <PageTitle title='用户管理'/>
        
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>用户名</th>
              <th>邮箱</th>
              <th>电话</th>
              <th>注册时间</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.length
              ? tableBody
              : tableError
            }
          </tbody>
        </table>
        
        <Pagination current={this.state.pageNum}
                    total={this.state.total}
                    onChange={(pageNum, pageSize) => this.onPageNumChange(pageNum)}/>
      </div>
    )
  }
}

export default User

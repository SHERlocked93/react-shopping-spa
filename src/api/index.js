/**
 * 创建于 2018/11/18
 * 作者: QianYu
 * 功能: 封装Api
 */

import fetch from 'utils/fetch'

// 登陆
export const login = formData => fetch({
  url: '/manage/user/login.do',
  method: 'post',
  data: formData
})

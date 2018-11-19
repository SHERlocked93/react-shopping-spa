/**
 * 创建于 2018/11/18
 * 作者: SHERlocked93
 * 功能: 封装Api
 */

import fetch from 'utils/fetch'


/**
 * 登陆
 * @param formData
 */
export const login = formData => fetch({
  url: '/manage/user/login.do',
  method: 'post',
  data: formData
})

/**
 * 退出登陆
 */
export const logout = () => fetch({
  url: '/user/logout.do',
  method: 'post'
})

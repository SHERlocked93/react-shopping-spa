/**
 * 创建于 2018/11/19
 * 作者: SHERlocked93
 * 功能: 工具
 */

export * from './storage'

/**
 * 获取URL参数
 */
export const getUrlParam = (name) => {
  // param=123&param1=456
  let queryString = window.location.href.split('?')[1] || '',
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
    result = queryString.match(reg)
  return result ? decodeURIComponent(result[2]) : null
}

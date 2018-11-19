/**
 * 创建于 2018/11/19
 * 作者: SHERlocked93
 * 功能: 操作storage
 */

import _ from 'lodash'

/**
 * 设置
 * @param key
 * @param data
 */
export const setStorage = (key, data) => {
  const dataType = typeof data
  if (['object'].includes(dataType)) {
    window.localStorage.setItem(key, JSON.stringify(data))
  } else if (['number', 'string', 'boolean'].includes(dataType)) {
    window.localStorage.setItem(key, data)
  } else throw new Error('不支持的存储类型')
}

/**
 * 获取
 * @param key
 * @returns {string}
 */
export const getStorage = key => {
  let data = window.localStorage.getItem(key)
  return _.isNil(data)
         ? ''
         : JSON.parse(data)
}

/**
 * 移除
 * @param key
 */
export const removeStorage = key => {
  window.localStorage.removeItem(key)
}

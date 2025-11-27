/**
 * 解析图片路径，自动处理 Base URL
 * @param {string} path - 原始路径
 * @returns {string} - 处理后的完整路径
 */
export const resolvePath = (path) => {
  if (!path) return ''
  
  // 如果是完整的 URL (http/https)，直接返回
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // 获取 Base URL，默认为 '/'
  const baseUrl = import.meta.env.BASE_URL
  
  // 如果 path 以 / 开头，且 baseUrl 不是 /，则拼接
  if (path.startsWith('/') && baseUrl !== '/') {
    // 避免双重斜杠，如果 baseUrl 以 / 结尾，path 以 / 开头
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
    return `${cleanBase}${path}`
  }
  
  return path
}

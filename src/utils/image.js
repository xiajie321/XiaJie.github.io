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
  
  // 获取 Base URL
  let baseUrl = import.meta.env.BASE_URL
  
  // 确保 baseUrl 不以 / 结尾，除非它就是 /
  if (baseUrl !== '/' && baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1)
  }
  
  // 确保 path 以 / 开头
  if (!path.startsWith('/')) {
    path = '/' + path
  }
  
  // 如果 baseUrl 是 /，直接返回 path
  if (baseUrl === '/') {
    return path
  }
  
  // 拼接
  return `${baseUrl}${path}`
}

/**
 * 获取资源完整 URL (包含 base)
 * 优先处理 public 目录下的静态资源
 */
export const getAssetUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  
  // 移除开头的 ./
  if (path.startsWith('./')) path = path.slice(2)
  
  // 确保以 / 开头
  if (!path.startsWith('/')) path = '/' + path
  
  return resolvePath(path)
}

/**
 *
 * @file utils
 * @author qiexiaohui
 *
 * */

/**
 * 推荐学习：JSDOCKER
 * @desc 网络请求封装，项目内请走这个封装
 * @param {Object} [params] - 发请求的参数
 * @return {Promise} 请求的Promise任务对象
 *
 * */

export const request = parmas => {
  // params.methods
  let requestParmas = {
    // 扩展运算符
    ...parmas,
    method:(parmas.method && parmas.method.toUpperCase()) || 'GET'
  };
  // axios,徒手撸代码,$.ajax
  return fetch(requestParmas.url,requestParmas).then(res=>{
    return res.json();
  })
}
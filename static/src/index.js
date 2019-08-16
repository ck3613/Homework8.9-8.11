/**
 * 管理全局的入口文件
 * @author qiexiaohui
 * */

import {request} from "./utils";
import compoments from "./items/index"

console.log(compoments.SinglePic);
class Manager {
  constructor($container){
    this.$container = $container
  }
  init(){
    // 初始化时候先传输一版数据
    this.appendData();
    // 启用监听是否到底
    this.detectLoadData(()=>{
      // 注入行为
      this.appendData()
    });
  }
  appendData(){
    request({
      url:'/Project/list/list.json'
    }).then(res => {
      const list = res.data;
      list.forEach(item =>{
        // 首字母转换大写方法
        const compomentsName = item.type.replace(/^\w/g,w=>w.toUpperCase());
        // 调用新的类
        const Compoment = compoments[compomentsName];
        const currentCompoment = new Compoment(item);
        this.$container.appendChild(currentCompoment.constructElement())
      })
    });
  }
  // 依赖注入写法
  detectLoadData(callBack = ()=>{}){
    // 定义阈值
    const threshold = 50;
    window.onscroll = ()=>{
      // 整个页面的高度
      const offsetHeight = document.documentElement.offsetHeight;
      // 屏幕的高度
      const screenHeight = window.screen.height;
      // 屏幕举例顶部的高度
      const scrollY = window.scrollY;
      // 举例底部的举例 = 文档高度 - 屏幕高度 - 屏幕举例顶部高度
      const gap = offsetHeight - screenHeight -scrollY;
      if(gap < threshold){
        callBack();
      }
    }
  }
  static getInstance($container){
    // 返回一个实例
    return new Manager($container);
  }
}


// 获取要操作的部分
const $container = document.getElementById('container');
// 获取Manager的实例
const manager = Manager.getInstance($container);


// 初始化方法
manager.init();
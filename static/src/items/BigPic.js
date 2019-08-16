/**
 * @file 大图的组件
 * @author qiexiaohui
 * */

import Component from './compoment';
export default class BigPic extends Component{
  constructor(props){
    super(props)
  }
  render() {
    var data = this.props.data;
    // join方法可以把一个数组拼成一个字符串
    var imageList = this.props.data.imageList.map(image=>{
      return `<img src="${image}">`
    }).join('');
    return `
      <div class="big-image">
        <h3>${data.title}</h3>
        <div class="image-list">
          ${imageList}
        </div>
      </div>
    `
  }
}
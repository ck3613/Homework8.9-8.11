/**
 * @file 多图的组件
 * @author qiexiaohui
 * */

import Component from './compoment';

export default class MultipPic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.data;
    var imageList = data.imageList.map(image =>{
      return `<img src="${image}">`
    }).join('');
    return `
      <div class="item multiple-image onclick = 'aa'">
        <h3>${data.title}</h3>
        <div class="image-list">
        ${imageList}
        </div>
      </div>
    `
  }
}
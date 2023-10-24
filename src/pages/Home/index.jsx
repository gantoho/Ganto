import { Component } from 'react'
// import getHomeData from '../../api/api.js'
// import debounce from '../../utils/debounce'
import './index.scss'

export default class Home extends Component {

  state = {
    HomeData: []
  }

  // getHomeDataList = debounce(() => {
  //   getHomeData().then(resolve => {
  //     if (resolve.status === 200) {
  //       console.log(resolve, 'resolve')
  //       this.setState({
  //         HomeData: resolve.data.data
  //       })
  //     } else {
  //       console.log("返回数据异常")
  //     }
  //   }).catch(reject => {
  //     console.log("请求接口异常", reject)
  //   })
  // }, 500)

  render() {
    return (
      <div className='home'>
        <p>你好！我是干徒，一名前端开发</p>
        <p>常用的前端技术：JavaScript、Vue、React；目前在学Golang、Rust、Java</p>
        <p>
          <i>你可以在此处找到我：</i>
          <a target='blank' href="https://gitee.com/ganto">Gitee@ganto</a>、
          <a target='blank' href="https://github.com/gantoho">GitHub@gantoho</a>、
          <a target='blank' href="https://space.bilibili.com/1112912961">BiliBili@干徒</a>、
          <a target='blank' href="https://www.cnblogs.com/ganto">博客园@干徒</a>、
          <a target='blank' href="mailto:i@ganto.me?cc=i@ganto.icu&body=你好，干徒！我有一些想法要与你分享：">i@ganto.me</a>
        </p>
      </div>
    )
  }
}

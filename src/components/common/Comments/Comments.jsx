import { useEffect, useState, useRef } from 'react'
import {message} from 'antd'
import http from '../../../utils/request'
import qs from 'query-string';
import './Comments.scss'

export default function Comments() {
  const [comments, setComments] = useState()

  const commentsEle = comments ? comments.map(item => {
    return (
      <div className='comment' key={item.id}>
        <i>{item.publisher} <b>{item.createtime ? item.createtime.split(".")[0] : '未知时间'}</b></i>
        <p>{item.content}</p>
      </div>
    )
  }) : <div>暂无评论</div>

  const [publisher, setPublisher] = useState();
  const [content, setContent] = useState();

  const publication = () => {
    // console.log(typeof publisher, typeof content)
    // console.log(publisher === undefined, content === undefined)
    if((publisher === '' || publisher === undefined || publisher.trim().lenght === 0) || (content === '' || content === undefined || content.trim().lenght === 0)) {
      message.warning("不能为空")
      return
    }
    const data = qs.stringify({content: content, publisher: publisher, createtime: null})
    http.post("/addcomment", data).then(({data:res})=> {
      // console.log(res.code)
      if(res.code === 200) {
        setPublisher("")
        setContent("")
        inputRef.current.value = ""
        textareaRef.current.value = ""
        message.success("评论成功")
        getComments()
      }
    }).catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    getComments();
  }, [])

  const getComments = () => {
    http.get("/comments").then(({data:res}) => {
      if(res.length === 0) {
        return
      }
      setComments(res)
    }).catch(err => {
      console.error(err)
    })
  }

  const [inFocus, setInFocus] = useState()

  const blurFunc = () => {
    // console.log(content === undefined )
    if(
      (publisher === '' || publisher === undefined || publisher.trim().lenght === 0) &&
      (content === '' || content === undefined || content.trim().lenght === 0)
    ) {
      setInFocus(false)
    }
  }

  const inputRef = useRef()
  const textareaRef = useRef()

  return (
    <div className='comments'>
      <div className={["publication", inFocus ? "acitve" : ""].join(' ')}>
        <input
          className='publisher' 
          type="text" 
          placeholder='昵称' 
          onBlur={() => blurFunc()} 
          onFocus={() => setInFocus(true)}
          onChange={(e) => { setPublisher(e.target.value) }}
          ref={inputRef}
        />
        <textarea
          className='content' 
          placeholder='添加一个评论' 
          onBlur={() => blurFunc()} 
          onFocus={() => setInFocus(true)}
          onChange={(e) => { setContent(e.target.value) }}
          ref={textareaRef}
        />
        <button className='btn' onClick={() => publication()}>发表</button>
      </div>
      <div className="comments_list">
        <div className="list_title"></div>
        {commentsEle}
      </div>
    </div>
  )
}

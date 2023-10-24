import { useState } from 'react'
import http from '../../utils/request'
import qs from 'query-string';

export default function ChatGPT() {

  const [val, setVal] = useState("");
  const [returnValArr, setReturnValArr] = useState([]);

  const data = qs.stringify({ msg: val })
  const btn = () => {
    http.post("http://localhost:3000/chatgpt", data).then(({data:{returnMessage}}) => {
      setReturnValArr([...returnValArr, returnMessage])
    }).catch(err => {
      console.error(err)
    })
  }
  return (
    <div className='chatgpt'>
      <input type="text" onChange={ (e) => setVal(e.target.value) } />
      <button onClick={btn}>点击</button>
      {
        returnValArr ? returnValArr.map((item, index) => {
          return (
            <p key={item+index}>{ item }</p>
          )
        }) : "o.O"
      }
    </div>
  )
}

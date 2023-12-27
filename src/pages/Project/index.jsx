import { useState, useEffect } from 'react'
import { getServerImg } from '../../api/api'
import debounce from '../../utils/debounce'
import Comments from '../../components/common/Comments/Comments'
import './index.scss'

export default function Project() {
  
  const [projectData, setProjectData] = useState()

  const projectDataFunc = debounce(() => {
    getServerImg().then(({data}) => {
      setProjectData(data)
    }).catch(reject => {
      console.error("请求接口异常", reject)
    })
  }, 500)

  useEffect(() => {
    projectDataFunc()
  }, [])

  const resetGetImg = debounce(() => {
    projectDataFunc()
  }, 1000)

  return (
    <div className='project'>
      {/* {projectData} */}
      <div className="img">
        {
          projectData ? <img src={`http://files.cevno.cn/files/` + projectData} alt="" /> : ""
        }

        <div className="btn" onClick={resetGetImg}>重获</div>
      </div>
      <Comments/>
    </div>
  )
}

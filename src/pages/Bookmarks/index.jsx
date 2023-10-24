import { Tag, Tooltip } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { bookmarks } from '../../utils/bookmarks'
import './index.scss'

export default function Bookmark() {
  
  const bookmarkList = bookmarks

  const _ = (item) => {
    if(item.link) {
      window.open(item.link);
    }
  }

  return (
    <div className='bookmarks'>
      {
        bookmarkList.map(item => {
          return (
            <Tooltip
              key={item.name}
              placement="top"
              title={<div><p><b>{item.name} : </b></p><p><span>{item.link ? item.link : "无链接"}</span></p></div>}
              color={item.backgroundColor ? item.backgroundColor : "#51ffa4"}
              overlayInnerStyle={{
                color: item.color ? item.color : "#000000",
                fontSize: "20px",
              }}
            >
              <Tag
                className="item"
                onClick={() => _(item)}
                title={`${item.name}: ${item.link}`}
                style={{
                  backgroundColor: item.backgroundColor ? item.backgroundColor : "#51ffa4",
                  color: item.color ? item.color : "#ffffff",
                  border: item.border ? "1px solid" + item.border : "",
                }}
                color={"#ffffff"}
                icon={<LinkOutlined />}
              >{item.name}</Tag>
            </Tooltip>
          )
        })
      }
    </div>
  )
}

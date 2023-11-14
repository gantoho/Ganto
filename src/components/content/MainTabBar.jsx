import { Link, useLocation } from 'react-router-dom'
import './MainTabBar.scss'

export default function MainTabBar(){

    const pathname = useLocation().pathname;

    return (
      <div className='main-tab-bar'>
        <Link
          className={["item", pathname === '/home' ? 'active' : ''].join(' ')}
          to="/home"
        >首页</Link>
        <Link
          className={`item${pathname === '/bookmarks' ? ' active' : ''}`}
          to="/bookmarks"
        >书签</Link>
        <a className='item outside' rel="noreferrer" target="_blank" href="https://www.cnblogs.com/ganto">博客</a>
        <a className='item travellings outside' rel="noreferrer" target="_blank" href="https://www.travellings.cn/go.html">开往</a>
        <Link
          className={`item${pathname === '/dev' ? ' active' : ''}`}
          to="/dev"
        >Dev</Link>
      </div >
    )
}

import Home from '../views/Home/Home'
import About from '../views/About/About'

import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

export const routes = [
  {
    path: '',
    name: '首页',
    component: <Home/>
  },
  {
    path: '/home',
    name: '首页',
    component: <Home/>
  },
  {
    path: '/about',
    name: '关于',
    component: <About/>
  }
]

export const link = routes.map((item, index) => {
  if (item.path !== '') {
    return (
      <Link
        key={index}
        onClick={() => { this.forceUpdate() }}
        className={`${item} ${window.location.hash.indexOf(item.path) !== -1 ? 'active' : ''} item`}
        to={item.path}
      >{item.name}</Link>
    )
  }
  return ''
})

export const route = routes.map((item, index) => {
  return (
    <Route key={index} path={item.path} element={item.component} />
  )
})

import { Component } from 'react'
import './Footer.scss'

export default class Footer extends Component {
  
  state = {
    date: null
  }
  componentDidMount() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    const Year = this.state.date ? this.state.date.getFullYear() : '年份获取失败';
    return (
      <div className='footer'>
        <div className="container">
          <p className='statement'>2019 - {Year} © 干徒 / Ganto</p>
        </div>
      </div>
    )
  }
}

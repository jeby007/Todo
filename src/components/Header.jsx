import React, {Component} from 'react'
import {Layout} from 'antd'
import moment from "moment"
const {Header} = Layout

export default class Container extends Component {
  constructor() {
    super();
    this.state = {date:moment().format('YYYY-MM-DD')}
  }
  render() {
    const {date} = this.state
    return (
      <Header className={'header'}>
        <div>user,欢迎访问</div>
        <div className={'headerRight'}>
          <div>{date}</div>
          <div id="he-plugin-simple"></div>
        </div>
      </Header>
    )
  }
}
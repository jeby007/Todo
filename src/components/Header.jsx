import React, {Component} from 'react'
import {Layout} from 'antd'
import moment from "moment"
import styles from '@/static/css/comp_css/container.styl'
const {Header} = Layout

export default class Container extends Component {
  constructor() {
    super();
    this.state = {date:moment().format('YYYY-MM-DD')}
  }
  render() {
    const {date} = this.state
    return (
      <Header className={styles.header}>
        <div>user,欢迎访问</div>
        <div className={styles.headerRight}>
          <div>{date}</div>
          <div id="he-plugin-simple"></div>
        </div>
      </Header>
    )
  }
}
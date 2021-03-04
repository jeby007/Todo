import React, {Component} from 'react'
import {Layout } from "antd";
import MenuNav from './Menu'
import HeaderT from './Header'
import MidContent from './Content'
import Icons from "./Icons";
const {Footer, Sider} = Layout;
export default class Container extends Component {
  render() {
    return (
      <Layout style={{height: '100vh'}} className={'j_layoutWrap'}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className={'title'}><Icons icon={"react"} size={"25px"} class={'logo'}/>后台管理系统</div>
          <MenuNav />
        </Sider>
        <Layout>
          <HeaderT/>
          <MidContent />
          <Footer style={{textAlign: 'center'}}>Create by Jeby ©2020</Footer>
        </Layout>
      </Layout>
    )
  }
}
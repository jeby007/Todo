import React, {Component} from 'react'
import {Link,withRouter} from "react-router-dom";
import PubSub from 'pubsub-js'
import {Menu} from "antd";
import Icons from "./Icons";
import {menus} from "@/static/js/Enums.js"
const {SubMenu,Item} = Menu
class MenuNav extends Component {
  constructor(props) {
    super(props);
    this.props.history.replace('/product')
    this.state = {defaultSelectedKeys:'home',selectedKeys:'home'}
  }
  componentDidMount() {
    PubSub.subscribe('changeSelectMn', (topic,message) => {
      this.setState({selectedKeys:message})
    })
  }

  getMunusNode = (arr)=>{
    return arr.reduce((p,c)=>{
      if (c.children){
        p.push(<SubMenu icon={<Icons icon={c.icon}/>} title={c.title} key={c.icon}>{this.getMunusNode(c.children)}</SubMenu>)
      }else {
        p.push(<Item icon={<Icons icon={c.icon}/>} key={c.icon}><Link to={c.key}>{c.title}</Link></Item>)
      }
      return p
    },[])
  }

  render() {
    const {defaultSelectedKeys,selectedKeys} = this.state
    const changeSelect = (item) => {
      this.setState({selectedKeys:item.key})
    }
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={selectedKeys}
        onClick={changeSelect}
      >{this.getMunusNode(menus)}</Menu>
    )
  }
}
export default withRouter(MenuNav)

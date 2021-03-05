import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Menu} from "antd";
import Icons from "./Icons";
import {menus} from "@/static/js/Enums.js"
const {SubMenu,Item} = Menu
class MenuNav extends Component {
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
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={"home"}>{this.getMunusNode(menus)}</Menu>
    )
  }
}
export default MenuNav
import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Layout} from 'antd'
import Home from "@/pages/home";
import pages from '@/pages'

const {Content} = Layout

export default class Container extends Component {
  render() {
    return (
      <Content style={{margin: '24px 16px 0', background: '#fff'}}>
        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
          <Switch>
            {
              pages.length > 0 && pages.map((v, i) => {
                return (
                  <Route key={i} path={`${v.path}`} component={v.comp}/>
                )
              })
            }
            <Redirect exact to={'/home'} from={'/'}/>
            <Route path={'*'} component={Home}/>
          </Switch>
        </div>
      </Content>
    )
  }
}
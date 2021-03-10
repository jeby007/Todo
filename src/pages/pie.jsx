import React, {Component} from 'react'
import ReactECharts from 'echarts-for-react'

import customTheme from '@/config/echartsTheme.json'
var echarts = require("echarts")
const options = {
  title: {
    text: '用户访问来源',
    subtext: '测试用',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    bottom: 'bottom',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '50%',
      data: [
        {value: 1048, name: '搜索引擎'},
        {value: 735, name: '直接访问'},
        {value: 580, name: '邮件营销'},
        {value: 484, name: '联盟广告'},
        {value: 300, name: '视频广告'}
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
export default class Pie extends Component {
  componentDidMount() {
    echarts.registerTheme('theme',customTheme)
  }
  render() {
    return (
      <ReactECharts
        option={options}
        theme={'theme'}
        style={{width: 800,height:600,margin:'auto'}}
      />
    )
  }
}

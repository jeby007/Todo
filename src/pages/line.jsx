import React, {Component} from 'react'
import ReactECharts from 'echarts-for-react'
import customTheme from '@/config/echartsTheme.json'
var echarts = require("echarts")
const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
};
export default class Line extends Component {
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

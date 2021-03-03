import React from 'react'
import {createFromIconfontCN} from "@ant-design/icons"
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_2395363_pfxhgcdt7fg.js',
  ],
});
export default function Container (props) {
  return (
    <IconFont type={`icon-${props.icon}`} style={{fontSize:props.size ? props.size : '14px'}} className={props.class ? props.class : ''}/>
  )
}
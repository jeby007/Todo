import React, {Component} from 'react'
import {Button, Divider, Table, Tag,message} from "antd";
import PubSub from 'pubsub-js'
import {withRouter} from "react-router-dom";
import {DeleteOutlined, EditOutlined, PlusOutlined,VerticalAlignTopOutlined,VerticalAlignBottomOutlined,AppstoreOutlined} from "@ant-design/icons";
import '@/static/css/pages/category.sass'
import {products} from '@/static/js/Enums.js'
const {data,columns} = products
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {columns,data}
  }
  change(type,row){

  }
  del(row){
    this.setState({data:this.state.data.filter(vo => vo.key !== row.key)})
  }
  getCol() {
    const newCol = this.state.columns
    return newCol.map((vo,i)=>{
      if (vo.dataIndex === 'operate'){
        vo['render'] = (tool,row) =>(
          tool.map((op,i)=>{
            return (
              op === 'change'
                ? <Button type={"primary"} icon={<EditOutlined />} shape={'circle'} key={i} size={"small"} style={{marginLeft: tool && tool.length > 1 ? '10px' : ''}} onClick={this.change.bind(this,'edit',row)}/>
                : <Button danger shape={'circle'} icon={<DeleteOutlined />} key={i} size={"small"} onClick={this.del.bind(this,row)}/>
            )
          })
        )
      }else if (vo.dataIndex === 'fit_type'){
        vo['render'] = tag => (
          tag.map((t,i)=>{
            return (
              <Tag key={i} color={i%2 === 0 ? '#009f7f' : 'success'}>{t}</Tag>
            )
          })
        )
      }else if (vo.dataIndex === 'status'){
        vo['render'] = (btn,row) => (
          <Button
            type={btn === '0' ? 'primary' : ''}
            danger={btn === '1'}
            size={"mini"}
            shape={'circle'}
            icon={btn === '0' ? <VerticalAlignTopOutlined/> : <VerticalAlignBottomOutlined/>}
            onClick={this.changeStatus.bind(this,row)}
          />
        )
      }else {
        return vo
      }
      return i
    })
  }
  changeStatus(row){
    const {data} = this.state
    const newData = data.map(v=>{
      if (v.key === row.key){
        v.status = v.status === '0' ? '1' : '0'
      }
      return v
    })
    this.setState({data:newData})
    message.success(row.status === '1' ? '上架成功' : '下架成功')
  }
  toCategory(){
    PubSub.publish('changeSelectMn','category')
    this.props.history.push('/category')
  }
  render() {
    this.getCol()
    const {columns,data} = this.state
    return (
      <div>
        <div className={'topBtn'}>
          <Button type={'primary'} icon={<AppstoreOutlined />} onClick={this.toCategory.bind(this)} style={{marginRight:'15px'}}>分类管理</Button>
          <Button type={'primary'} icon={<PlusOutlined />} onClick={()=>this.change('add')}>添加商品</Button>
        </div>
        <Divider />
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}
export default withRouter(Product)

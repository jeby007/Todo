import React, {Component} from 'react'
import {Button, Divider, Table,Tag} from "antd";
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons'
import '@/static/css/pages/category.sass'
import {category} from '@/static/js/Enums.js'
import CategoryModal from "@/components/page_comp/CategoryModal";
const {data,columns} = category
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {columns,data}
  }
  del(row){
    this.setState({data:this.state.data.filter(vo => vo.key !== row.key)})
  }
  change(type,row){
    this.CategoryModal.setVisible(true)
  }
  changeData(){
    console.log('触发了');
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
      }else {
        return vo
      }
      return i
    })
  }
  onShowModal(ref){
    this.child = ref
  }
  componentDidMount() {
    this.getCol()
  }

  render() {
    const {columns,data} = this.state
    return (
      <div>
        <div className={'topBtn'}>
          <Button type={'primary'} icon={<PlusOutlined />} onClick={()=>this.change('add')}>添加分类</Button>
        </div>
        <Divider />
        <Table columns={columns} dataSource={data}/>
        <CategoryModal onRef={v => this.CategoryModal = v} changeData={this.changeData}/>
      </div>
    )
  }
}

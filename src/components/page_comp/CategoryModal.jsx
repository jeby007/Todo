import React, {Component} from 'react'
import { Modal, Button ,Form,Input,Select} from 'antd';
import moment from 'moment'
import '@/static/css/page_comp/categoryModal.sass'
const {Item} = Form
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
  align:'middle'
}
const {Option} = Select

export default class CategoryModal extends Component {
  constructor(props) {
    super(props);
    if (props.onRef) props.onRef(this)
  }
  state = {visible:false,initForm:{}}
  setVisible(Bool){
    this.setState({visible:Bool})
  }
  submit(values){
    const params = this.state.initForm.key ? {...values,key:this.state.initForm.key} : values
    this.props.changeData(params)
    this.setState({visible:false})
  }
  finishFailed(values, errorFields, outOfDate){
    console.log(values, errorFields, outOfDate);
  }
  getEditForm(type,val){
    this.setState({initForm:type === 'edit' ? val : {c_date:moment().format('YYYY-MM-DD')}})
  }
  render() {
    const {visible,initForm} = this.state
    return (
      <Modal
        visible={visible}
        cancelText={"取消"}
        destroyOnClose
        onCancel={()=>this.setVisible(false)}
        footer={null}
        className={"cateModal"}
      >
        <Form
          onFinish={(values)=>this.submit(values)}
          onFinishFailed={this.finishFailed}
          className={'formWrap'}
          {...layout}
          initialValues={initForm}
        >
          <Item label={"分类名称"} name={"name"} rules={[{required: true, message: '分类名称不能为空'}]}>
            <Input allowClear={true}/>
          </Item>
          <Item label={"分类级别"} name={"rank"} rules={[{required: true, message: '分类级别不能为空'}]}>
            <Select allowClear={true}>
              <Option value={"一级分类"}>一级分类</Option>
              <Option value={"二级分类"}>二级分类</Option>
              <Option value={"三级分类"}>三级分类</Option>
            </Select>
          </Item>
          <Item label={"适用产品"} name={"fit_type"} rules={[{required: true, message: '适用产品不能为空'}]}>
            <Select allowClear={true} mode="multiple">
              <Option value={"装备"}>装备</Option>
              <Option value={"羽绒服"}>羽绒服</Option>
              <Option value={"电脑"}>电脑</Option>
              <Option value={"手机"}>手机</Option>
              <Option value={"土豆片"}>土豆片</Option>
              <Option value={"回锅肉"}>回锅肉</Option>
            </Select>
          </Item>
          <Item label={"创建人"} name={"c_name"} rules={[{required: true, message: '创建人不能为空'}]}>
            <Input  allowClear={true}/>
          </Item>
          <Item label={"创建日期"} name={"c_date"} rules={[{required: true, message: '创建日期不能为空'}]}>
            <Input disabled={true} allowClear={true}/>
          </Item>
          <Item wrapperCol={{span: 24}}>
            <Button type={"primary"} htmlType="submit">确定</Button>
          </Item>
        </Form>
      </Modal>
    )
  }
}

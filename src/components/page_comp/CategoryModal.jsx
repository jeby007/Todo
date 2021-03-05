import React, {Component} from 'react'
import { Modal, Button ,Form,Input} from 'antd';
const {Item} = Form
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
export default class CategoryModal extends Component {
  constructor(props) {
    super(props);
    if (props.onRef) props.onRef(this)
  }
  state = {visible:false}
  setVisible(Bool){
    this.setState({visible:Bool})
  }
  submit(values){
    console.log(values);
    this.props.changeData()
  }
  finishFailed(values, errorFields, outOfDate){
    console.log(values, errorFields, outOfDate);
  }
  render() {
    const {visible} = this.state
    return (
      <Modal
        visible={visible}
        cancelText={"取消"}
        centered={true}
        destroyOnClose
        onCancel={()=>this.setVisible(false)}
        footer={null}
      >
        <Form
          onFinish={this.submit}
          onFinishFailed={this.finishFailed}
          {...layout}
        >
          <Item
            label={'分类名称'}
            name={'name'}
            rules={[
              {required:true,message:'分类名称不能为空'}
            ]}
          >
            <Input />
          </Item>
          <Item>
            <Button type={"primary"} htmlType="submit">确定</Button>
          </Item>
        </Form>
      </Modal>
    )
  }
}

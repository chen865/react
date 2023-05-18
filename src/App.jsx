import React, { Component } from 'react'
import { Button,DatePicker} from 'antd';
import {WechatOutlined,SearchOutlined} from '@ant-design/icons';


function onChange (date, dateString) {
  console.log(date, dateString);
};

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Button type="primary">Primary Button1</Button>
        <Button >Primary Button2</Button>
        <Button type="link">Primary Button3</Button>
        <WechatOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <DatePicker onChange={onChange} />
      </div>
    )
  }
}

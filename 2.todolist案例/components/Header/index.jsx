import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 对props进行限制 
  static propTypes = {
    add:PropTypes.func.isRequired,
  }

  // 键盘事件回调
  handelKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) {
      return;
    }
    if (target.value.trim() === '') {
      alert("您的输入不可为空")
      return;
    }
    console.log(keyCode, target.value);
    // 准备todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    // 传给app
    this.props.add(todoObj)
    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handelKeyUp} type="text" placeholder='请输入你的任务' />
      </div>
    )
  }
}

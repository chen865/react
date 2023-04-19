import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {


  // 全选
  handelCheckAll = (event) =>{
    this.props.checkAllToDo(event.target.checked);
  }

  // 清除已完成的任务
  clearAllDone = ()=>{
    this.props.clearAllDone();
  }

  render() {

    const {todos} = this.props;
    
    const doneSum = todos.reduce((pre,current)=>{
      return pre + (current.done ? 1 : 0)
    },0)

    const total = todos.length;

    return (
      <div className='todo-footer'>
        <label>
          <input type='checkbox' onChange={this.handelCheckAll} checked = {doneSum === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneSum}</span>/全部{total}
        </span>
        <button onClick={this.clearAllDone} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}

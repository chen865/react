import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  // 设置鼠标的移入，移出
  state = { mouse: false };

  // 处理鼠标移入，移出函数
  handelMouse = (flag) => {

    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 勾选，取消勾选 
  handleCheck = (id)=>{
    return(event)=>{
        console.log(id,event.target.checked);
        this.props.cancle(id,event.target.checked);
    }
  }

  handleDelete = (id)=>{
      console.log("删除id",id);
      if(window.confirm('确定删除么？')){
        this.props.deleteTo(id);
      }
     
  }


  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handelMouse(true)} onMouseLeave={this.handelMouse(false)}>
        <label>
          <input type='checkbox' checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className='btn btn-danger' style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}

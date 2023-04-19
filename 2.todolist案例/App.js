import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 初始化数据
  state = {
    todos: [
      { id: '1', name: '吃饭', done: true },
      { id: '2', name: '睡觉', done: true },
      { id: '3', name: '打豆豆', done: false },
    ]
  }

  // 为了添加一个todo，所以接受一个todo对象
  add = (todoObj) => {
    console.log('app:', todoObj)
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos]
    console.log(newTodos)
    this.setState({ todos: newTodos })
  }

  // 勾选或者取消一个todo
  cancle = (id,done)=>{
    const {todos} = this.state;
    const newTodo = todos.map((obj)=>{
      if(obj.id === id){
          return {...obj,done};
      }else{
        return obj;
      }
    });
    this.setState({todos:newTodo});
  }

  // 删除一个任务
  deleteTo = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
        return todoObj.id !== id
    });
    this.setState({todos:newTodos});
  }

  // 全选
  checkAllToDo = (result)=>{
    const {todos} = this.state;
    const newTodo = todos.map((todoObj)=>{
      return {...todoObj,done:result}
    });
    this.setState({todos:newTodo})
  }

  // 删除已完成任务
  clearAllDone = ()=>{
    const {todos} = this.state;
    const newTods = todos.filter((todoObj)=>{
      return todoObj.done === false;
    });
    this.setState({todos:newTods})
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header add={this.add} />
          <List todos={todos} cancle={this.cancle} deleteTo={this.deleteTo} />
          <Footer todos={todos} checkAllToDo={this.checkAllToDo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}

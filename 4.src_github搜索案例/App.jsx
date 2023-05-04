import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {

  // 初始化数据
  state = {
    users: [],
    isFirstLogin: true,
    isLoading: false,
    error: ''

  };

  // 注意这里的问题，我之前写了{stateObj} 导致了后续失败，等于重建了一个状态，所以挂了
  updateApp = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    //const { users } = this.state;
    return (
      <div className='container'>
        <Search updateApp={this.updateApp} />
        <List {...this.state} />
      </div>
    )
  }
}

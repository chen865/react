import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {


  // 初始化数据
  state = {
    users: [],
    isFirstLogin: true,
    isLoading: false,
    error: ''

  };

  componentDidMount() {
    this.token = PubSub.subscribe('lcy', (msg, data) => {
      this.setState(data);
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirstLogin, isLoading, error } = this.state;

    return (
      <div className='row'>
        {
          isFirstLogin ? <h2>欢迎使用github搜索,点击搜寻你想要查找的用户吧！</h2> :
            isLoading ? <h2>正在加载中。。。。</h2> :
              error ? <h2 style={{ color: 'red' }}>{error}</h2> :
                users.map((userObj) => {
                  return (
                    <div className='card' key={userObj.id} >
                      <a href={userObj.html_url} target='_blank' rel='noreferrer'>
                        <img alt='head_portrait' src={userObj.avatar_url} style={{ width: '100px' }}></img>
                      </a>
                      <p className='card-text'>{userObj.login}</p>
                    </div>
                  )
                })
        }

      </div>
    )
  }
}

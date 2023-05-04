import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // 发布消息
    //const {value} = this.keyWord;
    const {KeyWords:{value:keys}} = this;
    console.log(keys)
    // 接口请求前修改状态
    PubSub.publish('lcy',{isFirstLogin:false,isLoading:true})

    axios.get(`https://api.github.com/search/users?q=${keys}`).then(
      response =>{
        console.log(response.data);
        // 接口请求成功loading不用加载了
        PubSub.publish('lcy',{isLoading:false,users:response.data.items})
      },
      error=>{
        console.log('失败了！')
        PubSub.publish('lcy',{isLoading:false,error:error.message})
      }
    )

  }

  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>搜索github用户</h3>
        <div>
          <input ref={c => this.KeyWords = c} type='text' placeholder='输入你要找的用户' />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}

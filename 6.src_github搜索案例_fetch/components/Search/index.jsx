import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async () => {
    // 发布消息
    //const {value} = this.keyWord;
    const {KeyWords:{value:keys}} = this;
    console.log(keys)
    // 接口请求前修改状态
    PubSub.publish('lcy',{isFirstLogin:false,isLoading:true})

    // 发送网络请求-axios发送
    // axios.get(`https://api.github.com/search/users?q=${keys}`).then(
    //   response =>{
    //     console.log(response.data);
    //     // 接口请求成功loading不用加载了
    //     PubSub.publish('lcy',{isLoading:false,users:response.data.items})
    //   },
    //   error=>{
    //     console.log('失败了！')
    //     PubSub.publish('lcy',{isLoading:false,error:error.message})
    //   }
    // )
    
    // 发送网络请求用fetch
    // fetch(`https://api.github.com/search/users?q=${keys}`).then(
    //   response =>{
    //     console.log('请求成功');
    //     return response.json()
    //   },
    //   // error=>{
    //   //   console.log('失败了',error)
    //   //   return new Promise(()=>{})
    //   // }
    // ).then(
    //   // 拿到前面return返回的数据
    //   response => {console.log('获取数据成功了',response)},
    //  // error => {console.log('获取数据失败了',error)}
    // ).catch(
    //   (error)=>{console.log('统一处理错误：失败了',error)}
    // )

    // 发送网络请求用fetch 优化  使用await要在函数上加 async
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keys}`);
      const data = await response.json();
      console.log(data);
      PubSub.publish('lcy',{isLoading:false,users:data.items})
    } catch (error) {
      console.log('try-catch错误',error);
      PubSub.publish('lcy',{isLoading:false,error:error.message})
    }
   
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

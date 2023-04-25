import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudent =()=>{
    axios.get('http://localhost:3000/api1/student').then(
      response =>{
        console.log('成功了',response.data);
      },
      error =>{
        console.log('失败了');
      }
    )
  } 

  render() {
    return (
      <div>
        <button onClick={this.getStudent}>但我获取数据</button>
      </div>
    )
  }
}

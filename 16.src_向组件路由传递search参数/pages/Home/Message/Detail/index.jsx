import React, { Component } from 'react'
import qs from 'qs'

const data = [
    {id:'01',content:'你好'},
    {id:'02',content:'火热电信'},
    {id:'03',content:'无限流量'}
]
export default class Detail extends Component {
  render() {
    console.log(this.props)
    // 接收params参数
    //const {id,title} = this.props.match.params;

    // 接收search参数
    const {search} = this.props.location;
    const {id,title} = qs.parse(search.slice(1));

    const content = data.find((obj)=>{ 
        return obj.id === id
    })
    return (
      <div>
        <ul>
            <li>id：{id}</li>
            <li>titile：{title}</li>
            <li>content:{content.content}</li>
        </ul>
      </div>
    )
  }
}

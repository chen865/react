import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';


export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息01' },
            { id: '02', title: '消息02' },
            { id: '03', title: '消息03' }
        ]
    }

    replaceShow = (id,title)=>{
        // 跳转到detial组件，且为replace跳转
        //this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // search跳转带参数
        this.props.history.replace(`/home/message/detail/?id=${id}&title${title}`)

        // state跳转带参数
        this.props.history.replace('/home/message/detail',{id:id,title:title})
    }

    pushShow = (id,title)=>{
        // 跳转到detial组件，且为push跳转
        //this.props.history.push(`/home/message/detail/${id}/${title}`)

         // search跳转带参数
         //this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

          // state跳转带参数
        this.props.history.push('/home/message/detail',{id:id,title:title})
    }

    back = ()=>{
        // 回退
        this.props.history.goBack();
    }

    forward = ()=>{
        // 前进
        this.props.history.goForward();
    }

    go = () =>{
        // go里的参数负数后退几步 正数前进几步
        this.props.history.go(2);
    }

    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((massobj) => {
                            return (
                                <li key={massobj.id}>
                                    {/* 向路由组件传参数params */}
                                    {/* <Link to={`/home/message/detail/${massobj.id}/${massobj.title}`}>{massobj.title}</Link>&nbsp; */}
                                    &nbsp;<button onClick={()=>{this.pushShow(massobj.id,massobj.title)}}>push查看</button>
                                    &nbsp;<button onClick={()=>{this.replaceShow(massobj.id,massobj.title)}}>replace查看</button>

                                    {/* 向路由组件传参数search */}
                                    {/* <Link to={`/home/message/detail/?id=${massobj.id}&title=${massobj.title}`}>{massobj.title}</Link>&nbsp; */}

                                    {/* 向路由组件传参数state */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:massobj.id,title:massobj.title}}}>{massobj.title}</Link>

                                </li>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                {/* 接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

               {/* 接收search参数 */}
                {/* <Route path="/home/message/detail" component={Detail}></Route> */}

                {/* 接收state参数 */}
                <Route path="/home/message/detail" component={Detail}></Route>

                <button onClick={this.back}>回退</button> &nbsp;
                <button onClick={this.forward}>前进</button> &nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

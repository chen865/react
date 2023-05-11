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

                                    {/* 向路由组件传参数search */}
                                    <Link to={`/home/message/detail/?id=${massobj.id}&title=${massobj.title}`}>{massobj.title}</Link>&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                {/* 接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

               {/* 接收search参数 */}
                <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        )
    }
}

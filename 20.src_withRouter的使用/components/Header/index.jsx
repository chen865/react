import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

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
        return (
            <div className='page-header'>
                <h2>react router demo 路由案例</h2>
                <button onClick={this.back}>回退</button> &nbsp;
                <button onClick={this.forward}>前进</button> &nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

export default withRouter(Header)
// withRouter可以加工一般组件，让一般组件具有路由组件所特有的api
// withRouter返回的是一个新组件
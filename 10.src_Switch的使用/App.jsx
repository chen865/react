import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Home from './pages/Home' // 路由组件
import About from './pages/About' // 路由组件
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'


export default class App extends Component {
  render() {

    return (
      <div >
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* <a className='list-group-item' href='./about.html' >about</a>
              <a className='list-group-item' active href='./home.html'>home</a> */}

              <NavLink activeClassName="demo" className='list-group-item' to="/about">about</NavLink>
              <NavLink activeClassName="demo" className='list-group-item' to="/home">home</NavLink>

              {/* 自定义组件 */}
              <MyNavLink to="/about" >自定义about</MyNavLink>
              <MyNavLink to="/home" >自定义home</MyNavLink>

            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由--用switch包裹,匹配到就返回,通常一个路由对应一个组件 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

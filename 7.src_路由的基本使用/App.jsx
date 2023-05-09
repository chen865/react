import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
  render() {

    return (
      <div >
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>react router demo 路由案例</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* <a className='list-group-item' href='./about.html' >about</a>
              <a className='list-group-item' active href='./home.html'>home</a> */}

              <Link className='list-group-item' to="/about">about</Link>
              <Link className='list-group-item' to="/home">home</Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

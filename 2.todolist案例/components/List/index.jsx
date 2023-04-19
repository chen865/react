import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  // 对props进行限制 
  static propTypes = {
    todos:PropTypes.array.isRequired,
    cancle:PropTypes.func.isRequired,
    deleteTo:PropTypes.func.isRequired
  }

  render() {

    const { todos, cancle , deleteTo } = this.props;
    return (
      <ul className='todo-main'>
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} cancle={cancle} deleteTo={deleteTo} />
          })
        }
      </ul>
    )
  }
}

'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.timer
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    //  console.log('shouldComponentUpdate timer', this.props, nextProps)
    return this.props.time !== nextProps.time
  }

  componentDidMount () {
    console.log('componentDidMount timer')
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount timer')
    clearInterval(this.timer)
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer

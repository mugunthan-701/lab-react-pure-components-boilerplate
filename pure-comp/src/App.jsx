import React, { Component } from 'react'
import SimpleCounterComponent from './assets/components/SimpleCounterComponent'
import PureCounterComponent from './assets/components/PureCounterComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleCounterComponent></SimpleCounterComponent>
        <PureCounterComponent></PureCounterComponent>
      </div>
    )
  }
}

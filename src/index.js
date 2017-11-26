import React from 'react'
import ReactDOM from 'react-dom'
import * as logic from './game/logic'
import Grid from './components/grid'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = logic.initState()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (i, j) {
    let nextState = logic.getNextState(this.state.board, i, j, this.state.nextPlayer)
    this.setState(nextState)
  }

  render () {
    return (
      <Grid board={this.state.board} handleClick={this.handleClick} />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

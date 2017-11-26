import React from 'react'
import ReactDOM from 'react-dom'
import * as logic from './game/logic'
import {PLAYER_CODES} from './game/consts'
import Grid from './components/grid'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = logic.initState()
    this.resetGame = this.resetGame.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  resetGame () {
    this.setState(logic.initState())
  }

  handleClick (i, j) {
    const {board, nextPlayer, winner} = this.state
    if (winner > -1) return // TODO: right place?
    let nextState = logic.getNextState(board, i, j, nextPlayer)
    let winnerCode = logic.getWinnerCode(nextState.board)
    this.setState({
      ...nextState,
      winner: PLAYER_CODES.indexOf(winnerCode)
    })
  }

  render () {
    const {board, winner} = this.state
    let result = ''
    if (winner > -1) result = 'Player ' + (winner + 1) + ' won! 🎉' // TODO: use %s + i18n...
    if (logic.isImpasse(board)) result = 'Draw 😕'
    // TODO: announce-result should be a component
    return (
      <div className='game'>
        {!!result && <div className='announce-result'>
          <h1>{result}</h1>
          <button onClick={this.resetGame}>Play again?</button>
        </div>}
        <Grid board={board} handleClick={this.handleClick} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

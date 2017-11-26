import {BOARD_SIZE, EMPTY, PLAYER_CODES, NUM_OF_PLAYERS} from './consts'

export function initState () {
  let board = new Array(BOARD_SIZE)
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = new Array(BOARD_SIZE)
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = EMPTY
    }
  }
  return {
    board,
    nextPlayer: 0,
    winner: -1
  }
}

export function getNextState (prev, i, j, occupant) {
  // TODO: check valid i & j?
  if (prev[i][j] !== EMPTY) { // safety net (cell shouldn't be clickable)
    return {
      board: prev,
      nextPlayer: occupant
    }
  }
  let board = JSON.parse(JSON.stringify(prev))
  board[i][j] = PLAYER_CODES[occupant]
  let nextPlayer = (occupant + 1) % NUM_OF_PLAYERS
  return {
    board,
    nextPlayer
  }
}

export function getBoardWinner (board) {

}

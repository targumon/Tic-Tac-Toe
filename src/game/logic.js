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

export function getWinnerCode (board) {
  let winPaths = []
  board.forEach((row, i) => {
    winPaths.push(board[i]) // actual rows
  })
  let transpose = board[0].map((col, i) => board.map(row => row[i])) // columns
  transpose.forEach((row, i) => {
    winPaths.push(transpose[i])
  })
  winPaths.push(board[0].map((col, i) => board[i][i])) // fore diagonal
  winPaths.push(board[0].map((col, i) => board[i][board.length - i - 1])) // back diagonal

  return winPaths.reduce((prev, curr) => { // note the bitwise operations!
    return prev | curr.reduce((cell1, cell2) => { // winning a board means winning ANY of its row
      return cell1 & cell2 // winning a row means marking ALL its cells
    })
  }, EMPTY)
}

export function isImpasse (board) { // TODO: test
  let flatten = [].concat(...board)
  return !flatten.includes(EMPTY)
}

import * as logic from './logic'
const test = require('tape')

test('logic: initState', t => {
  t.plan(1)
  try {
    const expected = {
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      nextPlayer: 0,
      winner: -1
    }
    t.deepEqual(logic.initState(), expected, 'got initial game state')
  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('logic: getNextState', t => {
  t.plan(2)
  try {
    const prev = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const next = [
      [1, 2, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    let nextState = logic.getNextState(prev, 0, 1, 1)
    t.deepEqual(nextState.board, next, 'got next board state')
    t.equal(nextState.nextPlayer, 0, 'next player has changed')
  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('logic: getNextState (invalid move)', t => {
  t.plan(2)
  try {
    const prev = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    let nextState = logic.getNextState(prev, 0, 0, 1)
    t.deepEqual(nextState.board, prev, 'got same board state')
    t.equal(nextState.nextPlayer, 1, 'next player has not changed')
  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('logic: getWinnerCode', t => {
  t.plan(5)
  try {
    const b1 = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 2, 0]
    ]
    const b2 = [
      [1, 0, 0],
      [0, 1, 0],
      [2, 2, 1]
    ]
    const b3 = [
      [0, 0, 1],
      [0, 0, 1],
      [2, 2, 1]
    ]
    const b4 = [
      [0, 0, 1],
      [0, 0, 1],
      [2, 2, 2]
    ]
    const b5 = [
      [2, 1, 2],
      [2, 1, 1],
      [1, 2, 1]
    ]
    t.equal(logic.getWinnerCode(b1), 0, 'no winner yet')
    t.equal(logic.getWinnerCode(b2), 1, '1 won with a diagonal')
    t.equal(logic.getWinnerCode(b3), 1, '1 won with a column')
    t.equal(logic.getWinnerCode(b4), 2, '2 won with a row')
    t.equal(logic.getWinnerCode(b5), 0, 'draw')
  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

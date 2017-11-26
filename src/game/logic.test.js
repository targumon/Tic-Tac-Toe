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

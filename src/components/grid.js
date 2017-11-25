import React from 'react'
import Cell from './cell'

export default class Grid extends React.Component {
  render () {
    let grid = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 0]
    ]
    return (
      <div className='grid'>
        {
          grid.map((row, i) => {
            return (
              <div key={i} className='row'>
                {row.map((cell, j) => {
                  return (
                    <Cell key={j} occupant={cell} />
                  )
                })}
              </div>
            )})
        }
      </div>
    )
  }
}

import React from 'react'
import Cell from './cell'

export default class Grid extends React.Component {
  render () {
    return (
      <div className='grid'>
        {
          this.props.board.map((row, i) => {
            return (
              <div key={i} className='row'>
                {row.map((cell, j) => {
                  return (
                    <Cell key={j} occupant={cell} row={i} col={j} handleClick={this.props.handleClick} />
                  )
                })}
              </div>
            )
          })
        }
      </div>
    )
  }
}

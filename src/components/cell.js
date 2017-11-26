import React from 'react'
import classNames from 'classnames'
import {EMPTY, PLAYER_CODES} from '../game/consts'

export default class Cell extends React.Component {
  render () {
    const {occupant, row, col, handleClick} = this.props
    let content = ''
    switch (occupant) {
      case PLAYER_CODES[0]:
        content = 'x'
        break
      case PLAYER_CODES[1]:
        content = 'o'
        break
    }
    const classes = classNames({
      cell: true,
      taken: occupant !== EMPTY
    })
    // TODO: switch to svg? (so we can animate the content appearance)
    return (
      <div className={classes} onClick={() => {
        if (occupant === EMPTY) {
          handleClick(row, col)
        }
      }}>
        {content}
      </div>
    )
  }
}

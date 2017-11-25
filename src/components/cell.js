import React from 'react'

export default class Cell extends React.Component {
  render () {
    let content = ''
    switch (this.props.occupant) {
      case 1:
        content = 'x'
        break
      case 2:
        content = 'o'
        break
    }
    return (
      <div className='cell'>
        {content}
      </div>
    )
  }
}

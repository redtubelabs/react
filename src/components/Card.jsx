import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = props => (
  <div
    style={{
      backgroundImage: `url(${props.item.video.thumb})`
    }}
    className="card">
    <span onClick={() => props.render(props.item)}>&#9654;</span>
  </div>
)

Card.propTypes = {
  item: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
}

export default Card
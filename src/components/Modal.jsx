import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const Modal = props => (
  <div className="modal">
    <div className="modal-body">
      <div className="container-fr">
        <span
          onClick={() => props.close()}
          className="container-fr--close">X</span>
        <iframe
          title="Video"
          className="container-fr-iframe"
          src={props.video.embed_url}
          frameBorder="0"></iframe>
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  video: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
}

export default Modal
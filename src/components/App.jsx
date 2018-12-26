import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.scss'

import Wrapper from './Wrapper'
import Card from './Card'
import Modal from './Modal'

class App extends Component {
  state = {
    currentVideo: null,
    isModalVisible: false
  }

  closeModal = () => {
    this.setState({ currentVideo: null, isModalVisible: false })
  }
  setCurrentVideo = ({ video }) => {
    this.setState({ currentVideo: video, isModalVisible: true })
  }

  render () {
    return (
      <main style={{ width: '100%', height: '100%' }}>
        {
          this.state.isModalVisible 
            ? <Modal close={this.closeModal} video={this.state.currentVideo} />
            : null
        }
        <Wrapper
          render={videos => (
            <ReactCSSTransitionGroup
              transitionName="list"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={0}
              className="list-container">
              {
                videos.map((video, index) => (
                  <Card
                    item={video}
                    key={index}
                    play={this.setCurrentVideo} />
                ))
              }
            </ReactCSSTransitionGroup>
          )}
        />
      </main>
    )
  }
}

export default App

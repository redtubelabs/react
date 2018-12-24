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

  render() {
    return (
      <Wrapper
        render={videos => (
          <ReactCSSTransitionGroup
            transitionName="list"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={0}
            className="list-container">
            {
              this.state.isModalVisible
                ? (
                  <Modal
                    close={() =>
                      this.setState({ currentVideo: null, isModalVisible: false })
                    }
                    video={this.state.currentVideo} />
                  )
                : null
            }
            {
              videos.map((video, index) => (
                <Card
                  item={video}
                  key={index}
                  play={item =>
                    this.setState({ currentVideo: item, isModalVisible: true })
                  } />
              ))
            }
          </ReactCSSTransitionGroup>
        )}
      />
    )
  }
}

export default App

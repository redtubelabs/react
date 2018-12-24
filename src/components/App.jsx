import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.scss'

import Wrapper from './Wrapper'
import Card from './Card'

class App extends Component {
  state = {
    currentVideo: null
  }

  render() {
    return (
      <Wrapper
        render={videos => (
          <ReactCSSTransitionGroup
            transitionName="list"
            className="list-container">
            {
              videos.map((video, index) => (
                <Card
                  item={video}
                  index={index}
                  render={item => 
                    this.setState(() => ({ currentVideo: item }))
                  }/>
              ))
            }
          </ReactCSSTransitionGroup>
        )}
      />
    )
  }
}

export default App

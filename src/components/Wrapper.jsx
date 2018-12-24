import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Wrapper.scss'

import Loader from './Loader'
import { HTTPClient } from '../utils/request'

class Wrapper extends Component {
  state = {
    isLoading: false,
    searchWord: '',
    listVideosMode: false,
    videos: []
  };

  async search () {
    this.setState(() => ({ isLoading: true }))
    const params = { search: this.state.searchWord }
    const { data } = await HTTPClient.get('/', { params })

    this.setState(() => ({
      listVideosMode: true,
      isLoading: false,
      videos: data.videos
    }))
  }

  handleInputChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  handleSearch = ({ key }) =>
    key === 'Enter'
      ? this.search()
      : null

  render () {
    return (
      <div
        className="container"
        style={{
          justifyContent: this.state.listVideosMode ? 'flex-start' : 'center'
        }}>
      {
        !this.state.videos.length
          ? <h1 className="container-title">ReactRedtube :D</h1>
          : null
      } 
      <div className="container--input">
        <input
          v-model="searchWord"
          onKeyUp={this.handleSearch}
          onChange={this.handleInputChange}
          placeholder="search something porn..."
          className="container--input"
          name="searchWord"
          type="text" />
        {
          this.state.isLoading
            ? <Loader />
            : null
        }
      </div>
      { this.props.render(this.state.videos) }
    </div>
    )
  }
}

Wrapper.propTypes = {
  render: PropTypes.func.isRequired
}

export default Wrapper
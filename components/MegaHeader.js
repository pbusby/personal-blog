import { withRouter } from 'next/router'
import React from 'react'

class MegaHeader extends React.Component {
  state = { showNavLinks: false }
  componentDidUpdate () {
    debugger
    if (this.props.router.pathname.includes('/posts')) {
      this.setState({ showNavLinks: true })
    }
  }

  render () {
    debugger
    if (this.state.showNavLinks) {
      return <h1 >{JSON.stringify(this.props.router.pathname)}</h1>
    } else {
      return null
    }
  }
}

export default withRouter(MegaHeader)
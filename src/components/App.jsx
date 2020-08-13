import React from 'react'

import Nav from './Nav'
import Banner from './Banner'
import Card from './Card'
import Footer from './Footer'


class App extends React.Component {
  render() {
    const album = {
      albumTitle: 'Album layout',
      albumText: `Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.`
    }
    return (
      <div>
        <Nav />
        <Banner album={album} />
        <div className="full-card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
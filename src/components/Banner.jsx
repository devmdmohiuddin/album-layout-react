import React from 'react'

import Button from './Button'

const Banner = (props) => {
  const { albumTitle, albumText } = props.album
  return (
    <div className="album">
      <h1 className="album__title">{albumTitle}</h1>
      <p className="album__text">{albumText}</p>
      <Button btnText1="main call to action" btnText2="secondary action" />
    </div>
  )
}

export default Banner
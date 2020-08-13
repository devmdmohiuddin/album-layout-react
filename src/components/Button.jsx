import React from 'react'

const Button = (props) => {
  return (
    <div className="album__btn">
      <button className="album__btn--1">{props.btnText1}</button>
      <button className="album__btn--2">{props.btnText2}</button>
    </div>
  )
}

export default Button
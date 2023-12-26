import React from 'react'
import '../Button/Button.css'

const Button = (props) => {
const {className,children,width,onClick}=props
  return (
<button style={{width:width}} onClick={onClick} className={'button '+ className}>{children}</button>
  )
}

export default Button
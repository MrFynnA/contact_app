import React from 'react'
import '../ui_components/Button.css'

const Button = (props) => {
const {className,children}=props
  return (
<button className={'button '+ className}>{children}</button>
  )
}

export default Button
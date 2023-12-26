import React from 'react'
import '../ui_components/Button.css'

const Button = (props) => {
const {className,children,width}=props
  return (
<button style={{width:width}} className={'button '+ className}>{children}</button>
  )
}

export default Button
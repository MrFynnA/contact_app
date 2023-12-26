import React from 'react'

const TrashIcon = (props) => {
    const {pathClassname}=props
  return (
    <svg id="icons" width={'24px'} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="rgb(0,0,0)"><path className={pathClassname} d="m28 5h-8a3 3 0 0 0 -3 3v2h-9a1 1 0 0 0 0 2h1.09l2.73 27.34a3 3 0 0 0 2.95 2.66h18.46a3 3 0 0 0 2.94-2.66l2.74-27.34h1.09a1 1 0 0 0 0-2h-9v-2a3 3 0 0 0 -3-3zm-9 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-10zm17.9 4-2.72 27.14a1 1 0 0 1 -1 .86h-18.41a1 1 0 0 1 -1-.86l-2.66-27.14z"></path><path className={pathClassname} d="m24 37a1 1 0 0 0 1-1v-19a1 1 0 0 0 -2 0v19a1 1 0 0 0 1 1z"></path><path className={pathClassname} d="m18 35a1 1 0 0 0 1-1v-14a1 1 0 0 0 -2 0v14a1 1 0 0 0 1 1z"></path><path className={pathClassname} d="m30 35a1 1 0 0 0 1-1v-14a1 1 0 0 0 -2 0v14a1 1 0 0 0 1 1z"></path></g></svg>
  )
}

export default TrashIcon
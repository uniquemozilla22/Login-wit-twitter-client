import React from 'react'
import NavigationBar from './NavigationBar.comp'

const LayoutComponent = (props) => {
  return (
    <>
    <NavigationBar user={props.user}/>
    {props.children}
    </>
  )
}

export default LayoutComponent
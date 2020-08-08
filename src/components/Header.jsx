import React from 'react'
import './Header.css'


const Header = () => {
  const handleClick = () => {
    window.open("http://air.inc", "_blank")
  }
  return (
    <div className="header">
      <img onClick={handleClick} className="air-logo" alt="air logo" src="/air-logo.svg" />
    </div>
  )
}

export default Header
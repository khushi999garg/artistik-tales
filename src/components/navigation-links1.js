import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'
import { Link } from 'react-router-dom'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-text">{props.text}</Link>
      <Link to='/about' className="navigation-links1-text1">{props.text1}</Link>
      <Link to="/artwork" className="navigation-links1-text2">{props.text2}</Link>
      <Link to="/contact" className="navigation-links1-text3">{props.text3}</Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  rootClassName: '',
  text3: 'Contact',
  text2: 'Artwork',
  text1: 'About',
  text: 'Home',
}

NavigationLinks1.propTypes = {
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1

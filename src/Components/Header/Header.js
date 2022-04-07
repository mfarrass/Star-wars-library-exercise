import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
  <Link to="/"><img src="/images/logo.jpg" alt='star-wars' className={style.logo}/></Link>
  )
}

export default Header
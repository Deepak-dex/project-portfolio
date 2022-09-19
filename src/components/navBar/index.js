import React from 'react'
import S from './style.module.css'
import Logo from "../../assets/images/logo.png"

export default function NavBar() {
  return (
    <nav className={S.nav}>
        <img src={Logo} alt="" className={S.nav__logo}/>
        <ul className={S.nav__menu}>
            <li><a href="#"> About </a></li>    
            <li><a href="#"> Works </a></li>    
            <li><a href="#"> Services </a></li>    
            <li><a href="#"> Contact </a></li>    
        </ul>
        <div className={S.nav__links}>
            <a href="http://"><img src="https://img.icons8.com/glyph-neue/64/000000/github.png"/></a>
            <a href="http://"><img src="https://img.icons8.com/glyph-neue/64/000000/linkedin.png"/></a>
            <a href="http://"><img src="https://img.icons8.com/windows/64/000000/twitter.png"/></a>
            <a href="http://"><img src="https://img.icons8.com/glyph-neue/64/000000/instagram-new.png"/></a>
        </div>
    </nav>
  )
}

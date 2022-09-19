import React from 'react'
import S from './style.module.css'

import Mail from '../../assets/svg/mail.svg'
import Logo from '../../assets/images/logo.png'

export default function Contact() {
  return (
    <section className={S.contactSection}>
        <div className={S.contactSection__Container}>
            <div className={S.contactSection__Container__main}>
                <span>CONTACT ME</span>
                <h3>Got a Project? Lets Talk!</h3>
                <span><img src={Mail} /> deepaktiwari@gmail.com</span>
            </div>
            <div className={S.contactSection__Container__links}>
                <img src={Logo} alt="" />
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

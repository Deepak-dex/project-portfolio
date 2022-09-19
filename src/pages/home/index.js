import React from 'react'
import S from './style.module.css'

import HeroImg from '../../assets/images/heroImg2.png'
import HeroShape from '../../assets/svg/heroShape.svg'
import HeroDots from '../../assets/svg/dotsPurple.svg'

export default function Home() {
  return (
    <header className={S.header}>
      <div className={S.header__heroContent}>
        <h1 className={S.header__heroContent__heading}>
          Hey, I'm a <span>fullstack</span> dev.
        </h1>
        <p className={S.header__heroContent__description}>
          Hi, I'm Deepak a Sed ut perspiciatis unde omnis iste natus. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.
        </p>
        <div className={S.header__heroContent__newsletter}>
          <input type="text" placeholder='Email address'/>
          <span>Subscribe</span>
        </div>
        <p className={S.header__heroContent__updates}>
          🎉Join my news letter for trending updates!
        </p>
      </div>
      <img src={HeroShape} alt="" className={S.header__HeroShape} />
      <div className={S.header__heroImgContainer}>
        <img src={HeroDots} alt="" className={S.header__heroImgContainer__HeroDots}/>
        <div>
        <img src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  )
}

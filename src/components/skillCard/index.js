import React from 'react'
import S from './style.module.css'

export default function SkillCard({skill}) {

  return(
    <div className={S.skill}>
        <div className={S.skill__header}>
          <div style={{backgroundColor:`${skill.bg}`}}>
            <img src={skill.image} alt="" />
          </div>
            <h3>{skill.heading}</h3>
        </div>
        <p>{skill.para}</p>
    </div>
  )
}

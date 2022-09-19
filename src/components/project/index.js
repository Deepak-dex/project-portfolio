import React from 'react'
import S from './style.module.css'

export default function project({project}) {
  return (
    <div className={S.card}>
        <img src={project.image} alt="" />
        <div className={S.card__container}>
            <h4>{project.title}</h4>
            <span>See full Project</span>
        </div>
    </div>
  )
}

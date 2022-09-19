import React, { useState } from 'react'
import S from './style.module.css'

import Arrow from '../../assets/svg/workArrowRight.svg'
import PharmacyImg from '../../assets/images/pharmacy.png'
import Project1 from '../../assets/images/project1.png'
import Project3 from '../../assets/images/project3.png'
import Project5 from '../../assets/images/project5.png'

import Project from '../../components/project'

export default function Portfolio() {
    const [projects, setProjects] = useState([
        {
            title: "Pharmacy Manager",
            image: PharmacyImg
        },
        {
            title: "Money Manager",
            image: Project1
        },
        {
            title: "Pharmacy Manager",
            image: Project3
        },
        {
            title: "Pharmacy Manager",
            image: Project3
        },
        {
            title: "Pharmacy Manager",
            image: Project5
        },
        {
            title: "Pharmacy Manager",
            image: Project1
        },
    ])
  return (
    <section className={S.Portfolio}>
        <header className={S.Portfolio__header}>
            <div className={S.Portfolio__header__heading}>
            <span>PORTFOLIO</span>
            <h2>All Creative Works</h2>
            </div>
            <div className={S.Portfolio__header__callForAction}>
                <span className={S.Portfolio__header__callForAction__tag}>NEW</span>
                <span>Discover all projects on <span>Github</span></span>
                <img src={Arrow} alt="" />
            </div>
        </header>
        <div className={S.Portfolio__projects}>
                {
                    projects.map((project)=><Project project={project}/>)
                }
        </div>
    </section>
  )
}

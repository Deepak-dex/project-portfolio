import React, { useState } from 'react'
import S from './style.module.css'

import SkillCard from '../../components/skillCard'

import SkillBlue from '../../assets/svg/skillBlue.svg'
import SkillYellow from '../../assets/svg/skillYellow.svg'
import SkillRed from '../../assets/svg/skillRed.svg'
import SkillPurple from '../../assets/svg/skillPurple.svg'


export default function Expertise() {
  const [skills, setSkills] = useState([
    {
    image:SkillBlue,
    heading: "Strategy & Direction",
    para: `Understand First. Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua.`,
    bg:'#e9f9ff'
    },
    {
    image:SkillYellow,
    heading: "Branding & Logo",
    para: `Position the Brand. Duis aute irure dolor in reprehenderit
     in voluptate velit esse dicta sunt explicabo. Nemo enim ipsam 
     voluptatem quia voluptas.`,
     bg:'#fff4e4'
    },
    {
    image:SkillRed,
    heading: "Motion & Animation",
    para: `Communicate to all. Occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit`,
    bg:'#fff5f6'
    },
    {
    image:SkillPurple,
    heading: "Development",
    para: `Bringing work to life. Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua.`,
    bg:'#f4f3ff'
    }
  ])

  return (
    <div className={S.expertiseSection}>
        <div className={S.expertiseSection__header}>
            <span>MY SKILLS</span>
            <h2>My Expertise</h2>
        </div>
        <div className={S.expertiseSection__skills}>
          {skills.map((skill)=><SkillCard skill = {skill}/>)}
        </div>
    </div>

  )
}

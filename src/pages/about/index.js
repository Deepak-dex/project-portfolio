import React from 'react'
import S from './style.module.css'

export default function About() {
  return (
    <section className={S.aboutSection}>
        <header className={S.aboutSection__header}>
            <span>NICE TO MEET YOU.</span>
            <h2>Hey, I'm Deepak,<br />Full-stack  developer</h2>
        </header>
        <p>
        Hi, my name is Deepak and Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute Excepteur 
        sint non laborum.
        </p>
        <p>
        Vestibulum at pulvinar nisi, non commodo erat. Aliquam lobortis posuere 
        magna sed tincidunt. Sed facilisis vestibulum eros eget varius. Nam eget velit 
        sed neque dignissim rutrum. Nullam efficitur ornare tellus eget condimentum.
        </p>
    </section>
  )
}

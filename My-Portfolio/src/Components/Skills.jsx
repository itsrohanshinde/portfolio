import React from 'react'
import './styles/Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'CSS',
    'HTML',
    'Git', 
  ];
  
  return (
    <section id="skills" className="skills-section ">
      <h2>Skills</h2>
      <ul className='skills-list'>
        {skills.map((skill, index) => (
          <li key={index} className='skill-item'>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

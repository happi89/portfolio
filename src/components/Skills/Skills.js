import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section projects' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='projects__grid'>
        {skills.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Skills

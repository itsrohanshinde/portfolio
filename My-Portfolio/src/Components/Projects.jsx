
import './styles/Projects.css'; 




const projects = [
{
    title: 'Financial Services Workflow',
    description: 'App that manages tasks between consultants, admin, and staff using React and Firebase.',
    github: 'https://github.com/your-repo/finance-app',
    demo: '#'
  },
  {
    title: 'Agri-Commerce Platform',
    description: 'Connects farmers to customers, manages product flow and payments.',
    github: 'https://github.com/your-repo/agri-platform',
    demo: '#'
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className='projects-list'>
        {projects.map((project, index) => (
          <div className= 'project-card'  key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github}>GitHub</a>
            <a href={project.demo}>Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

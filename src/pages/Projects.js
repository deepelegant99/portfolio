import projectData from "../data/data"


const Projects = () => {
    console.log(projectData)

    return (
      <>
        <h1>Project Page</h1>
        {projectData.map(project =>{
            return <li>{project.Title}</li>
        })}
      </>
    );
}

export default Projects

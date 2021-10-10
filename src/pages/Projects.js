import { Container, Grid } from "@material-ui/core";
import projectData from "../data/data";

const Projects = () => {
  console.log(projectData);

  return (
    <Container maxWidth="lg">
      <Grid Container>
        <h1>Project Page</h1>
        {projectData.map((project) => {
          return <li>{project.Title}</li>;
        })}
      </Grid>
    </Container>
  );
};

export default Projects;

import React, { useEffect } from "react";
import { ALL_PROJECTS } from '../graphql/query';
import { API, graphqlOperation } from 'aws-amplify';

import './styles.scss';
import {
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Project from './Project';

async function fetchProjects() {
  const projectsData = await API.graphql(graphqlOperation(ALL_PROJECTS));
  return projectsData.data.listProjects.items.sort((a, b) => a.order - b.order);
}

const Projects = () => {

  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    fetchProjects().then((newProjects) => setProjects(newProjects))
    return () => {};
  }, []);
  
  return (
    <div className="projects-content-wrapper">
      <div className="row">
        <div className="sidebar col-sm-12 col-md-2">
          <ul>
            {projects && projects.map(project => {
              return (
                <li key={project.id}>
                  <NavLink exact to={`/projects/${project.id}`}>{project.title}</NavLink>
                </li>
              );
            })}
          </ul> 
        </div>
        <div className="projects-content col-sm-12 col-md-10">
          <Route exact path="/projects">
            {projects?.length > 0 && <Redirect to={`/projects/${projects[0].id}`} />}
          </Route>
          <Route exact path="/projects/:id">
            {projects?.length > 0 && <Project />}
          </Route>
        </div>
      </div>
    </div>
  );
  
}

export default Projects;
import React, { Component } from "react";
import './styles.scss';
import {
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Project from './Project';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsList: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  // componentDidMount() {
  //   fetch("/api/project")
  //     .then(response => {
  //       if (response.status > 400) {
  //         return this.setState(() => {
  //           return { placeholder: "Something went wrong!" };
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then(projects => {
  //       this.setState(() => {
  //         return {
  //           projectsList: projects,
  //           loaded: true
  //         };
  //       });
  //     });
  // }

  render() {
    return (
      <div className="projects-content-wrapper">
        <div className="row">
          <div className="sidebar col-sm-12 col-md-2">
            <ul>
              {this.state.projectsList.map(project => {
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
              {this.state.projectsList.length > 0 && <Redirect to={`/projects/${this.state.projectsList[0].id}`} />}
              </Route>
              <Route exact path="/projects/:id">
                {this.state.projectsList.length > 0 && <Project projects={this.state.projectsList} />}
              </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
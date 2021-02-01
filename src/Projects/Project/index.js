import React, { useEffect, } from "react";
import { useParams } from 'react-router-dom';
import './styles.scss';
import { withRouter } from "react-router";
import { API, graphqlOperation } from 'aws-amplify';
import { PROJECT_BY_ID } from '../../graphql/query';

const Project = () => {

  const { id } = useParams();
  const [currentProject, setCurrentProject] = React.useState(null);

  useEffect(() => {
    getProjectById(id);
    return () => {};
  }, [id])

  async function getProjectById(projectId) {
    const project = await API.graphql(graphqlOperation(PROJECT_BY_ID, { id: projectId }));
    setCurrentProject(project.data.getProject);
  }

  return (
    <>
      {currentProject && 
        <div className="project">
          <ul>
            {currentProject.role && <li><span className="row-title">Role:</span>{currentProject.role}</li>}
            {currentProject.company && <li><span className="row-title">Company:</span>{currentProject.company}</li>}
            {currentProject.projectDescription && <li><span className="row-title">Product:</span>{currentProject.projectDescription}</li>}
            {currentProject.location && <li><span className="row-title">Location:</span>{currentProject.location}</li>}
            {currentProject.links?.length > 0 && <li>
              <span className="row-title">Links:</span>
              {/* <span className="links">{project?.links.map((link, index) => 
                <span className="link">
                  <a href={link} target="_blank">Link</a>
                  {currentProject.links?.length !== index + 1 && <span>, </span>}
                </span>
              )}
              </span> */}
            </li>}
          </ul>
          <p>{currentProject.description}</p>
          <p className="slides">
            {/* {currentProject.images.map((image) => <img src={image.image} key={image.id} />)} */}
          </p>
        </div>    
      }
    </>
  );
  
}

export default withRouter(Project);
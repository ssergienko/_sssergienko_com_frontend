import React, { useEffect, } from "react";
import { useParams } from 'react-router-dom';
import './styles.scss';
import { withRouter } from "react-router";
import { API, graphqlOperation } from 'aws-amplify';
import { PROJECT_BY_ID } from '../../graphql/query';

const Project = () => {

  const { id } = useParams();
  const [project, setproject] = React.useState(id);

  useEffect(() => {
    getProjectById(project)
  }, [])

  async function getProjectById(projectId) {
    const project = await API.graphql(graphqlOperation(PROJECT_BY_ID, { id: projectId }));
    setproject(project.data.getProject);
  }

  return (
      <>
      {project && 
        <div className="project">
          <ul>
            {project.role && <li><span className="row-title">Role:</span>{project.role}</li>}
            {project.company && <li><span className="row-title">Company:</span>{project.company}</li>}
            {project.projectDescription && <li><span className="row-title">Product:</span>{project.projectDescription}</li>}
            {project.location && <li><span className="row-title">Location:</span>{project.location}</li>}
            {project.links?.length > 0 && <li>
              <span className="row-title">Links:</span>
              {/* <span className="links">{project?.links.map((link, index) => 
                <span className="link">
                  <a href={link} target="_blank">Link</a>
                  {project.links?.length !== index + 1 && <span>, </span>}
                </span>
              )}
              </span> */}
            </li>}
          </ul>
          <p>{project.description}</p>
          <p className="slides">
            {/* {project.images.map((image) => <img src={image.image} key={image.id} />)} */}
          </p>
        </div>    
      }
    </>
  );
  
}

export default withRouter(Project);
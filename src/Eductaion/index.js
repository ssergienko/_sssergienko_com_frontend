import React, { useEffect } from "react";
import { ALL_EDUCATIONS, ALL_DOCUMENTS } from '../graphql/query';
import { API, graphqlOperation } from 'aws-amplify';
import './styles.scss';

async function fetchEducations() {
  const educationsData = await API.graphql(graphqlOperation(ALL_EDUCATIONS));
  const documents = await API.graphql(graphqlOperation(ALL_DOCUMENTS));
  return educationsData.data.listEducationss.items.map((ed) => {
    ed.documents = documents.data.listEducationDocuments.items.filter((doc) => doc.educationId === ed.id);
    return ed;
  }).sort((a, b) => a.order - b.order);
}

const Eductaion = () => {

  const [educations, setEducations] = React.useState([]);

  useEffect(() => {
    fetchEducations().then((newProjects) => setEducations(newProjects))
    return () => {};
  }, []);

  return (
    <div className="education">
      {educations?.length > 0 && educations.map((education) => {
        return (
          <>
            <div className="row" key={education.id}>
              <div className="logo col-md-1 col-sm-12">
                <img src={education.logo} />
              </div>
              <div className="description col-md-11 col-sm-12">
                <h6>{education.title}</h6>
                <p>{education.description}</p>
                <p className="documents">
                  {education.documents?.length > 0 && education.documents.map((document, index) => {
                    return (
                      <>
                        <a href={document.document} target="_blank">{document.title}</a>
                        {education.documents.length > 1 && education.documents.length - 1 !== index && ` / `}
                      </> )
                  })}
                </p>
              </div>
              <div className="logo col-md-1 col-sm-12">{document.finishedAt}</div>
            </div>
            <hr />
          </>
        )})
      }
    </div>
  );
}

export default Eductaion;
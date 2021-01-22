import React, { Component } from "react";
import './styles.scss';

class Eductaion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  // componentDidMount() {
  //   fetch("/api/education")
  //     .then(response => {
  //       if (response.status > 400) {
  //         return this.setState(() => {
  //           return { placeholder: "Something went wrong!" };
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then(educations => {
  //       this.setState(() => {
  //         return {
  //           educations: educations,
  //           loaded: true
  //         };
  //       });
  //     });
  // }

  render() {
    return (
      <div className="education">
        {this.state.educations.map((education) => {
          return (
            <>
              <div className="row">
                <div className="logo col-md-1 col-sm-12">
                  <img src={education.logo} />
                </div>
                <div className="description col-md-11 col-sm-12">
                  <h6>{education.title}</h6>
                  <p>{education.description}</p>
                  <p className="documents">
                    {education.documents.map((document, index) => {
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
}

export default Eductaion;
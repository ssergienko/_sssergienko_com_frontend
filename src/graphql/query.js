export const ALL_PROJECTS = `
  query listProjects {
    listProjects(limit: 20) {
      items {
        id
        title
        order
      }
    }
  }`;

export const PROJECT_BY_ID = `
  query getProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      role
      company
      projectDescription
      location
    }
  }`;

export const PROJECT_IMAGES = `
  query getImages($projectId: Int) {
    listImagess(filter: {projectId: {eq: $projectId}}) {
      items {
        id
        link
        text
      }
    }
  }
`;

export const PROJECT_LINKS = `
  query getLinks($projectId: Int) {
    listLinks(filter: {projectId: {eq: $projectId}}) {
      items {
        id
        link
        text
      }
    }
  }
`;

////////////// EDUCATIONS //////////////

export const ALL_EDUCATIONS = `
  query listEducations {
    listEducationss {
      items {
        id
        description
        logo
        order
        title
        categoryId
        documents {
          id
          document
        }
      }
    }
  }
`;

export const EDUCATIONS_DOCUMENTS = `
  query getDocuments($educationId: Int) {
    listEducationDocuments(filter: {educationId: {eq: $educationId}}) {
      items {
        id
        document
        title
      }
    }
  }
`;

export const ALL_DOCUMENTS = `
  query getAllDocuments {
    listEducationDocuments {
      items {
        id
        document
        educationId
        title
      }
    }
  }
`;
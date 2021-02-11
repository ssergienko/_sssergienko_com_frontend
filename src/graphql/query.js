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
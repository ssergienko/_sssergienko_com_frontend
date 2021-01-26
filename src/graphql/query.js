export const ALL_PROJECTS = `
  query listProjects {
    listProjects(limit: 2) {
      items {
        id
        title
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

// export const fullProductQuery = `
//   query Product(id: id) {
//     title
//   }
// `;
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
    }
    nextToken
  }
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    status
    user {
      id
      email
    }
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      status
    }
    nextToken
  }
}
`;
export const getTodoConnection = `query GetTodoConnection($id: ID!) {
  getTodoConnection(id: $id) {
    todos {
      id
      name
      description
      status
    }
    nextToken
  }
}
`;
export const listTodoConnections = `query ListTodoConnections(
  $filter: ModelTodoConnectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodoConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      nextToken
    }
    nextToken
  }
}
`;

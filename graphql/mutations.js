// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    email
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    email
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    email
  }
}
`;
export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
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
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
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
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
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
export const createTodoConnection = `mutation CreateTodoConnection($input: CreateTodoConnectionInput!) {
  createTodoConnection(input: $input) {
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
export const updateTodoConnection = `mutation UpdateTodoConnection($input: UpdateTodoConnectionInput!) {
  updateTodoConnection(input: $input) {
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
export const deleteTodoConnection = `mutation DeleteTodoConnection($input: DeleteTodoConnectionInput!) {
  deleteTodoConnection(input: $input) {
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

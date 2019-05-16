// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    email
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    email
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    email
  }
}
`;
export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
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
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
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
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
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
export const onCreateTodoConnection = `subscription OnCreateTodoConnection {
  onCreateTodoConnection {
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
export const onUpdateTodoConnection = `subscription OnUpdateTodoConnection {
  onUpdateTodoConnection {
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
export const onDeleteTodoConnection = `subscription OnDeleteTodoConnection {
  onDeleteTodoConnection {
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

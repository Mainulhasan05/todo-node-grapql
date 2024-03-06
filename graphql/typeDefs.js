const typeDefs = `#graphql
type User{
    id:ID
    name:String
    email:String
    phone:String
    role:Int
    status:Int
    password:String
    isVerified:Boolean
    verificationCode:String
    resetPasswordToken:String
    resetPasswordExpires:String
    image:String

}
  type Book {
    name: String
    author: String
  }
  type Query {
    hello: String
    books: [Book]
    users: [User]
    user(id:ID!): User
    vungChung(author:String): [Book]
    todo(id:ID!): Todo
    todos: [Todo]
  }
  
type Todo {
  id: ID!
  taskTitle: String!
  activeStatus: Boolean!
  progress: Int!
  priority: String!
  createdBy: ID!
}

input CreateTodoInput {
  taskTitle: String!
  activeStatus: Boolean!
  progress: Int!
  priority: String!
  createdBy: ID!
}

input UpdateTodoInput {
  id: ID!
  taskTitle: String
  activeStatus: Boolean
  progress: Int
  priority: String
}

type Mutation {
  createTodo(input: CreateTodoInput): Todo
  updateTodo(input: UpdateTodoInput!): Todo!
  deleteTodo(id: ID!): Todo!
}

`;

module.exports = typeDefs;
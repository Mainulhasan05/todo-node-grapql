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
    vungChung(author:String): [Book]
  }
`;

module.exports = typeDefs;
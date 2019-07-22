export default `

  type User {
    id: ID!
    name: String
  }

  type ShaderConfigs {
    id: ID!
    configName: String
    configValue: String
    shaderName: String
  }

  type Query {
    user(id: ID!): User
    shaderNameConfigs(shaderName: String!): [ShaderConfigs!]!
  }

  type Mutation {
    createUser(name: String, username:String!, password: String!): User!
    setShaderConfig(configName: String !, configValue: String !, shaderName: String !): Boolean
  }
`;

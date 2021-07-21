const { gql, ApolloServer } = require('apollo-server');

const typeDefs = gql`
  type Query {
     idade: Int
     salario: Float
     nome: String
     ativo: Boolean
     id:ID
     tecnologias:[String]
     marca:[String!]!
    #  para nao aparecer null forcamos com o !, 
    #  quando negamos dentro do array, informamos que o valor esperado tem que ser exatamente aquilo que informamos
  }
`
const resolvers = {
  Query:{
    idade(){
      return 18
    },
    id(){
      return 1
    },
    tecnologias(){
      return ['JS','REACT NATIVE']
    },
    marca(){
      return ['CSS']
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen();
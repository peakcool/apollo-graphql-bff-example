const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const BookAPI = require('./datasources/book');

const server = new ApolloServer({
    schema: buildFederatedSchema([{
        typeDefs,
        resolvers,  
    }]),
    dataSources: () => ({
        bookAPI: new BookAPI()
    }),
    tracing: true // 跟踪面板，分析性能 
})

server.listen({ port: 4002 }).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})
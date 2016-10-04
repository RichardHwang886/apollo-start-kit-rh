import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';
//import Mocks from './data/mocks';
import Resolvers from './data/resolvers';
import seed from './data/models/seed';

import { apolloExpress, graphiqlExpress, renderGraphiQL } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';


seed.go();

const endpointURL = '/graphql';
const GRAPHQL_PORT = 8082;

const graphQLServer = express();

// graphQLServer.use('/graphql', apolloServer({
//     graphiql: true,
//     pretty: true,
//     schema: Schema,
//     // mocks: Mocks,
//     resolvers: Resolvers,
// }));
// graphQLServer.listen(GRAPHQL_PORT, () => console.log(
//     `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
// ));



const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers,
    allowUndefinedInResolve: false,
    printErrors: true,
});

// addMockFunctionsToSchema({
//   schema: executableSchema,
//   mocks: Mocks,
//   preserveResolvers: true,
// });

// 進入首頁,就會出現
graphQLServer.get("/", function(req, res) {
    res.send(renderGraphiQL({ endpointURL: endpointURL }));
});

// `context` must be an object and can't be undefined when using connectors
graphQLServer.use(endpointURL, bodyParser.json(), apolloExpress({
    schema: executableSchema,
    context: {},
}));

graphQLServer.use(endpointURL, graphiqlExpress({
    endpointURL: endpointURL,
}));



graphQLServer.listen(GRAPHQL_PORT, () => console.log(
    `GraphQL Server is now running on
    http://localhost:${GRAPHQL_PORT}/graphql   [method:POST]
       and also
    http://localhost:${GRAPHQL_PORT}     [method:GET]`
));
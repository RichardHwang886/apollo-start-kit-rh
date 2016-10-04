// const typeDefinitions = `
// type Query {
//   testString: String
// }
// type Author {
//   id: Int
//   firstName: String
//   lastName: String
//   posts: [Post]
// }
// type Post {
//   id: Int
//   title: String
//   text: String
//   views: Int
//   author: Author
// }
// schema {
//   query: Query
// }
// `;


import AuthorType from './schemas/author';
import PostType from './schemas/post';
import RootQueryType from './schemas/rootquery';
import RootMutationType from './schemas/rootmutation';

const typeDefinitions =
    AuthorType +
    PostType +
    RootQueryType +
    RootMutationType +
    `
# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default [typeDefinitions];
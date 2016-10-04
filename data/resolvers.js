import RootQuery from './resolvers/rootquery';
import AuthorResolver from './resolvers/author.resolver';
import PostResolver from './resolvers/post.resolver';
import RootMutation from './resolvers/rootmutation';



const resolvers = {
    Author: AuthorResolver,
    Post: PostResolver,
    RootQuery: RootQuery,
    RootMutation: RootMutation,

};


export default resolvers;
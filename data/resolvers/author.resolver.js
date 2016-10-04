import { Author } from '../models/author';

const AuthorResolver = {
    // posts(author) {
    //     return [
    //         { id: 1, title: 'A post', text: 'Some text', views: 2 },
    //         { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
    //     ];
    // },
    posts(author) {
        return author.getPosts();
    },

};
export default AuthorResolver;
import { Author } from '../models/author';

const RootMutation = {
    createAuthor: (root, args) => {
        return Author.create(args);
    },
    createPost: (root, { authorId, tags, title, text }) => {
        return Author.findOne({ where: { id: authorId } }).then((author) => {
            console.log('found', author);
            return author.createPost({ tags: tags.join(','), title, text });
        });
    },
};

export default RootMutation;
import FortuneCookie from '../fortune.js';
import { Author } from '../models/author';
import _ from 'lodash';

const RootQuery = {
    // author(root, args) {
    //     return { id: 1, firstName: 'Hello', lastName: 'World' };
    // },
    author(_, args) {
        return Author.find({ where: args });
    },

    fortuneCookie() {
        return FortuneCookie.getOne();
    },
};

export default RootQuery;
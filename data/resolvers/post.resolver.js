//import { Author } from '../models/author';
import { View } from '../models/view';

const PostResolver = {
    // author(post) {
    //     return { id: 1, firstName: 'Hello', lastName: 'World' };
    // },
    author(post) {
        return post.getAuthor();
    },
    tags(post) {
        var sRet = null;
        if (post.tags != null)
            sRet = post.tags.split(',');
        return sRet;
    },
    views(post) {
        //return View.findOne({ postId: post.id })
        //    .then((view) => view.views);
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('MongoDB timeout when fetching field views (timeout is 500ms)'), 500);
            View.findOne({ postId: post.id }).then((res) => resolve(res.views));
        });
    },
};
export default PostResolver;
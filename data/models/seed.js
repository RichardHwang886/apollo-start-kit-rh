import casual from 'casual';
import { db } from '../connectors';
import { AuthorModel } from './author';
import _ from 'lodash';
import { View } from './view';

const seed = {
    go() {
        casual.seed(123);
        db.sync({ force: true }).then(() => {
            _.times(10, () => {
                return AuthorModel.create({
                        firstName: casual.first_name,
                        lastName: casual.last_name,
                    }).then((author) => {
                        author.createPost({
                            title: `A post0 by ${author.firstName}`,
                            text: casual.sentences(3)
                        });
                        return author.createPost({
                            title: `A post by ${author.firstName}`,
                            text: casual.sentences(3),
                            tags: casual.words(3).split(' ').join(','),
                        });
                    }).then((post) => { // <- the new part starts here
                        // create some View mocks
                        return View.update({ postId: post.id }, { views: casual.integer(0, 100) }, { upsert: true });
                    }).then((res) => console.log(res))
                    .catch((err) => console.log(err));;
            });
        });
    },
};

export default seed;
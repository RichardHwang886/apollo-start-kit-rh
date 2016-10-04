import Sequelize from 'sequelize';
import { db } from '../connectors';
import { AuthorModel } from './author';



const PostModel = db.define('post', {
    title: { type: Sequelize.STRING },
    text: { type: Sequelize.STRING },
    tags: { type: Sequelize.STRING },
});

//PostModel.belongsTo(AuthorModel);  // 要寫在author.js
const Post = db.models.post;
export { Post, PostModel };
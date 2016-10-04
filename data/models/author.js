import Sequelize from 'sequelize';
import {db} from '../connectors';
import {PostModel} from './post';

const AuthorModel = db.define('author', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
});


AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

 const Author = db.models.author;

export { Author,AuthorModel };
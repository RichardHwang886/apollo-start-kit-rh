import Sequelize from 'sequelize';
import Mongoose from 'mongoose';
//import seed  from './models/seed';


const db = new Sequelize('blog', null, null, {
    dialect: 'sqlite',
    storage: './blog.sqlite',
});



// somewhere in the middle:
//const mongo = Mongoose.connect('mongodb://localhost/views');
const mongo = Mongoose.connect('mongodb://localhost/views', (err) => {
  if(err){
    console.error('Could not connect to MongoDB on port 27017');
  }
});




export { db,mongo };
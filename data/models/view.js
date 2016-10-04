import Mongoose from 'mongoose';
import { mongo } from '../connectors';

const ViewSchema = Mongoose.Schema({
    postId: Number,
    views: Number,
});

const View = Mongoose.model('views', ViewSchema);
export { View };
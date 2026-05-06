import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL);

let db = mongoose.connection;

export default db;

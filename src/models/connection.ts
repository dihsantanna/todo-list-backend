import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const passw = process.env.MONGODB_PASS as string;
const dbName = 'todolist';
const DB_CONNECTION = `mongodb+srv://todolistadmin:${
  passw}@todolist.auenj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION);

export default mongoose;
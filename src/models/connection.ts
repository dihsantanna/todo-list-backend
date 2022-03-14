import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const passw = process.env.MONGODB_PASS as string;
const dbName = 'todolist';
const DB_URL = `mongodb+srv://todolistadmin:${
  passw}@todolist.auenj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL);

export default mongoose;
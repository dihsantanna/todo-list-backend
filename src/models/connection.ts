import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const passw = process.env.MONGODB_PASS as string;
const DB_CONNECTION = `mongodb+srv://todolistadmin:${
  passw}@todolist.auenj.mongodb.net/todolist?retryWrites=true&w=majority`;

export default MongoClient.connect(DB_CONNECTION);

import app from './app';
import * as routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT as string;

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

app.use('/users', routes.users);

app.use('/tasks', routes.tasks);
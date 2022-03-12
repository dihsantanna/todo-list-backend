import app from './app';
import * as routes from './routes';

app.use(routes.users);

app.use(routes.tasks);
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT as string;

const app = express();

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

export default app;
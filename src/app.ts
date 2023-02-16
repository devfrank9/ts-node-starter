import express from 'express';
import appRouter from './router';
import ejs from 'ejs';

const app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', 'src/view');

app.use('/', appRouter);
export const viteNodeApp = app;

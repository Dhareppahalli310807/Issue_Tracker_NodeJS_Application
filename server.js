import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import projectsRouter from './routes/projects.js';

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect('mongodb://localhost:27017/issue-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/projects', projectsRouter);

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});

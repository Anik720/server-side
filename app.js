const express=require('express')
const cors = require('cors');

const articleRoutes = require('./Routes/articleRoutes');
const editorRoutes = require('./Routes/editorRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/article', articleRoutes);
app.use('/api/v1/editor', editorRoutes);

module.exports=app
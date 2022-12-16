const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose').default;
const config = require('config');
const chalk = require('chalk');
const initDatabase = require('./startUp/initDatabase');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const filePath = require('./middleware/filepath.middleware')

const app = express();

app.use(fileUpload({}));
app.use(filePath(path.join(__dirname, 'static')))
app.use(express.json());
app.use('/image', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', routes);

const PORT = process.env.port || config.get('port');

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client')));
  const indexPath = path.join(__dirname, 'client', 'index.html');
  app.get('*', (req, res) => {
    res.sendFile(indexPath);
  });
}

async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDatabase();
    });
    await mongoose.connect(config.get('mongoUri'));
    app.listen(PORT, () => console.log(chalk.green(`Server has been started on port ${PORT}`)));
  } catch (e) {
    console.log(chalk.red(e.message));
    process.exit(1);
  }
}

start();

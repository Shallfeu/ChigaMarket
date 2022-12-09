const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose').default;
const config = require('config');
const chalk = require('chalk');
const initDatabase = require('./startUp/initDatabase');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(fileUpload({}));
app.use(express.json());
app.use(express.static(config.get('staticPath')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', routes);

const PORT = process.env.port || config.get('port');

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

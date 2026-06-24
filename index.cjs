const { setServers } = require('node:dns/promises');
setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/products.cjs'));


async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });

    console.log('Connected to Database!');
   const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
}

start();

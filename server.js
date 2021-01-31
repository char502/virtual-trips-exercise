const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/geolocation');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/get_data_GB/locations', async (req, res) => {
  try {
    const locations = await db.getLocationData(req.query.q);
    console.log({ locations });
    res.status(200).json({ locations });
  } catch (error) {
    res.status(200).send({ message: error.sqlMessage || error.message });
  }
});

// For heroku deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`server is running on port ${port}`));

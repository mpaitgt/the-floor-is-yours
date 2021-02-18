const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const publicPath = (path.join(__dirname, '..', 'client', 'build'));
const bodyParser = require('body-parser');
const email = require('./email-config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(publicPath));
app.use(email);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
});
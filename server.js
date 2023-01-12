const express = require('express');
const app = express();
const {Howl, Howler} = require('howler');
const port = process.env.PORT || 3000;



app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

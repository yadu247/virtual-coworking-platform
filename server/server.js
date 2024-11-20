const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/form', async (req, res) => {
  console.log(req.body);
});

app.listen(8888, () => {
  console.log('Server is running @ http://localhost:8888');
});

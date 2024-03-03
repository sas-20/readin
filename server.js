const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let users = [
  { username: 'admin', password: 'password' }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid username or password. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});

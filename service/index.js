const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt: ${email}, ${password}`);
  res.json({ message: 'Login successful!' });
});

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  console.log(`Register attempt: ${email}, ${password}`);
  res.json({ message: 'Account created successfully!' });
});

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

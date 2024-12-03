const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database'); // Import your database functions
const app = express();
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Router for service endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Register new user
apiRouter.post('/auth/register', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await DB.getUserByEmail(email);

  if (existingUser) {
    return res.status(409).send({ msg: 'Email already registered' });
  }

  const newUser = await DB.createUser(email, password);
  setAuthCookie(res, newUser.token);

  res.send({ message: 'Account created successfully!' });
});

// Login user
apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await DB.getUserByEmail(email);

  if (user && await bcrypt.compare(password, user.password)) {
    setAuthCookie(res, user.token);
    return res.send({ message: 'Login successful!' });
  } else {
    res.status(401).send({ msg: 'Invalid credentials' });
  }
});

// Logout user
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to check if the user is authenticated
apiRouter.use(async (req, res, next) => {
  const token = req.cookies[authCookieName];
  const user = await DB.getUserByToken(token);

  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Save outfit
apiRouter.post('/outfits', async (req, res) => {
  const { outfit } = req.body;
  await DB.addOutfit(outfit);
  res.send({ message: 'Outfit saved successfully!' });
});

// Get all outfits
apiRouter.get('/outfits', async (req, res) => {
  const outfits = await DB.getOutfits();
  res.send({ outfits });
});

// Helper function to set the auth cookie
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

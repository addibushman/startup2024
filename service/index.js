const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const wardrobeItems = [];


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

// Endpoint to get wardrobe items
app.get('/api/wardrobe', (req, res) => {
    res.json({ items: wardrobeItems });
  });
  
  // Endpoint to add an item to the wardrobe
  app.post('/api/wardrobe', (req, res) => {
    const { item } = req.body; // Assume item is a URL to the uploaded image
    wardrobeItems.push(item);
    res.json({ message: 'Item added to wardrobe!', item });
  });
  
  // Endpoint to save an outfit (just an example, can be expanded)
  app.post('/api/save-outfit', (req, res) => {
    const { outfit } = req.body; // Saving the selected outfit
    console.log('Outfit saved:', outfit);
    res.json({ message: 'Outfit saved successfully!' });
  });

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

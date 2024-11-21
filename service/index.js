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

app.get('/api/wardrobe', (req, res) => {
    res.json({ items: wardrobeItems });
  });
  
  app.post('/api/wardrobe', (req, res) => {
    const { item } = req.body;
    wardrobeItems.push(item);
    res.json({ message: 'Item added to wardrobe!', item });
  });
  
  app.post('/api/save-outfit', (req, res) => {
    const { outfit } = req.body; 
    console.log('Outfit saved:', outfit);
    res.json({ message: 'Outfit saved successfully!' });
  });

  let sharedOutfits = [
    { 
      id: 1, 
      outfit: '/outfits/outfit1.jpg', 
      friend: 'Dionne', 
      likes: 0
    },
    { 
      id: 2, 
      outfit: '/outfits/outfit2.jpg', 
      friend: 'Tai', 
      likes: 0
    },
  ];
  
  app.post('/api/share-outfit', (req, res) => {
    const { outfit, friend } = req.body;
    const newOutfit = {
      id: sharedOutfits.length + 1,
      outfit,
      friend,
      likes: 0,
    };
    sharedOutfits.push(newOutfit);
    res.json({ message: 'Outfit shared successfully!', outfit: newOutfit });
  });
  
  app.get('/api/shared-outfits', (req, res) => {
    res.json({ outfits: sharedOutfits });
  });
  
  app.post('/api/like-outfit', (req, res) => {
    const { id } = req.body;
    const outfit = sharedOutfits.find((outfit) => outfit.id === id);
    if (outfit) {
      outfit.likes += 1;
      res.json({ message: 'Outfit liked!', likes: outfit.likes });
    } else {
      res.status(404).json({ message: 'Outfit not found!' });
    }
  });
  

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const path = require('path');

const app = express();

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

const authorized = (req, res, next) => {
  const isAuth = true;
  if (isAuth) {
    req.users = users;
    next();
  } else {
    res.status(401).send('Not authorized');
  }
};

// Middlewrare
app.use(authorized);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   console.log(req.hostname);
//   res.send('<h1>Home Page</h1>');
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>');
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

app.get('/api/users', (req, res) => {
  console.log(req);
  res.send(req.users);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

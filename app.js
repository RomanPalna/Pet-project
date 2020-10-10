const express = require('express');
const exhbs = require('express-handlebars');
const app = express();

const wine = require('./wine.json')

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/wine', (req, res) => {
    res.render('wine', {wine, cssFileName: 'wine', pageTitle: 'Наші вина'})
})

app.get('/wine/:wineId', (req, res) => {
    const oneWine = wine.find(w => w.id === req.params.wineId)
    res.render('oneWine', {oneWine, cssFileName: 'oneWine', pageTitle: 'Наші вина'})
})

app.listen(4444, () => {
    console.log(`Application server is running on port ${4444}`);
    
});
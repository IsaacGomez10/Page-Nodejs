const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Primer Website' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Página de contacto' });
});

module.exports = router;
const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('get all product')
})
//TODO: change the method
router.get('/add', (req, res) => {
    res.send('add product');
}) //post
router.get('/update', (req, res) => {
    res.send('update product');
}) //patch
router.get('/delete', (req, res) => {
    res.send('delete product')
}) //delete

module.exports = router;
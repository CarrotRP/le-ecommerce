const express = require('express')

const router = express.Router();

//seller
router.get('/view', (req, res) => {
    res.send('view recieved order')
});
router.get('/status/update', (req, res) => {
    res.send('update order status(pending, shipped, delivered)')
})
//buyer
router.get('/history', (req, res) => {
    res.send('see order history');
})
router.get('/status', (req, res) => {
    res.send('view status')
}); //probably change this to get by :id, and see the product order details along with its status
router.get('/cancel', (req, res) => {
    res.send('cancel order')
}); //after user checkout, they can cancel, so i assume theres another status property for the product models
//get seller profile routes below(l8tr)

module.exports = router;
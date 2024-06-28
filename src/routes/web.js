const express = require('express');
const router = express.Router();
const { getHomepage, getABC, postCreateUser, getCreatePage } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/abc', getABC);

// Corrected the route for getCreatePage
router.get('/create', getCreatePage);

// Corrected the route for postCreateUser
router.post('/create-user', postCreateUser);

module.exports = router;

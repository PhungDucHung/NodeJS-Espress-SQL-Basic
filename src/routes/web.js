const express = require('express');
const router = express.Router();
const { getHomepage, getABC, postCreateUser, getCreatePage, getUpdatePage , postUpdateUser } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/abc', getABC);

// Corrected the route for getCreatePage
router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/update-user', postUpdateUser);

// Corrected the route for postCreateUser
router.post('/create-user', postCreateUser);

module.exports = router;

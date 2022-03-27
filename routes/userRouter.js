const express = require('express');
const { getUsers, getUser } = require('../controllers/index.js');


const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser)

module.exports = router;
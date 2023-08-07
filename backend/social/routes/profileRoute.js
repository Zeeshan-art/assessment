const express = require('express');
const { createUserProfile, getUserProfile, destroyUserProfile, updateUserProfile, getUserProfileById } = require('../controllers/profileController');

const route = express.Router();

route.get('/get_user_profile', getUserProfile);
route.post('/create_user_profile', createUserProfile);
route.delete('/delete_user_profile', destroyUserProfile);
route.patch('update_user_profile', updateUserProfile);
route.get('get_user_profile_by_id', getUserProfileById);

module.exports = route;

const express = require('express');
const { 
    getAllUserProfiles,
    createUserProfile,
    destroyUserProfile,
    updateUserProfile,
    getUserProfileById
} = require('../controllers/userProfileController');
const route = express.Router();

route.get('/', getAllUserProfiles);
route.post('/create_user_profile', createUserProfile);
route.delete('/:id', destroyUserProfile);
route.patch('/:id', updateUserProfile);
route.get('/:id', getUserProfileById);

module.exports = route;

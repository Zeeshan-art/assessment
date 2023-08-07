const express = require('express');
const router = express.Router();
const userProfile = require('../routes/userProfileRoute');
const tenantProfile = require('../routes/tenantProfileRoute')

function routes() {
  router.use('/user_profile', userProfile);
  router.use('/tenant_profile', tenantProfile);
  return router;
}

module.exports = routes();
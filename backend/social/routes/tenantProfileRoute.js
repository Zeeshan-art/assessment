const express = require('express');
const {
    getAllTenantProfiles,
    createTenantProfile,
    destroyTenantProfile,
    updateTenantProfile,
    getTenantProfileById
} = require('../controllers/tenantProfileController');
const route = express.Router();

route.get('/', getAllTenantProfiles);
route.post('/create_tenant_profile', createTenantProfile);
route.delete('/:id', destroyTenantProfile);
route.patch('/:id', updateTenantProfile);
route.get('/:id', getTenantProfileById);

module.exports = route;

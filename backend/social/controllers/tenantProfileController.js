const defaultResponse = require('../helper/defaultResponse.js');
const { TenantProfile } = require('../model/tenantProfileModel.js');
const {
    DATA_ADDED,
    DATA_NOT_ADDED,
    VIEW_ALL_DATA,
    DATA_NOT_FOUND,
    DATA_UPDATE_SUCCESSFULLY,
    DATA_UPDATE_FAILED,
    DATA_DELETE_SUCCESSFULLY,
    DATA_NOT_DELETED,
} = require('../constants/messages');

const createTenantProfile = async (req, res) => {
    const { name, address, city, state, country, zip_code, phone, web_url } = req.body;
    try {
        const tenantProfile = await TenantProfile.create({
            name, address, city, state, country, zip_code, phone, web_url
        });
        return defaultResponse().success(res, tenantProfile, DATA_ADDED, 200);
    } catch (error) {
        return defaultResponse().error(res, DATA_NOT_ADDED, 400);
    }
};

const getAllTenantProfiles = async (req, res) => {
    try {
        const getAllTenantProfiles = await TenantProfile.findAll({
            attributes: ['id', 'name', 'address', 'city', 'state', 'country', 'zip_code', 'phone', 'web_url'],
        });

        if (getAllTenantProfiles.length === 0) {
            return defaultResponse().error(res, DATA_NOT_FOUND, 404);
        } else {
            return defaultResponse().success(res, getAllTenantProfiles, VIEW_ALL_DATA, 200);
        }
    } catch (error) {
        console.error(error);
        return defaultResponse().error(res, DATA_NOT_FOUND, 404);
    }
};

const getTenantProfileById = async (req, res) => {
    const id = req.params.id;
    try {
        const getTenantProfileById = await TenantProfile.findAll({
            attributes: ['id', 'name', 'address', 'city', 'state', 'country', 'zip_code', 'phone', 'web_url'],
        },
            { where: { id: id } },
        );

        if (getTenantProfileById.length === 0) {
            return defaultResponse().error(res, DATA_NOT_FOUND, 404);
        } else {
            return defaultResponse().success(res, getTenantProfileById, VIEW_ALL_DATA, 200);
        }
    } catch (error) {
        console.error(error);
        return defaultResponse().error(res, DATA_NOT_FOUND, 404);
    }
};

const updateTenantProfile = async (req, res) => {
    const id = req.params.id;
    const { name, address, city, state, country, zip_code, phone, web_url } = req.body;
    try {
        const updateTenantProfile = await TenantProfile.update(
            { name, address, city, state, country, zip_code, phone, web_url },
            { where: { id: id } },
        );
        if (updateTenantProfile.length === 0) {
            return defaultResponse().error(res, DATA_NOT_FOUND, 404);
        }
        return defaultResponse().success(
            res,
            updateUserProfile,
            DATA_UPDATE_SUCCESSFULLY,
            200,
        );
    } catch (error) {
        return defaultResponse().error(res, DATA_UPDATE_FAILED, 400);
    }
};

const destroyTenantProfile = async (req, res) => {
    const id = req.params.id;
    try {
        await TenantProfile.destroy({ where: { id: id } });
        return defaultResponse().success(res, null, DATA_DELETE_SUCCESSFULLY, 200);
    } catch (error) {
        return defaultResponse().error(res, DATA_NOT_DELETED, 400);
    }
};
module.exports = {

    getAllTenantProfiles,
    createTenantProfile,
    updateTenantProfile,
    destroyTenantProfile,
    getTenantProfileById

};

const { UserProfile } = require('../model/userProfileModel.js');
const defaultResponse = require('../helper/defaultResponse.js');

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

const createUserProfile = async (req, res) => {
    const { first_name, last_name, department, designation,
        image_url, city, country, bio, social_links, employee_id, tenant_id } = req.body;
    try {
        const userProfile = await UserProfile.create({
            first_name, last_name, department, designation,
            image_url, city, country, bio, social_links, employee_id, tenant_id
        });
        return defaultResponse().success(res, userProfile, DATA_ADDED, 200);
    } catch (error) {
        return defaultResponse().error(res, DATA_NOT_ADDED, 400);
    }
};

const getAllUserProfiles = async (req, res) => {
    try {
        const getAllUserProfiles = await UserProfile.findAll({
            attributes: ['id', 'first_name', 'last_name', 'department', 'designation',
                'image_url', 'city', 'country', 'bio', 'social_links', 'employee_id', 'tenant_id'],
        });

        if (getAllUserProfiles.length === 0) {
            return defaultResponse().error(res, DATA_NOT_FOUND, 404);
        } else {
            return defaultResponse().success(res, getAllUserProfiles, VIEW_ALL_DATA, 200);
        }
    } catch (error) {
        console.error(error);
        return defaultResponse().error(res, DATA_NOT_FOUND, 404);
    }
};

const getUserProfileById = async (req, res) => {
    const id = req.params.id;
    try {
        const getUserProfileById = await UserProfile.findAll({
            attributes: [ 'id', 'first_name', 'last_name', 'department', 'designation',
                'image_url', 'city', 'country', 'bio', 'social_links', 'employee_id', 'tenant_id'],
        },
            { where: { id: id } },
        );

        if (getUserProfileById.length === 0) {
            return defaultResponse().error(res, DATA_NOT_FOUND, 404);
        } else {
            return defaultResponse().success(res, getUserProfileById, VIEW_ALL_DATA, 200);
        }
    } catch (error) {
        console.error(error);
        return defaultResponse().error(res, DATA_NOT_FOUND, 404);
    }
};

const updateUserProfile = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, department, designation,
        image_url, city, country, bio, social_links, employee_id, tenant_id } = req.body;
    try {
        const updateUserProfile = await UserProfile.update(
            {
                first_name, last_name, department, designation,
                image_url, city, country, bio, social_links, employee_id, tenant_id
            },
            { where: { id: id } },
        );
        if (updateUserProfile.length === 0) {
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

const destroyUserProfile = async (req, res) => {
    const id = req.params.id;
    try {
        await UserProfile.destroy({ where: { id: id } });
        return defaultResponse().success(res, null, DATA_DELETE_SUCCESSFULLY, 200);
    } catch (error) {
        return defaultResponse().error(res, DATA_NOT_DELETED, 400);
    }
};
module.exports = {

    getAllUserProfiles,
    createUserProfile,
    updateUserProfile,
    destroyUserProfile,
    getUserProfileById

};

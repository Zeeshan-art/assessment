const TenantProfile = require("../model/tenantProfileModel");
const UserProfile= require("../model/userProfileModel");

const processMessage = async (kafkaMessage) => {
  try {
    const { event_name, properties } = kafkaMessage;
    if (event_name === 'tenant_created') {
      await TenantProfile.create(properties);
    } else if (event_name === 'user_created') {
      await UserProfile.create(properties);
    } else {
      console.warn('Unknown event_name:', event_name);
    }
  } catch (error) {
    console.error('Error processing Kafka message:', error);
  }
};

module.exports = { processMessage };


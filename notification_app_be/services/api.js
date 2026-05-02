const axios = require("axios");
const Log = require("../../logging_middleware/logger");

let token = ""; 
async function getAuthToken() {
  try {
    const res = await axios.post(
      "http://20.207.122.201/evaluation-service/auth",
      {
        email: process.env.EMAIL,
        name: process.env.NAME,
        rollNo: process.env.ROLL_NO,
        accessCode: process.env.ACCESS_CODE,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      }
    );

    token = `${res.data.token_type} ${res.data.access_token}`;

    
    await Log("backend", "info", "handler", "Auth token generated");
  } catch (err) {
    await Log("backend", "fatal", "handler", "Auth failed");
    throw err;
  }
}


async function fetchNotifications(params = {}) {
  try {
    const res = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: token,
        },
        params,
      }
    );

    
    await Log("backend", "info", "handler", "Fetched notifications");

    return res.data.notifications;
  } catch (err) {
    await Log("backend", "error", "handler", "Fetch failed");
    throw err;
  }
}

module.exports = { getAuthToken, fetchNotifications };
const axios = require("axios");
const Log = require("../../logging_middleware/logger");

let token = "";

async function getAuthToken() {
  try {
    const res = await axios.post(
      "http://20.207.122.201/evaluation-service/auth",
      {
        email: "sj5805@srmist.edu.in",
        name: "Smita Joshi",
        rollNo: "RA2311030010232",
        accessCode: "QkbpxH",
        clientID: "cfce99c3-dc78-4de5-9b30-91604d263f56",
        clientSecret: "khxBBSqjxsXzBrwk",
      }
    );

    token = `${res.data.token_type} ${res.data.access_token}`;

    await Log("backend", "info", "api", "Auth token generated");
  } catch (err) {
    await Log("backend", "fatal", "api", "Auth failed");
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

    await Log("backend", "info", "api", "Fetched notifications");

    return res.data.notifications;
  } catch (err) {
    await Log("backend", "error", "api", "Fetch failed");
    throw err;
  }
}

module.exports = { getAuthToken, fetchNotifications };
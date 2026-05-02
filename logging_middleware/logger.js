const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(LOG_API, {
      stack,
      level,
      package: pkg,
      message,
    });
  } catch (err) {
    // Fail silently (as per constraints)
  }
}

module.exports = Log;
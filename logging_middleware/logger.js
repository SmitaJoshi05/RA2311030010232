const axios = require("axios");
require("dotenv").config();

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: process.env.LOGGER_TOKEN.startsWith("Bearer")
            ? process.env.LOGGER_TOKEN
            : `Bearer ${process.env.LOGGER_TOKEN}`,
        },
      }
    );
  } catch (err) {
    console.log("LOG FAILED:", err.response?.status || err.message);
  }
}

module.exports = Log;
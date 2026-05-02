const express = require("express");
const router = express.Router();

const { fetchNotifications } = require("../services/api");
const getTopNotifications = require("../services/priority");
const Log = require("../../logging_middleware/logger");

router.get("/", async (req, res) => {
  try {
    const { limit, page, notification_type } = req.query;

    const params = {};
    if (limit) params.limit = limit;
    if (page) params.page = page;
    if (notification_type) params.notification_type = notification_type;

    let data = await fetchNotifications(params);

    const result = getTopNotifications(data, limit || 10);

    await Log("backend", "info", "handler", "Returned notifications");

    res.json(result);
  } catch (err) {
    await Log("backend", "error", "handler", "Route failed");
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
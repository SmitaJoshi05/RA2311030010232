const Log  = require("../../logging_middleware/logger");

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getTopNotifications(notifications, limit = 10) {
  try {
    const sorted = notifications.sort((a, b) => {
      if (priorityMap[b.Type] !== priorityMap[a.Type]) {
        return priorityMap[b.Type] - priorityMap[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    Log("backend", "info", "service", "Sorted notifications");

    return sorted.slice(0, limit);
  } catch (err) {
    Log("backend", "error", "service", "Sorting failed");
    throw err;
  }
}

module.exports = getTopNotifications;
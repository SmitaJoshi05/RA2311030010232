const express = require("express");
const cors = require("cors");
const notificationRoutes = require("./routes/notifications");
const { getAuthToken } = require("./services/api");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/notifications", notificationRoutes);

const PORT = 5000;

async function startServer() {
  await getAuthToken(); // fetch token before starting

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
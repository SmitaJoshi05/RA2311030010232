import axios from "axios";

export const fetchNotifications = async (params) => {
  const res = await axios.get("http://localhost:5000/notifications", {
    params,
  });
  return res.data;
};
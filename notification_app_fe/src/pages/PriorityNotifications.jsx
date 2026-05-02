import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";

const PriorityNotifications = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetchNotifications({ limit: 10 });
    setData(res);
  };

  return (
    <div>
      <h2>Priority Notifications</h2>

      {data.map((n) => (
        <NotificationCard key={n.ID} notification={n} />
      ))}
    </div>
  );
};

export default PriorityNotifications;
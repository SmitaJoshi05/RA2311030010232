import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import Filters from "../components/Filters";

const AllNotifications = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    loadData();
  }, [type]);

  const loadData = async () => {
    const res = await fetchNotifications({ notification_type: type });
    setData(res);
  };

  return (
    <div>
      <h2>All Notifications</h2>
      <Filters type={type} setType={setType} />

      {data.map((n) => (
        <NotificationCard key={n.ID} notification={n} />
      ))}
    </div>
  );
};

export default AllNotifications;
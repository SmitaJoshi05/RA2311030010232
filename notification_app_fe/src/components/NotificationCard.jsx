import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const getColor = (type) => {
  if (type === "Placement") return "red";
  if (type === "Result") return "orange";
  return "blue";
};

const NotificationCard = ({ notification }) => {
  return (
    <Card style={{ marginBottom: "10px", borderLeft: `5px solid ${getColor(notification.Type)}` }}>
      <CardContent>
        <Typography variant="h6">{notification.Message}</Typography>
        <Typography variant="body2">{notification.Type}</Typography>
        <Typography variant="caption">{notification.Timestamp}</Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
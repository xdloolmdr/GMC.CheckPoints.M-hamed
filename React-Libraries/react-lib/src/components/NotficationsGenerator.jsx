import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import popupEvents from "../notifications/popupEvents";

export default function NotficationsGenerator() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const handelNotifications = ({ type, message }) => {
      const id = Date.now();
      setNotifications((prev) => [...prev, { id, message, type }]);
    };
    const handleDelete=(id)=>{
        setNotifications(prev=>prev.filter(not=> not.id !==id


        ))
    }
    popupEvents.addListener("create", handelNotifications);
    popupEvents.addListener("delete",handleDelete)
    return () => {
        popupEvents.removeListener("create", handelNotifications);
        popupEvents.removeListener("delete",handleDelete)
    };
  }, []);
  return (
    <div className="toast">
      {notifications.map((not) => (
        <Notifications
          key={not.id}
          id={not.id}
          message={not.message}
          type={not.type}
        />
      ))}
    </div>
  );
}

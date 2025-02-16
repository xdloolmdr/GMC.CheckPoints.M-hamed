import { useEffect } from "react";
import popupEvents from "../notifications/popupEvents";
const styles = {
  error: "alert-error",
  success: "alert-success",
  warning: "alert-warning",
  info: "alert-info",
};
export default function Notifications({ id, type, message }) {
  useEffect(() => {
    const t = setTimeout(() => {
      popupEvents.emit("delete", id);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <>
      <div role="alert" className={"alert " + styles[type]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{message}</span>
      </div>
    </>
  );
}

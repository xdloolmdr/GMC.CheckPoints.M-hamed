import popupEvents from "../notifications/popupEvents";
export default function Buttons() {
  return (
    <>
      <div className="Btns">
        <button
          className="btn btn-info "
          onClick={() => {
            popupEvents.emit("create", {
              type: "info",
              message: "there is your infos",
            });
          }}
        >
          INFO
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            popupEvents.emit("create", {
              type: "success",
              message: "that was a great success",
            });
          }}
        >
          Succes
        </button>

        <button
          className="btn btn-error"
          onClick={() => {
            popupEvents.emit("create", {
              type: "error",
              message: "something went wrong",
            });
          }}
        >
          Error
        </button>

        <button
          className="btn btn-warning"
          onClick={() => {
            popupEvents.emit("create", {
              type: "warning",
              message: "be carefull",
            });
          }}
        >
          Warning
        </button>
      </div>
    </>
  );
}

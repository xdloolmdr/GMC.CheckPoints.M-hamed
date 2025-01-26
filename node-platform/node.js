/* var events = require("events");
var eventEmitter = new events.EventEmitter();
function cookStartWork() {
  console.log("cook started working");
  eventEmitter.on("server-asked", (demande) => {
    console.log(`the cook cooked this ${demande}`);
    eventEmitter.emit("give-food", `food:${demande}`);
  });
}
function ServerServe(data) {
  console.log("server started work");
  eventEmitter.on("give-food", (food) => {
    console.log(`give ${food} to client`);
  });
  eventEmitter.emit("server-asked", "pizza");
}

cookStartWork();
ServerServe(); */
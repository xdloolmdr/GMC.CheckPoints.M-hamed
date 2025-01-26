const express = require("express");

const app = express();
const PORT = 4545;

app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

const brands = [
  { image: "/public/images/ford.svg", title: "Ford" },
  { image: "/public/images/Tesla.svg", title: "Tesla" },
  { image: "/public/images/Toyota.svg", title: "Toyota" },
  { image: "/public/images/ford.svg", title: "Ford" },
  { image: "/public/images/Tesla.svg", title: "Tesla" },
  { image: "/public/images/Toyota.svg", title: "Toyota" },
  { image: "/public/images/ford.svg", title: "Ford" },
  { image: "/public/images/Tesla.svg", title: "Tesla" },
  { image: "/public/images/Toyota.svg", title: "Toyota" },
  { image: "/public/images/ford.svg", title: "Ford" },
  { image: "/public/images/Tesla.svg", title: "Tesla" },
  { image: "/public/images/Toyota.svg", title: "Toyota" },
];
const bodyTypes = [
  { image: "/public/images/crossover.svg", title: "Crossover" },
  { image: "/public/images/suv.svg", title: "SUV" },
  { image: "/public/images/wagon.svg", title: "Wagon" },
  { image: "/public/images/crossover.svg", title: "Crossover" },
  { image: "/public/images/suv.svg", title: "SUV" },
  { image: "/public/images/wagon.svg", title: "Wagon" },
  { image: "/public/images/crossover.svg", title: "Crossover" },
  { image: "/public/images/suv.svg", title: "SUV" },
  { image: "/public/images/wagon.svg", title: "Wagon" },
  { image: "/public/images/crossover.svg", title: "Crossover" },
  { image: "/public/images/suv.svg", title: "SUV" },
  { image: "/public/images/wagon.svg", title: "Wagon" },
];
const CarCollection = [
  { image: "/public/images/Rectangle 85.png", title: "Audi A8 L 2022" },
  {
    image: "/public/images/Rectangle 85-1.png",
    title: "Nissan Maxima Platinum 2022",
  },
  {
    image: "/public/images/Rectangle 85-2.png",
    title: "Porsche Cayenne GTS 2022",
  },
  { image: "/public/images/Rectangle 85-3.png", title: "BMW M8 Coupe 2022" },
  { image: "/public/images/Rectangle 85-4.png", title: "BMW X7 M50i 2022" },
  {
    image: "/public/images/Rectangle 85-5.png",
    title: "Porsche Cayenne GTS 2022",
  },
];
app.get("/", (req, res) => {
  res.locals.brands = brands;
  res.locals.bodyTypes = bodyTypes;
  res.locals.CarCollection = CarCollection;
  res.render("home");
});
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

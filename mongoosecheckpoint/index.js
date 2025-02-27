/* import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {});
mongoose.connect(process.ENV.MONGODB_URI,{
    dbName:process.env.MONGODB_NAME, 
    auth:{
        password:process.ENV.,
        username:process.ENV,
    }
}).then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
});
 */
require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

// Create and Save a Record
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["Pizza", "Pasta"],
  });
  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Create Many Records
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find People by Name
const findPeopleByName = (name, done) => {
  Person.find({ name: name }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find One Person by Favorite Food
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find Person by ID
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Perform Classic Update by Find, Edit, Save
const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    person.favoriteFoods.push("hamburger");
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
};

// Perform New Update using findOneAndUpdate
const findAndUpdate = (personName, done) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    (err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
    }
  );
};

// Delete One Person by ID
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.error(err);
    done(null, removedPerson);
  });
};

// Delete Many People by Name
const removeManyPeople = (done) => {
  Person.deleteMany({ name: "Mary" }, (err, result) => {
    if (err) return console.error(err);
    done(null, result);
  });
};

// Chain Query Helpers
const queryChain = (done) => {
  Person.find({ favoriteFoods: "burritos" })
    .sort("name")
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
};

module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain,
};

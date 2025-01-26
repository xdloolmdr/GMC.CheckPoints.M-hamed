// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("gomycode-test-2");
/* db.students.insertMany([
  {
    name: "Mhamed",
    age: 23,
    courses: ["Math", "Physics"],
    status: "active",
    credits: 4000,
  },
  {
    name: "Lyes",
    age: 25,
    courses: ["Chemistry", "Biology"],
    status: "inactive",
    credits: 4000,
  },
  {
    name: "Raid",
    age: 22,
    courses: ["Math", "English"],
    status: "active",
    credits: 4000,
  },
  {
    name: "Farouk",
    age: 20,
    courses: ["History", "Math"],
    status: "active",
    credits: 4000,
  },
  {
    name: "Nabil",
    age: 27,
    courses: ["Physics", "Biology"],
    status: "inactive",
    credits: 4000,
  },
]); */
/* db.books.insertMany([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", price: 10.99, stock: 5 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", price: 12.49, stock: 3 },
  { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", price: 15.99, stock: 7 },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", price: 14.50, stock: 10 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", price: 9.99, stock: 4 }
]);
db.orders.insertMany([
  { 
      orderId: 1, 
      customer: { name: "Mhamed", address: "123 Main St" }, 
      items: [
          { product: "The Great Gatsby", quantity: 1, price: 10.99 },
          { product: "Sapiens", quantity: 2, price: 14.50 }
      ],
      total: 39.99
  },
  { 
      orderId: 2, 
      customer: { name: "Lyes", address: "456 Elm St" }, 
      items: [
          { product: "To Kill a Mockingbird", quantity: 1, price: 12.49 },
          { product: "A Brief History of Time", quantity: 1, price: 15.99 }
      ],
      total: 28.48
  },
  { 
      orderId: 3, 
      customer: { name: "Nabil", address: "789 Maple St" }, 
      items: [
          { product: "The Catcher in the Rye", quantity: 3, price: 9.99 }
      ],
      total: 29.97
  }
]);
db.transactions.insertMany([
  { transactionId: "T1", fromAccount: "Mhamed", toAccount: "Lyes", amount: 100, date: new Date("2025-01-10") },
  { transactionId: "T2", fromAccount: "Raid", toAccount: "Mhamed", amount: 200, date: new Date("2025-01-12") },
  { transactionId: "T3", fromAccount: "Nabil", toAccount: "Farouk", amount: 150, date: new Date("2025-01-15") }
]); */
/* db.students.find({age:{$gt:22}}); */
/* const insertbook = db.books.insertOne({
  title: "1984",
  author: "George Orwell",
  genre: "Dystopian",
  price: 11.99,
  stock: 6,
}); */
/* db.books.find(); */
//console.log(insertbook);
/* db.books.find(); */
/* db.orders.updateOne({ orderId: 1 }, { $set: { total: 40.99 } }); */
/* db.students.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
]); */
/* db.orders.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
]); */
/* db.students.createIndex({ name: 1 }); */
/* db.books.find({ author: "Harper Lee" }); */
/* session = db.getMongo().startSession();
session.startTransaction();
try {
    session.getDatabase("gomycode-test-2").transactions.insertOne({ transactionId: "T1", fromAccount: "Mhamed", toAccount: "Lyes", amount: 50 });
    session.getDatabase("gomycode-test-2").transactions.insertOne({ transactionId: "T2", fromAccount: "Raid", toAccount: "Mhamed", amount: 30 });
    session.commitTransaction();
} catch (e) {
    session.abortTransaction();
} finally {
    session.endSession();
} */
db.transactions.find();

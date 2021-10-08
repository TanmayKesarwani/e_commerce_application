const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const data = [
    { name: "iphone", slug: "i-phone" },
    { name: "android", slug: "_android" },
    { name: "book", slug: "_book" },
    { name: "puma", slug: "_puma" },
    { name: "intel", slug: "_intel" },
    { name: "windows", slug: "_windows" },
    { name: "sleepwell", slug: "_sleepwell" },
    { name: "chocolate", slug: "_chocolate" },
    { name: "milton", slug: "_milton" },
    { name: "Jeans", slug: "_jeans" },
    { name: "earphone", slug: "ear_phone" },
  ];

  //insertion

  db1.collection("tags").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("tags")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log(result2);
    });

  //update
  const updateQuery = { name: "chocolate" };
  const updateValue = {
    $set: { name: "candy", slug: "_candy" },
  };
  db1
    .collection("tags")
    .updateOne(updateQuery, updateValue, function (error, result3) {
      if (error) throw error;
      console.log("update sucessfully: " + result3.matchedCount);
    });

  //delete

  const deleteQuery = { name: "sleepwell" };

  db1.collection("tags").deleteMany(deleteQuery, function (error, result4) {
    if (error) throw error;
    console.log("deleted Sucessfully: " + result4.deletedCount);
    db.close();
  });
});

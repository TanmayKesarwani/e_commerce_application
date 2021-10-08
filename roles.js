const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const data = [
    { name: "admin", slug: "_admin" },
    { name: "user", slug: "_user" },
    { name: "staff", slug: "_staff" },
  ];

  //insertion

  db1.collection("roles").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("roles")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log(result2);
    });

  //delete

  const deleteQuery = { slug: "_staff" };

  db1.collection("roles").deleteMany(deleteQuery, function (error, result3) {
    if (error) throw error;
    console.log("deleted Sucessfully: " + result3.deletedCount);
  });

  //update
  const updateQuery = { slug: "_admin" };
  const updateValue = {
    $set: { name: "staff", slug: "_staff" },
  };
  db1
    .collection("roles")
    .updateMany(updateQuery, updateValue, function (error, result4) {
      if (error) throw error;
      console.log("update sucessfully: " + result4.matchedCount);
      db.close();
    });
});

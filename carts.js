const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const product = ["samsung_mobile", "iphone", "dove"];
  const data = [
    {
      products: product,
      user: "tanmay_kesarwani",
      product_quantity: 2,
      base_price: 20000,
      sell_price: 25000,
      total_price: 50000,
    },
    {
      products: product,
      user: "reetesh",
      product_quantity: 1,
      base_price: 200000,
      sell_price: 250000,
      total_price: 250000,
    },
    {
      products: product,
      user: "rishi_saxena",
      product_quantity: 5,
      base_price: 600,
      sell_price: 900,
      total_price: 4500,
    },
    {
      products: product,
      user: "neelam",
      product_quantity: 2,
      base_price: 1000,
      sell_price: 1500,
      total_price: 3000,
    },
    {
      products: product,
      user: "rupesh",
      product_quantity: 4,
      base_price: 9000,
      sell_price: 10000,
      total_price: 40000,
    },
    {
      products: product,
      user: "vipin",
      product_quantity: 3,
      base_price: 13000,
      sell_price: 16000,
      total_price: 48000,
    },
    {
      products: product,
      user: "vikas",
      product_quantity: 1,
      base_price: 50000,
      sell_price: 50000,
      total_price: 50000,
    },
    {
      products: product,
      user: "rishi",
      product_quantity: 9,
      base_price: 10000,
      sell_price: 20000,
      total_price: 180000,
    },
    {
      products: product,
      user: "tanmay",
      product_quantity: 1,
      base_price: 3000,
      sell_price: 5000,
      total_price: 5000,
    },
    {
      products: product,
      user: "vishal",
      product_quantity: 5,
      base_price: 40000,
      sell_price: 50000,
      total_price: 250000,
    },
  ];

  //insertion

  db1.collection("carts").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("hiii1");
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("carts")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log("hiii2");
      console.log(result2);
    });

  //delete

  const deleteQuery = { user: "tanmay" };

  db1.collection("carts").deleteMany(deleteQuery, function (error, result3) {
    if (error) throw error;
    console.log("hiii3");
    console.log("deleted Sucessfully: " + result3.deletedCount);
  });

  //update
  const updateQuery = { user: "reetesh" };
  const updateValue = {
    $set: {
      product_quantity: 2,
      total_price: 500000,
    },
  };
  db1
    .collection("carts")
    .updateMany(updateQuery, updateValue, function (error, result4) {
      if (error) throw error;
      console.log("hiii4");
      console.log("update sucessfully: " + result4.matchedCount);
      db.close();
    });
});

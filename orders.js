const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const product = ["dell_laptop", "iphones"];

  const data = [
    {
      user_id: "e101",
      total_items: 4,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "online",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "delivered",
    },
    {
      user_id: "e102",
      total_items: 2,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "online",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "not_delivered",
    },
    {
      user_id: "e103",
      total_items: 1,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "cash_on_delivery",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "not_delivered",
    },
    {
      user_id: "e104",
      total_items: 5,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "cash_on_delivery",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "pending",
      payment_status: "pending",
      order_status: "not_delivered",
    },
    {
      user_id: "e105",
      total_items: 3,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "cash_on_delivery",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "delivered",
    },
    {
      user_id: "e106",
      total_items: 10,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "online",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "failed",
      payment_status: "pending",
      order_status: "not_delivered",
    },
    {
      user_id: "e107",
      total_items: 5,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "online",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "delivered",
    },
    {
      user_id: "e108",
      total_items: 2,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "cash_on_delivery",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "pending",
      payment_status: "pending",
      order_status: "not_delivered",
    },
    {
      user_id: "e109",
      total_items: 2,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "online",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "not_delivered",
    },
    {
      user_id: "e110",
      total_items: 3,
      products: product,
      billing_address: "cnjkgbicjindngnbkrl",
      payment_mode: "online",
      shipping_address: "crbgbijnbcijb4iebijf",
      transaction_status: "success",
      payment_status: "success",
      order_status: "delivered",
    },
  ];

  //insertion

  db1.collection("orders").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("hiii1");
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("orders")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log("hiii2");
      console.log(result2);
    });

  //delete

  const deleteQuery = { transaction_status: "failed" };

  db1.collection("orders").deleteMany(deleteQuery, function (error, result3) {
    if (error) throw error;
    console.log("hiii3");
    console.log("deleted Sucessfully: " + result3.deletedCount);
  });

  //update
  const updateQuery = { user_id: "e108" };
  const updateValue = {
    $set: {
      transaction_status: "success",
      payment_status: "success",
      order_status: "delivered",
    },
  };
  db1
    .collection("orders")
    .updateMany(updateQuery, updateValue, function (error, result4) {
      if (error) throw error;
      console.log("hiii4");
      console.log("update sucessfully: " + result4.matchedCount);
      db.close();
    });
});

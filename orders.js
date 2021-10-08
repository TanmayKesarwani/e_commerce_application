const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const category = ["mobiles", "electronics"];
  const tag = ["phone", "samsung", "electronics"];
  const gallery = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7oieKuvbEz3JxD9ie1Ocd55Q9WIg3BFLrw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAU9yxGjlrJrSxEuCNAPpZJySanOJQi1DTg&usqp=CAU",
    "https://store-images.s-microsoft.com/image/apps.44790.13927151219213142.e0e3b865-8832-48b3-bb29-dbde691c4a49.47d8684d-241e-4876-abc0-1c754196066f",
  ];
  const product = [
    {
      name: "samsumg_mobile",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 20000,
      sell_price: 25000,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "iphone",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnbcdnbvnkjfnjknr",
      base_price: 60000,
      sell_price: 75000,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
  ];

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

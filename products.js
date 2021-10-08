const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const gallery = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7oieKuvbEz3JxD9ie1Ocd55Q9WIg3BFLrw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAU9yxGjlrJrSxEuCNAPpZJySanOJQi1DTg&usqp=CAU",
    "https://store-images.s-microsoft.com/image/apps.44790.13927151219213142.e0e3b865-8832-48b3-bb29-dbde691c4a49.47d8684d-241e-4876-abc0-1c754196066f",
  ];
  const category = ["mobiles", "electronics"];
  const tag = ["phone", "samsung", "electronics"];

  const data = [
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
    {
      name: "Dove",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnvdgnvxdcnfnvtnkjfnjknr",
      base_price: 200,
      sell_price: 250,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "kitkat",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnceckjfnjknr",
      base_price: 70,
      sell_price: 90,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "sony_camera",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 100000,
      sell_price: 150000,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "jeans",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 1500,
      sell_price: 2000,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "t_shirt",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 1000,
      sell_price: 1200,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "milton_bottle",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 1200,
      sell_price: 1500,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "sony_tv",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 100000,
      sell_price: 120000,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
    {
      name: "dell_laptop",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wyzowl.com%2Fyoutube-thumbnail-size%2F&psig=AOvVaw3JrDtsnwbFAkVw9JxuJdqk&ust=1633761105139000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjq3ceYuvMCFQAAAAAdAAAAABAE",
      product_gallery: gallery,
      description: "ebcrjhgbhjjwnkjcnkjfnjknr",
      base_price: 65000,
      sell_price: 80000,
      category_name: category,
      tags: tag,
      additional_information:
        "brchbhvrbxjh vj j dvx jhbvhc jh j ckj kjer kjnjhbfs",
    },
  ];

  //insertion

  db1.collection("products").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("products")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log(result2);
    });

  //delete

  const deleteQuery = { name: "jeans" };

  db1.collection("products").deleteMany(deleteQuery, function (error, result3) {
    if (error) throw error;
    console.log("deleted Sucessfully: " + result3.deletedCount);
  });

  //update
  const updateQuery = { name: "sony_camera" };
  const updateValue = {
    $set: {
      name: "sony_lens",
      thumbnail:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.designer.io%2Fen%2Ftutorials%2Fphotos%2Fphoto-manipulation-image-creation%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAJ",
      description: "wbgchbiebimctubgoebcsvbdhjbceitbvcibvhjefbmvcohicbgmbcii",
      base_price: 150000,
      sell_price: 200000,
      category_name: category,
    },
  };
  db1
    .collection("products")
    .updateMany(updateQuery, updateValue, function (error, result4) {
      if (error) throw error;
      console.log("update sucessfully: " + result4.matchedCount);
      db.close();
    });
});

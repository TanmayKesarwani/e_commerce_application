const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const data = [
    {
      name: "mobiles",
      slug: "_mobiles",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: "nbjevbjjrgnljnkndfkjnkjnkrf bjhrbj vr  j vfe kvfe  j",
    },
    {
      name: "laptops",
      slug: "_laptops",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: "joptjpbmpmtmpmjhellohrbj vr  j vfe kvfe  j",
    },
    {
      name: "furniture",
      slug: "_furniture",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: "jnwirhipo;jgoe;ofngiub4tbiejvnnrbj vr  j vfe kvfe  j",
    },
    {
      name: "appliances",
      slug: "_appliances",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: "nerkk vfek vk tk k rk gk vk rk bj vr  j vfe kvfe  j",
    },
    {
      name: "electronics",
      slug: "_electronics",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: "klegiuvwbineinci4btiebvcek j hbvthj vr  j vfe kvfe  j",
    },
    {
      name: "fashion",
      slug: "_fashion",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: " 4vojnjngjrnj m j[oi5ng v; le/erbj vr  j vfe kvfe  j",
    },
    {
      name: "grocery",
      slug: "_grocery",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description:
        "kneo;knontmkmeflkmkemlmlmlfemlkmnkjnfvekjnjnfekjnkjnfenknkjntj vr  j vfe kvfe  j",
    },
    {
      name: "toys",
      slug: "_toys",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description:
        "niifbrgickecrgiuvhiutneionownfjinjnltke l bjgnjrnknnnj vr  j vfe kvfe  j",
    },
    {
      name: "travel",
      slug: "_travel",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description: "nrnokgnktbkvtkovoonkmtk4mtkobknenvonobj vr  j vfe kvfe  j",
    },
    {
      name: "beauty",
      slug: "_beauty",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description:
        "j4nvjnbtijnjhnojvnkdgnknknbnrnnbonbnntonbj vr  j vfe kvfe  j",
    },
    {
      name: "more",
      slug: "_more",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAD",
      description:
        "j4nnnjknbkjdgnbnjnyrbon gnbno5ynb  i5ynbynronbnntonbj vr  j vfe kvfe  j",
    },
  ];

  //insertion

  db1.collection("categories").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("categories")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log(result2);
    });

  //delete

  const deleteQuery = { name: "more" };

  db1
    .collection("categories")
    .deleteMany(deleteQuery, function (error, result3) {
      if (error) throw error;
      console.log("deleted Sucessfully: " + result3.deletedCount);
    });

  //update
  const updateQuery = { name: "laptops" };
  const updateValue = {
    $set: {
      name: "television",
      slug: "_t.v.",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.designer.io%2Fen%2Ftutorials%2Fphotos%2Fphoto-manipulation-image-creation%2F&psig=AOvVaw1-5tNiyrSjZUxd_47OEdzm&ust=1633753441686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIibtv77ufMCFQAAAAAdAAAAABAJ",
      description: "wbgchbiebimctubgoebcsvbdhjbceitbvcibvhjefbmvcohicbgmbcii",
    },
  };
  db1
    .collection("categories")
    .updateMany(updateQuery, updateValue, function (error, result4) {
      if (error) throw error;
      console.log("update sucessfully: " + result4.matchedCount);
      db.close();
    });
});

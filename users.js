const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  console.log("connect sucessfully");
  const db1 = db.db("e_commerce_application");

  const data = [
    {
      firstName: "tanmay",
      lastName: "kesarwani",
      email: "tanmay.k@valuebound.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "admin",
    },
    {
      firstName: "deepika",
      lastName: "kumari",
      email: "deepika.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "shivani",
      lastName: "singh",
      email: "shivani.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "vikas",
      lastName: "yadav",
      email: "vikas.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "rishi",
      lastName: "shukala",
      email: "rishi2.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "vishal",
      lastName: "singh",
      email: "vishal2.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "vipin",
      lastName: "nirala",
      email: "vipin.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "shubham",
      lastName: "singh",
      email: "shubham.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "rishi",
      lastName: "mishra",
      email: "rishi.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
    {
      firstName: "vishal",
      lastName: "rawat",
      email: "vishal.k@gmail.com",
      profile_image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whoa.in%2Fgallery%2Falone-broken-image-mobile-wallpaper-hd-image-2--mobile-wallpaper&psig=AOvVaw13naxY7w0bTrVButHgLEdw&ust=1633718141631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiSsr_4uPMCFQAAAAAdAAAAABAD",
      role: "user",
    },
  ];

  //insertion

  db1.collection("users").insertMany(data, function (error, result1) {
    if (error) throw error;
    console.log("data insert sucessfully: " + result1.insertedCount);
  });

  //read
  db1
    .collection("users")
    .find({})
    .toArray(function (error, result2) {
      if (error) throw error;
      console.log(result2);
    });

  //update
  const updateQuery = { firstName: "shubham" };
  const updateValue = {
    $set: { firstName: "vinod", lastName: "sharma" },
  };
  db1
    .collection("users")
    .updateOne(updateQuery, updateValue, function (error, result3) {
      if (error) throw error;
      console.log("update sucessfully: " + result3.matchedCount);
    });

  //delete

  const deleteQuery = { firstName: "vishal" };

  db1.collection("users").deleteMany(deleteQuery, function (error, result4) {
    if (error) throw error;
    console.log("deleted Sucessfully: " + result4.deletedCount);
    db.close();
  });
});

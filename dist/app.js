"use strict";

var express = require("express");
var mongoose = require("mongoose"); // Import mongoose
var app = express();
var PORT = process.env.PORT || 3000;
var cors = require("cors");
app.use(
  cors({
    origin: "*",
    // Specify the allowed origin(s)
    methods: ["GET", "POST", "PUT", "DELETE"],
    // Specify allowed HTTP methods
    credentials: true, // Allow sending cookies in cross-origin requests (if applicable)
  })
);

// MongoDB connection string
var url = "mongodb://127.0.0.1:27017/mayur"; // Change to your database name

// Connect to MongoDB using Mongoose
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Connected to MongoDB");
  })
  ["catch"](function (err) {
    console.error("Error connecting to MongoDB:", err);
  });
app.use(express.json()); // For parsing JSON
var authRoutes = require("./routes/user.route.js");
var applyRoutes = require("./routes/applications.route.js");
var contactRoutes = require("./routes/contact.route.js");
var announcmentRoutes = require("./routes/announcment.route.js");
var eventRoutes = require("./routes/event.route.js");
var galleryRoutes = require("./routes/gallery.route.js");
app.use("/", authRoutes);
app.use("/", applyRoutes);
app.use("/", contactRoutes);
app.use("/", announcmentRoutes);
app.use("/", eventRoutes);
app.use("/", galleryRoutes);
app.use("/uploads", express["static"]("uploads"));

// Start the server
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});

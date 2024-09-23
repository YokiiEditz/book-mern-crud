import express from "express";
import { MONGO_DB, PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./router/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((error) => {
    console.log("DB Error!!!", error.message);
  });

app.use("/api", booksRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

// function test() {
//   const title = "";
//   const author = "";
//   const year = "";

//   if (title || author || year) {
//     console.log("Truth values");
//   } else {
//     console.log("Falsy");
//   }

//   if (!title || !author || !year) {
//     console.log("Truth values  - !");
//   } else {
//     console.log("Falsy  - !");
//   }

//   if (!(title && author && year)) {
//     console.log("Do something");
//   } else {
//     console.log("nthg");
//   }
// }
// test();

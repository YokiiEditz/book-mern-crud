import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.get("/books", async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.status(200).json({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    console.log("POST Error!!", error.message);
    res.status(500).send({ message: "Error!" + error.message });
  }
});

router.post("/books", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      res.status(400).send({
        message: "Enter details properly!",
      });
    }

    const newData = {
      title,
      author,
      publishYear,
    };

    const bookData = await Book.create(newData);
    res.status(201).send(bookData);
  } catch (error) {
    console.log("POST Error!!", error.message);
    res.status(500).send({ message: "Error!" + error.message });
  }
});

router.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Book.findById(id);
    res.status(200).json(books);
  } catch (error) {
    console.log("POST Error!!", error.message);
    res.status(500).send({ message: "Error!" + error.message });
  }
});

router.put("/books/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { title, author, publishYear } = req.body;
    const updatedBook = {
      title,
      author,
      publishYear,
    };
    const books = await Book.findByIdAndUpdate(id, updatedBook);
    res.status(200).json(books);
  } catch (error) {
    console.log("POST Error!!", error.message);
    res.status(500).send({ message: "Error!" + error.message });
  }
});

router.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Book.deleteOne({ _id: id });

    if (books.deletedCount === 0) {
      res.status(404).json({ message: "Book not found!" });
    }

    res.status(200).send({ message: "Book deleted success!" });
  } catch (error) {
    console.log("Delete Error!!", error.message);
    res.status(500).send({ message: "Error!" + error.message });
  }
});

export default router;

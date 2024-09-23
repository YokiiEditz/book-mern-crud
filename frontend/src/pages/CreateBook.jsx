import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { API_URL } from "../context/BooksContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const navigate = useNavigate();

  const handleSaveBook = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      publishYear,
    };

    await axios
      .post(API_URL + `/api/books`, bookData)
      .then(() => {
        navigate("/");
        // console.log("Data", bookData);
      })
      .catch((error) => {
        console.log("Error! Creating Book", error.message);
      });
  };

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Create Book</h1>

        {loading ? <Spinner /> : ""}

        <div className="mb-5 flex flex-col border-2 border-sky-200 rounded-xl w-[600px] mx-auto p-4">
          <div className="my-4">
            <label>Title</label>
            <input
              type="text"
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col border-2 border-sky-200 rounded-xl w-[600px] mx-auto p-4">
          <div className="my-4">
            <label>Author</label>
            <input
              type="text"
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col border-2 border-sky-200 rounded-xl w-[600px] mx-auto p-4">
          <div className="my-4">
            <label>Publish year</label>
            <input
              type="text"
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>

          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBook;

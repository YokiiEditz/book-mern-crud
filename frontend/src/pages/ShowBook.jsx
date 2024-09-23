import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { API_URL } from "../context/BooksContext";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(API_URL + `/api/books/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setBook(data);
        console.log("response", data);
      })
      .catch((error) => {
        console.log("Error fetch data!", error.message);
        setLoading(!loading);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Show Book Details</h1>

        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id:</span>
              <span>{book._id}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">title:</span>
              <span>{book.title}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">author:</span>
              <span>{book.author}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish year:</span>
              <span>{book.publishYear}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBook;

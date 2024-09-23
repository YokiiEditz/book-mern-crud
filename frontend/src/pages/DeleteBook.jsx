import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";
import { API_URL } from "../context/BooksContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(API_URL + `/api/books/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR! Deleting Book!", error.message);
      });
  };

  return (
    <div>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Book</h1>

        <div className="flex flex-col items-center border-2 border-sky-200 rounded-xl w-[600px] mx-auto p-4">
          <h3 className="text-2xl">
            Are you sure you want to delete this book?
          </h3>

          <button
            className="p-4 bg-red-700 text-white m-5 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;

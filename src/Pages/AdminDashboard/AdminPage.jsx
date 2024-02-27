import React, { useState } from "react";
import AdminForm from "../../Components/AdminForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, editMovie } from "../../Features/Movie/MovieSlice";

const AdminPage = () => {
  const movies = useSelector((state) => state.movie.Movies);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Dispatch the deleteMovie action with the movie id
    dispatch(deleteMovie(id));
  };

  const handleEdit = (movie) => {
    // Dispatch the editMovie action with the selected movie data
    dispatch(editMovie(movie));
  };
  return (
    <div className="w-screen h-screen bg-yellow-300 flex flex-col md:flex-row">
      {/* admin form */}
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <AdminForm />
      </div>

      <div className="w-full md:w-[50%] h-full flex flex-col gap-4 bg-violet-500 md:px-10 p-2">
        <p className="font-bold text-xl flex justify-center pt-10">
          Movie List
        </p>
        {movies.map((item) => (
          <div
            key={item.id}
            className="p-2 bg-black text-white flex items-center justify-between rounded-md"
          >
            <img src={item.image} alt="" className="w-20 rounded-md"></img>
            <span>
              <p className="font-semibold">{item.title}</p>
              <p className="font-light">{item.cast}</p>
            </span>
            <div className="flex gap-4 sm:hidden">
              <RiDeleteBin6Line />
              <FaEdit />
            </div>
            <div className="flex-row gap-4 text-black hidden sm:flex">
              <button
                className="bg-white rounded-md px-3 py-1"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-white rounded-md px-3 py-1"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

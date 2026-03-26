import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="md:w-2/4 px-2">
      <div className="bg-white my-2 shadow-md rounded-xl">
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-2">{note.title}</h5>
          <p className="text-gray-600 mb-3">{note.description}</p>

          <div className="flex">
            <FaTrash
              className="fa-solid fa-trash mx-2 cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => {
                deleteNote(note._id);
                toast.success("Deleted Successfully");
              }}
            />

            <FaEdit
              className="fa-solid fa-pen-to-square mx-2 cursor-pointer text-blue-500 hover:text-blue-700"
              onClick={() => {
                updateNote(note);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

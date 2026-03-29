import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="w-full md:w-3/3 p-2">
      <div className="bg-[#1a1a2e] border border-[#2d2d4e] rounded-xl p-4 relative hover:border-purple-500 transition">
        {/* Tag */}
        {note.tag && (
          <span className="inline-block text-xs bg-[#2d2d4e] text-purple-400 px-3 py-1 rounded-full mb-2">
            {note.tag}
          </span>
        )}

        {/* Title */}
        <h5 className="text-white text-sm font-semibold mb-1">{note.title}</h5>

        {/* Description */}
        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
          {note.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          {/* Edit */}
          <button
            onClick={() => updateNote(note)}
            className="flex-1 flex items-center justify-center gap-1 text-xs text-gray-400 border border-[#2d2d4e] rounded-lg py-1.5 hover:bg-[#2d2d4e] hover:text-white transition"
          >
            <FaEdit />
            Edit
          </button>

          {/* Delete */}
          <button
            onClick={() =>deleteNote(note._id)}
            className="flex-1 flex items-center justify-center gap-1 text-xs text-red-400 border border-[#2d1a1a] rounded-lg py-1.5 hover:bg-[#2d1a1a] transition"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

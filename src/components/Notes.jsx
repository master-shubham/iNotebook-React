import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Notes = () => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();

  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getNotes();
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const [note, setNotes] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    setShowModal(true);

    setNotes({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setShowModal(false);
    toast.success("Updated Successfully");
  };

  const onchange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          
          <div className="bg-[#1a1a2e] border border-[#2d2d4e] rounded-2xl w-full max-w-lg">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#2d2d4e] px-5 py-3">
              <h5 className="text-white font-semibold">Edit Note</h5>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              
              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">
                  Title
                </label>
                <input
                  type="text"
                  name="etitle"
                  value={note.etitle}
                  onChange={onchange}
                  minLength={5}
                  required
                  className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">
                  Description
                </label>
                <textarea
                  name="edescription"
                  value={note.edescription}
                  onChange={onchange}
                  minLength={5}
                  required
                  className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500 h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">
                  Tag
                </label>
                <input
                  type="text"
                  name="etag"
                  value={note.etag}
                  onChange={onchange}
                  className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
                />
              </div>

            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 border-t border-[#2d2d4e] px-5 py-3">
              
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm bg-[#2d2d4e] text-gray-300 rounded-lg hover:bg-[#3a3a5a]"
              >
                Close
              </button>

              <button
                disabled={note.etitle.length < 5 || note.edescription.length < 5}
                onClick={handleClick}
                className="px-4 py-2 text-sm text-white rounded-lg bg-linear-to-br from-purple-600 to-purple-500 disabled:opacity-50"
              >
                Update Note
              </button>

            </div>
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Your Notes</h2>

        <span className="text-xs bg-[#2d2d4e] text-purple-400 px-3 py-1 rounded-full">
          {notes.length} notes
        </span>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {notes.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-3">📭</div>
          <p className="text-gray-500 text-sm">No notes to display</p>
        </div>
      )}

      {/* ================= NOTES GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              updateNote={updateNote}
              note={note}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
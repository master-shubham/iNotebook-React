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

  // ✅ ADD THIS STATE
  const [showModal, setShowModal] = useState(false);

  const [note, setNotes] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click(); // keep your code (not used but fine)

    // ✅ ADD THIS
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

    // ✅ CLOSE MODAL
    setShowModal(false);

    refClose.current.click();
   toast.success("Updated Successfully");
  };

  const onchange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hidden Button */}
      <button ref={ref} type="button" className="hidden">
        open
      </button>

      {/* ✅ ONLY CHANGE: conditional rendering */}
      {showModal && (
        <div
          id="exampleModal"
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-4 py-3">
              <h5 className="text-lg font-semibold">Edit Note</h5>
              <button
                ref={refClose}
                onClick={() => setShowModal(false)} // ✅ close
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onchange}
                    minLength={5}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onchange}
                    minLength={5}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Tag</label>
                  <input
                    type="text"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onchange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 border-t px-4 py-3">
              <button
                ref={refClose}
                onClick={() => setShowModal(false)} // ✅ close
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
              </button>

              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes List */}
      <div className="max-w-4xl  mx-auto my-6 px-1">
        <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>

        <div className="mb-4 text-gray-500">
          {notes.length === 0 && "No notes to display"}
        </div>

        <div className="flex flex-wrap">
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;

import { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import { toast } from "react-toastify";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);

    setNote({ title: "", description: "", tag: "" });

    toast.success("Note Added Successfully");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 ">
      {/* Card */}
      <div className="bg-[#1a1a2e] border border-[#2d2d4e] rounded-2xl p-6">
        {/* Heading */}
        <h2 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-sm">
            +
          </span>
          Add a Note
        </h2>

        <form className="space-y-4">
          {/* Title + Tag Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wide">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={onChange}
                minLength={5}
                required
                placeholder="Note title..."
                className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
              />
            </div>

            {/* Tag */}
            <div>
              <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wide">
                Tag
              </label>
              <input
                type="text"
                name="tag"
                value={note.tag}
                onChange={onChange}
                placeholder="e.g. Work, Personal..."
                className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wide">
              Description
            </label>
            <textarea
              name="description"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
              placeholder="Write your note here..."
              className="w-full bg-[#0f0f13] border border-[#2d2d4e] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-purple-500 h-24 resize-none"
            />
          </div>

          {/* Button */}
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            onClick={handleClick}
            className="mt-2 bg-linear-to-br from-purple-600 to-purple-500 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 disabled:opacity-50"
          >
            + Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

import Header from "../Components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditNote() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handaleUpdate = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((notes) =>
      notes.id === Number(id)
        ? {
            ...notes,
            subject,
            title,
            content,
          }
        : notes,
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    alert("Note Update Successfully!");
    navigate(`/note/${id}`);
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = notes.find((item) => item.id === Number(id));
    if (note) {
      setSubject(note.subject);
      setTitle(note.title);
      setContent(note.content);
    }
  }, [id]);
  return (
    <div className="min-h-screen mb-10">
      <div className="w-350 h-200 ml-50 bg-white rounded-2xl shadow-lg mt-20">
        <h2 className="text-4xl text-black pt-10 font-bold flex items-center justify-center">
          📝Edit Notes
        </h2>
        <p className="text-2xl text-gray-700 flex items-center justify-center mt-5">
          Update your notes and save this changes.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="w-30 cursor-pointer h-10 mb-100 bg-amber-400 rounded-xl text-black text-2xl font-bold transition-duration-200 hover:scale-95 absolute right-5 top-4 mt-60 mr-50"
        >
          ⬅️Back
        </button>
        <div className="mb-6">
          <label className="text-3xl block mb-2 text-gray-700 font-bold ml-10">
            Subject
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="text-2xl text-gray-600 border-2 outline-none cursor-pointer w-200 ml-10 mt-5 focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <option vlaue="">Select subject</option>
            <option vlaue="javascript">JavaScript</option>
            <option vlaue="html">Html</option>
            <option vlaue="react">React</option>
            <option vlaue="css">Css</option>
            <option vlaue="python">Python</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-3xl text-gray-600 font-bold ml-10">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl
             text-gray-600 border-2 outline-none  focus:ring-2 focus:ring-blue-500 ml-10 rounded-lg mt-5 w-200"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-6">
          <label className="block font-bold text-3xl text-gray-700 ml-10">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="
          w-200 h-40 text-2xl text-gray-600 mt-5 ml-10 focus:ring-2 focus:ring-blue-400 border-2 outline-none"
            placeholder="Write your notes hear"
            rows="7"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-2 ml-10 text-3xl font-bold text-gray-700 mt-5">
            Date
          </label>
          <input
            className="w-200 h-10 ml-10 mt-5 rounded-lg text-2xl text-gray-600 border-2 outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            type="date"
          />
        </div>
        <div className="mb-6 flex gap-3">
          <button
            onClick={handaleUpdate}
            className="w-50 cursor-pointer ml-260  h-10 text-2xl text-black bg-blue-600 rounded-lg font-bold transition-duration-200 hover:scale-95"
          >
            🛄Save Changes
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-35 h-10 text-2xl font-bold text-black mr-5 mb-5 bg-red-600 rounded-lg cursor-pointer transition-duration-200 hover:scale-95"
          >
            ❌Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

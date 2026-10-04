import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function AddNotes() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handaleSave = () => {
    if (!subject || !title || !content || !date) {
      alert("Please Fill All Fields");
      return;
    }
    const newNote = {
      id: Date.now(),
      subject,
      title,
      content,
      date,
    };
    const oldNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const newNotes = [...oldNotes, newNote];

    localStorage.setItem("notes", JSON.stringify(newNotes));
    alert("Note Save Successfully!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3x mx-auto bg-white p-8 rounded-2xl shadow-lg h-200">
        <h2 className="text-4xl text-black font-bold flex items-center justify-center">
          📜Add New Notes
        </h2>
        <p className="text-2xl text-gray-600 flex items-center justify-center mt-5">
          Create a new notes and save .
        </p>
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700 text-3xl">
            Subject
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-200 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select Subject</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-3xl mb-2 font-semibold text-gray-700 ">
            Note Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-200   h-12 border-2 outline-none text-2xl text-black border-gray-300"
            type="text"
            placeholder="Enter note title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-3xl mb-2 font-semibold text-gray-700">
            Note Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-250 text-2xl h-25 border border-gray-300 rounded-lg p-3 outline-none resize-none"
            rows="7"
            placeholder="Write your note hear"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-3xl font-semibold text-gray-700 mb-2">
            Date
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-100 text-2xl  h-12 border border-gray-300"
            type="date"
          />
        </div>
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl font-bold text-white bg-red-500 w-35 mt-10 h-15 rounded-lg hover:scale-95 cursor-pointer"
          >
            ✖️Cancel
          </button>
          <button
            onClick={handaleSave}
            className="text-2xl ml-310 mt-10 font-bold text-white bg-blue-600 rounded-lg w-44 cursor-pointer hover:scale-95 h-15"
          >
            🗒️Save Note
          </button>
        </div>
      </div>
    </div>
  );
}

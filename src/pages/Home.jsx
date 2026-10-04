import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <>
      <div className="min-h-screen p-10">
        <h1 className="text-5xl text-black font-bold animate-bounce">
          Welcome To Student Notes 📚
        </h1>
        <p className="text-2xl text-black mt-5 pl-5">
          This Notes Is Orgnineze For Your Learning And Save Notes.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div
            className="bg-white  p-6 rounded-xl shadow-lg transition-duration-300
  hover:scale-105
  hover:shadow-2xl cursor-pointer"
          >
            <h2 className="text-3xl font-bold">Total Notes📘</h2>
            <p className="text-2xl font-bold mt-5">{notes.length}</p>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-xl transition duration-300
  hover:scale-105
  hover:shadow-2xl cursor-pointer"
          >
            <h2 className="text-3xl text-black font-bold">Recent Notes📘</h2>
            <p className="text-2xl font-bold mt-5">{notes.length}</p>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg p-6 transition duration-300
  hover:scale-105
  hover:shadow-2x cursor-pointer"
          >
            <h2 className="text-3xl text-black font-bold">Subject📘</h2>
            <p className="text-2xl font-bold mt-5">
              {new Set(notes.map((note) => note.subject)).size}
            </p>
          </div>
        </div>
        <h2 className="text-4xl text-black font-bold flex items-center justify-center mt-10">
          📚Study Quote Section
        </h2>
        <h1 className="text-3xl text-gray-600 flex items-center justify-center mt-5 font-light">
          "Learn Today, Remember Tommorow."
        </h1>
        <p className="text-2xl text-blue-600 mt-10 flex items-center justify-center">
          Save your important notes in one place, organize your learning, and
          improve a little every day. 🚀
        </p>

        <button
          onClick={() => navigate("/add-note")}
          className="w-100 mt-10 cursor-pointer transition-duration-300 hover:scale-95 h-20 bg-green-700 text-4xl font-bold rounded-xl flex items-center justify-center ml-170"
        >
          Start Writing Notes
        </button>
      </div>
    </>
  );
}
export default Home;

import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function RecentNotes() {
  const navigate = useNavigate();
  const [recentNotes, setRecentNotes] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const latestNotes = [...savedNotes].sort((a, b) => a.id - b.id).slice(0, 5);
    setRecentNotes(latestNotes);
  }, []);
  return (
    <div className="min-h-screen p-10">
      <h2 className="text-4xl text-black font-bold flex items-center justify-center">
        📙 Your Recent Notes
      </h2>
      <p className="text-2xl text-black mt-5 flex items-center justify-center">
        Your Recent Notes Hear You Can Watch ⬇️
      </p>

      <input
        className="text-2xl text-gray-600 bg-white absolute right-5 top-4 mt-35 border-3 rounded-lg outline-none"
        type="text"
        placeholder="🔍Search notes...."
      />
      {recentNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-40">
          <p className="text-3xl text-gray-800 font-bold flex items-center justify-center">
            No Added Card Yet 📚
          </p>
          <p className="text-xl mt-5 text-gray-600 flex items-center justify-center">
            Card Add First Then You can Watch Card
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {recentNotes.map((note) => (
            <div
              className="bg-white p-6 rounded-2xl shadow cursor-pointer transition-duration-300 hover:scale-105 hover:2xl:"
              key={note.id}
            >
              <h2 className="text-3xl font-bold"> {note.title}</h2>
              <p className="text-gray-600 mt-5 text-2xl">{note.subject}</p>
              <p className="text-2xl text-gray-600 mt-5"> {note.date}</p>
              <button
                onClick={() => navigate(`/note/${note.id}`)}
                className="w-25 h-10 rounded-xl text-2xl hover:scale-95 text-white  cursor-pointer   bg-amber-400 float-right"
              >
                👁️View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default RecentNotes;

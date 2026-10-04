import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TotalNotes() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const handaleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are You Sure you want to delete this note ?",
    );
    if (!confirmDelete) {
      return;
    }
    const oldNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = oldNotes.filter((notes) => notes.id !== id);
    localStorage.setItem("notes", JSON.stringify(newNote));
    setNotes(newNote);
    alert("Note Deleted Successfully!");
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);
  return (
    <div className="min-h-screen p-10">
      <button
        onClick={() => navigate("/add-note")}
        className="item-center justify-between bg-amber-400 text-black w-60 pl-5 cursor-pointer font-bold hover:scale-95 h-10 text-2xl
         rounded-2xl absolute top-4 right-5 mt-35"
      >
        + Add New Notes
      </button>

      <h2 className="text-4xl text-black font-bold flex items-center justify-center">
        Total Notes 👇
      </h2>

      <p className="text-2xl text-black flex items-center justify-center mt-5">
        All Your Study Notes In One Place📘
      </p>
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-40">
          <p className="text-3xl font-bold text-gray-800">
            No Notes Added Yet 📚
          </p>
          <p className="text-xl text-gray-700 mt-3">
            Start Adding Your Study Notes
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 mt-10 ">
          {notes.map((note) => (
            <div
              className="bg-white p-6 w-110 h-100 rounded-2xl shadow-lg transition-duration- hover:scale-105 hover:shadow-2xl cursor-pointer"
              key={note.id}
            >
              <p className="text-3xl bg-amber-300 rounded-4xl  text-black font-bold">
                {note.subject}
              </p>
              <h2 className="text-3xl text-black font-bold mt-8">
                {note.title}
              </h2>

              <p className="text-gray-500 text-2xl mt-3">{note.content}</p>
              <h2 className="text-2xl text-black mt-3">{note.date}</h2>

              <button
                onClick={() => navigate(`/note/${note.id}`)}
                className="text-2xl text-black cursor-pointer mt-15 gap-4 mb-8"
              >
                👓View
              </button>
              <button
                onClick={() => navigate(`/edit-note/${note.id}`)}
                className="text-2xl text-black cursor-pointer"
              >
                ✏️Edit
              </button>
              <button
                onClick={() => handaleDelete(note.id)}
                className="text-2xl text-black cursor-pointer"
              >
                ❌Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default TotalNotes;

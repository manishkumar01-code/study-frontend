import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function NoteDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const handaleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note ?",
    );
    if (!confirmDelete) {
      return;
    }
    const oldNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNotes = oldNotes.filter((item) => item.id !== Number(id));
    localStorage.setItem("notes", JSON.stringify(newNotes));
    alert("Note Delete Successfully!");
    navigate("/total-note");
  };

  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const note = notes.find((item) => item.id === Number(id));

  if (!note) {
    return (
      <h1 className="text-4xl text-gray-800 font-bold flex items-center justify-center animate-bounce">
        Note not found
      </h1>
    );
  }

  return (
    <div className="min-h-screen mt-10 cursor-pointer">
      <h2 className="text-4xl text-black font-bold flex items-center justify-center">
        All Details
      </h2>
      <p className="text-2xl text-gray-800 flex items-center justify-center mt-5">
        You Can Watch All Details
      </p>
      <button
        onClick={() => navigate(-1)}
        className="w-75 absolute right-5 top-4 mt-35 cursor-pointer hover:scale-95 rounded-2xl text-2xl h-10 bg-amber-400 text-black font-bold"
      >
        ⬅️ Back To Recent Notes
      </button>

      <div
        className="grid grid-cols-1 mt-5 bg-white rounded-2xl w-300   h-120
        outline-none ml-78 shadow-lg cursor-pointer hover:scale-95"
      >
        <h2 className="text-3xl font-bold text-black ml-5 mb-10">
          {note.title}
        </h2>
        <p className="text-2xl ml-5 text-black font-bold mb-55">
          {note.subject}
        </p>
        <p className="text-2xl text-black font-bold">{note.content}</p>
        <p className="text-2xl font-bold">{note.date}</p>
        <button
          onClick={() => navigate(`/edit-note/${note.id}`)}
          className="w-25 h-10 bg-blue-600 rounded-xl ml-200 cursor-pointer hover:scale-95 font-bold text-2xl float-right"
        >
          ✏️Edit
        </button>
        <button
          onClick={handaleDelete}
          className="w-29 hover:scale-95 h-10 text-2xl font-bold bg-pink-600
         rounded-xl cursor-pointer ml-255  float-right"
        >
          ❌Delete
        </button>
      </div>
    </div>
  );
}

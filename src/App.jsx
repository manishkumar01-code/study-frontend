import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TotalNotes from "./pages/TotalNotes";
import RecentNotes from "./pages/RecentNotes";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoteDetails from "./pages/NoteDetails";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/edit-note/:id" element={<EditNote />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/note/:id" element={<NoteDetails />} />

          <Route path="/" element={<Home />} />
          <Route path="/total-notes" element={<TotalNotes />} />

          <Route path="/recent-notes" element={<RecentNotes />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

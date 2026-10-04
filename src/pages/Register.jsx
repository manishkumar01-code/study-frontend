import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { ErrorMessage } from "../Components/Loader";

export default function Register() {
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPasseord] = useState("");

  const handaleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password, confirmpassword);
      alert("Registration Successfully! Please Login");
      navigate("/login", { replace: true });
    } catch (error) {
      alert(error.message);
      console.log("Registration error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className=" relative w-150 h-160 bg-amber-950 p-12 rounded-2xl mb-40">
        <button
          type="button"
          onClick={() => navigate("-1")}
          className="absolute top-4 right-5 text-2xl text-white font-bold cursor-pointer hover:text-red-600"
        >
          ❌
        </button>
        <h1 className="text-4xl font-bold text-white mb-4 pl-23">
          CREATE ACCOUNT
        </h1>
        <form onSubmit={handaleSubmit}>
          <div className="mb-4">
            <label className="block text-2xl text-white font-bold">
              Name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-2xl font-bold text-white w-full border-white border-2 rounded px-3 py-2 outline-none"
                type="text"
                placeholder="Enter Name"
              />
            </label>
          </div>
          <div className="mb4">
            <label className="block text-2xl font-bold text-white">
              Email
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-2xl text-white font-bold w-full border-e-white border-2 rounded px-3 py-2 outline-none"
                type="Email"
                placeholder="Enter Email"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-2xl text-white font-bold">
              Password
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-2xl w-full text-white font-bold border-white border-2 rounded px-3 py-2 outline-none"
                type="password"
                placeholder="Enter Password"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-2xl text-white font-bold">
              Confirm Password
              <input
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPasseord(e.target.value)}
                className="text-2xl w-full text-white font-bold border-white border-2 rounded px-3 py-2 outline-none"
                type="password"
                placeholder="Enter RePassword"
              />
            </label>
            <ErrorMessage message={error} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-15 bg-amber-400 text-3xl text-white font-bold cursor-pointer rounded-2xl hover:scale-95"
          >
            {loading ? "Creating account..." : "Click And Register"}
          </button>
          <p className="text-2xl text-white font-bold flex items-center justify-center pt-5">
            Already have an account ?{" "}
            <a className="hover:text-green-600" href="/login">
              SigIn
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

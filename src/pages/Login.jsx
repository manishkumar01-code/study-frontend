import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ErrorMessage } from "../Components/Loader";
export default function () {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handaleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      alert("Login Successfully!");
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
      console.log("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-12 bg-white">
      <div className="relative w-140 h-140 bg-amber-950 rounded-2xl mb-40 p-12">
        <button
          className="absolute top-4 right-5 text-2xl text-white font-bold cursor-pointer hover:text-red-600"
          type="button"
          onClick={() => navigate("-1")}
        >
          ❌
        </button>
        <h1 className="text-4xl text-white font-bold pl-45">LOGIN</h1>

        <form onSubmit={handaleSubmit}>
          <div className="mb-4">
            <label className="block mt-1 text-2xl text-white font-bold">
              Email
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-2xl mt-5 text-white font-bold w-full border-white border-2 rounded px-3 py-2 outline-none"
                type="Email"
                placeholder="Enter Email"
              />
            </label>

            <div className="mb-4">
              <label className="block mt-2 text-2xl text-white font-bold">
                Password
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-2xl mt-5 text-white font-bold w-full border-white border-2 px-3 py-2 rounded outline-none"
                  type="password"
                  placeholder="Enter password"
                />
              </label>
              <ErrorMessage message={error} />
              <div className="flex items-center justify-between text scroll-m">
                <label className="flex mt-5 items-center gap-2 text-2xl text-white">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a
                  className="
                text-2xl text-white mt-5 hover:text-green-500"
                  href="#"
                >
                  Forgot Password ?
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="text-3xl mt-5 cursor-pointer hover:scale-95 text-white font-bold w-full h-15 bg-amber-400 rounded-2xl"
              >
                {loading ? "Created account..." : "Click And Login"}
              </button>
              <div className="flex items-center justify-center gap-3 text-2xl text-white">
                <span className="text-2xl flex mt-5 items-center justify-center gap-2 text-white">
                  If You Not Registerd ?
                </span>

                <a
                  className="text-2xl text-white mt-5 hover:text-green-600"
                  href="/register"
                >
                  SinUP
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

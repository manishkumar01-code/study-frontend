import { createContext, useContext, useState } from "react";
import { registerApi, loginAPi } from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const Saved = localStorage.getItem("user");
    return Saved ? JSON.parse(Saved) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const register = async (name, email, password, confirmpassword) => {
    setLoading(true);
    setError("");

    try {
      const data = await registerApi(name, email, password, confirmpassword);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      return data.user;
    } catch (err) {
      const message = err.response?.data?.message || "Registration Faield";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };
  const login = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const data = await loginAPi(email, password);
      localStorage.setItem("token", data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      return data.user;
    } catch (err) {
      const message =
        err.response?.data?.message || "Login faield. check your credentials.";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };
  const value = {
    user,
    useAuthenticated: !!user,
    loading,
    register,
    login,
    error,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider/>");
  return ctx;
}

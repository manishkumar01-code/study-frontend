import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="h-32 w-full bg-amber-500 flex items-center justify-between">
      <h1 className="text-6xl font-bold text-black mt-4 pl-4 pb-10">
        STUDY NOTES APP
      </h1>
      <header>
        <>
          <nav className="flex gap-6 text-4xl font-bold pr-8">
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer hover:scale-95 ${isActive ? "underline underline-offset-8 font-bold" : ""}`
              }
              to={"/"}
            >
              🏛️Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer hover:scale-95 ${isActive ? "underline underline-offset-8 font-bold" : ""}`
              }
              to={"/total-notes"}
            >
              📜Total Notes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer hover:scale-95 ${isActive ? "underline underline-offset-8 font-bold" : ""}`
              }
              to={"/recent-notes"}
            >
              ⏱️Recent Notes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer hover:scale-95 ${isActive ? "underline underline-offset-8 font-bold" : ""}`
              }
              to={"/Register"}
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer hover:scale-95 ${isActive ? "underline underline-offset-8 font-bold" : ""}`
              }
              to={"/Login"}
            >
              Login
            </NavLink>
          </nav>
        </>
      </header>
    </div>
  );
}
export default Header;

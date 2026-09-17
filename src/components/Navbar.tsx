import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <NavLink to="/" className="text-xl font-bold">
        Achsah Jojo
      </NavLink>

      <div className="flex gap-5">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/conferences">Conferences</NavLink>
        <NavLink to="/writing">Blog</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

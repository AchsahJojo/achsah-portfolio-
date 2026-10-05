import { NavLink } from "react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/conferences", label: "Conferences" },
  { to: "/writing", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="site-nav">
      <NavLink to="/" className="site-logo" end>
        Achsah Jojo
      </NavLink>

      <div className="site-nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

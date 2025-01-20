import { NavLink } from "react-router-dom";
import brushStroke from "../assets/brush-stroke.png";
import MenuIcon from "../assets/menu-icon.png";
import menuBackground from "../assets/nav-container.webp";
export default function Navbar({ setMenu }) {
  return (
    <nav className="flex justify-between gap-5 items-center px-5 py-2 font-bold text-gray-600 w-full">
      <div className="flex gap-2">
        {/* <img
          src="https://i0.wp.com/www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-2.png?resize=450%2C450&ssl=1"
          alt="logo"
          className="w-[50px]"
        /> */}
        <div className="flex flex-col">
          <h1 className="text-black text-xl drop-shadow-lg  ">
            Ben John Villabesa
          </h1>
          <h1 className="text-black/70 text-xs">Full-Stack Web Developer.</h1>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        {/* <img src={brushStroke} alt="" /> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-5 py-4 text-white drop-shadow-sm hover:text-white"
              : "px-5 py-4  drop-shadow-sm hover:text-white"
          }
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundImage: `url(${brushStroke})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "px-5 py-4 text-white drop-shadow-sm hover:text-white"
              : "px-5 py-4  drop-shadow-sm hover:text-white"
          }
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundImage: `url(${brushStroke})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? "px-5 py-4 text-white drop-shadow-sm hover:text-white"
              : "px-5 py-4  drop-shadow-sm hover:text-white"
          }
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundImage: `url(${brushStroke})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          Contacts
        </NavLink>
        {/* <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "px-5 py-4 text-white drop-shadow-sm hover:text-white"
              : "px-5 py-4  drop-shadow-sm hover:text-white"
          }
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundImage: `url(${brushStroke})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          Projects
        </NavLink> */}
      </div>
      <div className="lg:hidden">
        <img
          src={MenuIcon}
          alt="menuBtn"
          className="w-[50px] hover:drop-shadow-lg cursor-pointer"
          onClick={() => setMenu(true)}
        />
      </div>
    </nav>
  );
}

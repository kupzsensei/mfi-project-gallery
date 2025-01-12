import paperTexture from "./assets/paper-texture.avif";
import Navbar from "./components/navbar";
import gottfrid from "./assets/gottfrid.PNG";
import ProjectCard from "./components/project-card";
import brushStroke from "./assets/brush-stroke.png";
import oldParchment from "./assets/old-parchment.webp";
import signage from "./assets/signage.png";
import menuBackground from "./assets/nav-container.webp";
import { useState } from "react";
import "animate.css";

const projects = [
  {
    title: "Inventory System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://images.ctfassets.net/hfb264dqso7g/7BIuhKgTlUYlNRQrWwd9FE/d3bd1aa1d0a9dadd21a4601035a2e123/multichannel-orders-screenshot.jpg",
  },
  {
    title: "Point of Sale System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWiipyUrSmD-gj_6Qh8oO32GTABB698j-XA&s",
  },
  {
    title: "Student Management System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://codezips.com/wp-content/uploads/2020/08/stud_man.png",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <main
      className="w-screen h-screen flex justify-center overflow-auto "
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 min-h-0 min-w-0 flex flex-col  gap-5 max-w-[1280px]">
        <Navbar setMenu={setMenu} />

        <section className="flex flex-col gap-5 items-center my-10">
          <img
            src={gottfrid}
            alt="logo"
            className="lg:h-[350px] h-[200px] drop-shadow-md animate__pulse animate__animated "
          />
          <h1 className="font-bold text-2xl text-yellow-500/80 drop-shadow-md">
            Beyond Skills .... a Better Life..
          </h1>
        </section>
        <div className="flex justify-between gap-5 items-center pl-5">
          <div
            style={{
              backgroundImage: `url(${signage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="h-[120px] w-[150px] flex justify-center items-center  flex-col"
          >
            <h1 className="font-bold drop-shadow-lg text-black -translate-y-3">
              Featured{" "}
            </h1>
            <h1 className="font-bold drop-shadow-lg text-black -translate-y-3">
              Projects{" "}
            </h1>
          </div>
          <h1
            className="font-bold hover:underline cursor-pointer py-6 px-5 hover:text-blue-700 drop-shadow-sm"
            style={{
              backgroundImage: `url(${brushStroke})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            See more
          </h1>
        </div>
        <section className="flex gap-8 justify-between flex-col lg:flex-row items-center ">
          {projects?.map((project) => (
            <ProjectCard data={project} />
          ))}
        </section>

        <section className="flex justify-center my-10 pb-10">
          <div
            className="w-full max-w-[400px] h-[150px] flex justify-center items-center text-2xl font-bold italic drop-shadow-sm"
            style={{
              backgroundImage: `url(${oldParchment})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            Enroll Now
          </div>
        </section>
      </div>
      {menu && (
        <div className="absolute w-screen h-screen left-0 top-0 bg-black/50 flex justify-center items-center">
          <div
            className="flex flex-col w-[300px] h-[400px]  justify-center items-center font-bold text-2xl gap-5 drop-shadow-lg"
            style={{
              backgroundImage: `url(${menuBackground})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-black/70 hover:line-through cursor-pointer">
              Home
            </h1>
            <h1 className="text-black/70 hover:line-through cursor-pointer">
              About
            </h1>
            <h1 className="text-black/70 hover:line-through cursor-pointer">
              Contacts
            </h1>
            <h1 className="text-black/70 hover:line-through cursor-pointer">
              Projects
            </h1>
            <h1
              className="text-red-900/70 hover:line-through cursor-pointer"
              onClick={() => setMenu(false)}
            >
              Cancel
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;

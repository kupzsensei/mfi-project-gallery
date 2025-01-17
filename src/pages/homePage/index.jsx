import brushStroke from "../../assets/brush-stroke.png";
import oldParchment from "../../assets/old-parchment.webp";
import signage from "../../assets/signage.png";
import menuBackground from "../../assets/nav-container.webp";
import ProjectCard from "../../components/project-card";
import { useState } from "react";

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

export default function Homepage() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <section className="flex flex-col lg:flex-row max-w-[1280px] gap-5 items-center my-10">
        <div className="flex flex-col gap-5 items-center flex-1">
          <img
            src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t1.6435-9/50826211_755702281457329_5394102474187472896_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeG-d-qXYHkMNE0Ny48mVZlNbw2UcpUONvhvDZRylQ42-PpW39jPaswD3iCVgHIx1b-AsEYGoGQ92oosuQhakmEa&_nc_ohc=Xmso0aER1LcQ7kNvgHGvqm4&_nc_zt=23&_nc_ht=scontent.fmnl31-1.fna&_nc_gid=AnG8qzdr41l3egEmzqGjQUc&oh=00_AYBjySoo7zUytHdR-aWYXVR_F7rwTFPmbJqg5jCEr8J97A&oe=67B15EC6"
            alt="logo"
            style={{ borderImage: `url(${oldParchment}) 45% stretch` }}
            className="lg:h-[350px] h-[200px] drop-shadow-md animate__pulse animate__animated border-8 border-gray-600 shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5 items-center flex-1 justify-center">
          <p className="max-w-[450px] text-center text-xl">
            "Passionate Full-Stack Web Developer creating dynamic, user-friendly
            web applications. With expertise in modern frontend and backend
            systems, I craft seamless digital experiences that merge creativity
            with functionality. Let’s build something amazing together!"
          </p>
        </div>
      </section>
      <div className="flex justify-center">
        {" "}
        <h1 className="font-bold text-2xl text-yellow-500/80 drop-shadow-md">
          "Bringing Ideas to Life with Code"
        </h1>
      </div>
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
          className="font-bold hover:underline cursor-pointer py-6 px-8 hover:text-blue-700 drop-shadow-sm"
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
          Contact me!
        </div>
      </section>

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
    </>
  );
}

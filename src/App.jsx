import paperTexture from "./assets/paper-texture.avif";
import Navbar from "./components/navbar";
import gottfrid from "./assets/gottfrid.PNG";
import ProjectCard from "./components/project-card";
import brushStroke from "./assets/brush-stroke.png";
import oldParchment from "./assets/old-parchment.webp";

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
  return (
    <main
      className="w-screen h-screen flex justify-center overflow-auto "
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 min-h-0 min-w-0 flex flex-col gap-5 max-w-[1280px]">
        <Navbar />

        <section className="flex flex-col gap-5 items-center my-10">
          <img
            src={gottfrid}
            alt="logo"
            className="lg:h-[350px] h-[200px] drop-shadow-md"
          />
          <h1 className="font-bold text-2xl text-yellow-500/80 drop-shadow-md">
            Beyond Skills .... a Better Life..
          </h1>
        </section>
        <div className="flex justify-between gap-5 items-center pl-5">
          <h1 className="font-bold">Featured Projects</h1>
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
    </main>
  );
}

export default App;

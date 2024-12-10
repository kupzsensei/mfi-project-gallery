import paperTexture from "./assets/paper-texture.avif";
import Navbar from "./components/navbar";
import gottfrid from "./assets/gottfrid.PNG";
import ProjectCard from "./components/project-card";
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

        <section className="flex flex-col gap-5 items-center mt-10">
          <img src={gottfrid} alt="logo" className="h-[350px] drop-shadow-md" />
          <h1 className="font-bold text-2xl text-yellow-500/80 drop-shadow-md">
            Beyond Skills .... a Better Life..
          </h1>
        </section>
        <section className="flex gap-5 justify-between mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </div>
    </main>
  );
}

export default App;

import paperTexture from "./assets/paper-texture.avif";
import Navbar from "./components/navbar";
// import oldParchment from "./assets/old-parchment.webp";

import { useState } from "react";
import "animate.css";
import { Outlet } from "react-router-dom";

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
        <Outlet context={[menu , setMenu]} />
      </div>
    </main>
  );
}

export default App;

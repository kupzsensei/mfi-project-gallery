import brushStroke from "../../assets/brush-stroke.png";
import oldParchment from "../../assets/old-parchment.webp";
import signage from "../../assets/signage.png";
import menuBackground from "../../assets/nav-container.webp";
import ProjectCard from "../../components/project-card";
import { NavLink, useOutletContext } from "react-router-dom";
import vintagePaper from "../../assets/vintage-paper.png";
import { useRef, useState } from "react";
import { sendMessageAPI } from "../../API/sendMessageAPI";

const projects = [
  {
    title: "Inventory Management System",
    img: "https://cdn.dribbble.com/userupload/14163171/file/original-a95fcedc4b09d5570e5aeac23c479093.png?resize=1024x768&vertical=center",
    frontend: "ReactJS",
    backend: "Django REST API",
    client: "LA Global Product Trends Inc.",
  },
  {
    title: "Point of Sale System",
    img: "https://cdn.dribbble.com/userupload/4446206/file/original-37263fbb60646de8f98190e140b53d2c.png?resize=1024x768&vertical=center",
    frontend: "ReactJS",
    backend: "Django REST API",
    client: "LA Global Product Trends Inc.",
  },
  {
    title: "Warehouse Management System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://cdn.dribbble.com/userupload/10129863/file/original-340083a1415e48bba7cbe8c19fe9f00f.png?resize=1024x768&vertical=center",
    frontend: "ReactJS",
    backend: "Django REST API",
    client: "LA Global Product Trends Inc.",
  },
  {
    title: "Inventory Management System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://cdn.dribbble.com/userupload/14163171/file/original-a95fcedc4b09d5570e5aeac23c479093.png?resize=1024x768&vertical=center",
    frontend: "ReactJS",
    backend: "Django REST API",
    client: "MFI Polytechnic Institute Inc.",
  },
  {
    title: "Room Management System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1024x768&vertical=center",
    frontend: "ReactJS",
    backend: "Django REST API",
    client: "Personal Project",
  },
  {
    title: "Accounting System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus obcaecati? Distinctio reiciendis alias veritatis atque, magni sit facere consequuntur nemo! Vitae, nobis quia eveniet error vel eaque placeat sint?",
    img: "https://cdn.dribbble.com/userupload/6447512/file/original-b88b55d10079bf48d50f5f2eb26b42a1.png?resize=1024x768&vertical=center",
    frontend: "ReactJS",
    backend: "Django REST API",
    client: "Personal Project",
  },
];

export default function Homepage() {
  const [menu, setMenu] = useOutletContext();
  const [msgModal, setMsgModal] = useState(false);

  const msgContentRef = useRef(null);
  const msgSenderRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("msg", msgContentRef.current.value);
    postData.append("email", msgSenderRef.current.value);
    // console.log(, msgSenderRef.current.value);

    sendMessageAPI(postData).then((res) => {
      console.log(res);
      if (res.ok) {
        setMsgModal(false);
        alert("your message was sent successfully.");
      } else {
        alert(
          "Failed to send  a message. please fill up all the information needed"
        );
      }
    });
  };
  return (
    <>
      <section className="flex flex-col lg:flex-row max-w-[1280px] gap-5 items-center my-10">
        <div className="flex flex-col gap-5 items-center flex-1 p-5">
          <img
            src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.6435-9/87300193_1037455886615299_7156300162434859008_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=tDrX5IW56XsQ7kNvgH23LC6&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AQLrixXrRc6Xme0IlQJwp3H&oh=00_AYCygQYFWMWsJ2nXWW3a9TDx-SZvSOh0vJFF_6d9bklxxA&oe=67B2DA4F"
            alt="logo"
            style={{ borderImage: `url(${oldParchment}) 45% stretch` }}
            className="lg:h-[350px] h-[200px] drop-shadow-md animate__pulse animate__animated border-8 border-gray-600 shadow-lg"
          />
          <h1 className="font-medium">Mt. Amuyao </h1>
        </div>
        <div className="flex flex-col gap-5 items-center flex-1 justify-center p-4">
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
        <h1 className="font-bold text-2xl text-yellow-500/80 drop-shadow-lg text-center">
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
        {/* <h1
          className="font-bold hover:underline cursor-pointer py-6 text-gray-500 px-8 hover:text-white drop-shadow-sm"
          style={{
            backgroundImage: `url(${brushStroke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          See more
        </h1> */}
      </div>

      <section className="flex gap-8 justify-center flex-col lg:flex-row items-center p-5 flex-wrap">
        {projects?.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </section>

      <section className="flex justify-center my-10 pb-10">
        <div
          onClick={() => setMsgModal(true)}
          className="w-full cursor-pointer max-w-[300px] h-[80px] flex justify-center items-center  font-bold italic drop-shadow-sm"
          style={{
            backgroundImage: `url(${oldParchment})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="">leave a message</p>
        </div>
      </section>

      {msgModal && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center drop-shadow-md">
          <form
            // onSubmit={handleSendMessage}
            className="flex flex-col p-5 w-[300px] h-[300px] gap-2"
            style={{
              backgroundImage: `url(${vintagePaper})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex gap-3 justify-between">
              <h1>Leave a message</h1>
              <button
                onClick={() => {
                  setMsgModal(false);
                }}
                className="text-red-800"
              >
                close
              </button>
            </div>
            <textarea
              placeholder="type your msg here..."
              name="message"
              id="msg"
              ref={msgContentRef}
              required
              className="outline-none placeholder-black/80 border border-gray-400 flex-1 min-h-0 min-w-0 text-xs p-2 bg-transparent"
            ></textarea>
            <div className="flex gap-3 justify-between">
              <input
                ref={msgSenderRef}
                type="email"
                required
                placeholder="leave your email here.. "
                className="outline-none placeholder-black/80 border border-gray-300 bg-transparent px-2 py-1 text-xs"
              />
              <button onClick={handleSendMessage}>send</button>
            </div>
          </form>
        </div>
      )}

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
            <NavLink
              to="/"
              className="text-black/70 hover:line-through cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-black/70 hover:line-through cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/contacts"
              className="text-black/70 hover:line-through cursor-pointer"
            >
              Contacts
            </NavLink>

            <NavLink
              className="text-red-900/70 hover:line-through cursor-pointer"
              onClick={() => setMenu(false)}
            >
              Cancel
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

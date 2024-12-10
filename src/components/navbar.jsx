import brushStroke from "../assets/brush-stroke.png";
export default function Navbar() {
  return (
    <nav className="flex justify-between gap-5 items-center px-5 py-2 font-bold text-gray-600">
      <div className="flex gap-2">
        <img
          src="https://i0.wp.com/www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-2.png?resize=450%2C450&ssl=1"
          alt="logo"
          className="w-[50px]"
        />
        <div className="flex flex-col">
          <h1 className="text-black text-xs">MFI Polytechnic Institute Inc.</h1>
          <h1 className="text-yellow-600 text-xl drop-shadow-md underline">
            Project Gallery
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {/* <img src={brushStroke} alt="" /> */}
        <h1
          className="px-5 py-3 text-blue-700 drop-shadow-sm"
          style={{
            backgroundImage: `url(${brushStroke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Home
        </h1>
        <a href="#">About</a>
        <a href="#">Contacts</a>
        <a href="#">Projects</a>
      </div>
    </nav>
  );
}

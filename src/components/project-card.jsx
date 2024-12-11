import oldParchment from "../assets/old-parchment.webp";
export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-2 w-[350px] items-center">
      <img
        src="https://images.ctfassets.net/hfb264dqso7g/7BIuhKgTlUYlNRQrWwd9FE/d3bd1aa1d0a9dadd21a4601035a2e123/multichannel-orders-screenshot.jpg"
        alt="imge"
        className="w-full h-[200px] border-8 border-gray-600 shadow-lg"
        style={{ borderImage: `url(${oldParchment}) 45% stretch` }}
      />
      <h1 className="font-bold">Inventory System</h1>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Repudiandae
        quos culpa placeat aut cupiditate error, sunt labore accusamus expedita,
      </p>
    </div>
  );
}

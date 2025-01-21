import oldParchment from "../assets/old-parchment.webp";
export default function ProjectCard({ data }) {
  return (
    <div className="flex flex-col gap-2 w-[350px] min-w-350px animate__animated  items-center animate__backInUp">
      <img
        src={data.img}
        alt="imge"
        className="w-full h-[200px] border-8 border-gray-600 shadow-lg"
        style={{ borderImage: `url(${oldParchment}) 45% stretch` }}
      />
      <h1 className="font-bold text-xl">{data.title}</h1>
      {/* <p className="text-gray-500">{data.description}</p> */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <h1 className="text-gray-500">Client : </h1>
          <h1>{data?.client}</h1>
        </div>
        <div className="flex gap-3">
          <h1 className="text-gray-500">Frontend : </h1>
          <h1>{data?.frontend}</h1>
        </div>
        <div className="flex gap-3">
          <h1 className="text-gray-500">Backend : </h1>
          <h1>{data?.backend}</h1>
        </div>
      </div>
    </div>
  );
}

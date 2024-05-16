import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className="w-11/12 bg-white rounded-lg text-center mt-[40px]
      font-bold text-4xl ">RANDOM GIFs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
);
}

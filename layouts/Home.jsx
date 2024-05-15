import leo from "/leo.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-4 bg-black">
      <Link to="/homeschool" className="text-4xl text-white underline">
        <img className="size-[15rem]" src={leo} alt="monochrome" />
      </Link>
    </div>
  );
}

export default Home;

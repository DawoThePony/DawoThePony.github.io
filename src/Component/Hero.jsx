import { BsFacebook, BsTwitter } from "react-icons/bs";

export const Hero = () => {
  return (
    <>
      <div className="flex text-center lg:flex md:flex sm:hidden ssm:hidden">
        <div className= "h-screen w-1/2 bg-blue-100">
          <h1 className=" absolute top-1/2 w-min right-3/4 text-3xl">Piekarnia <a href="#Piekarnia"><button className=" bg-slate-500 bg-opacity-20 p-2 rounded-2xl m-5 hover:bg-opacity-100">Więcej</button></a></h1>
        </div>
        <div className=" h-screen w-1 bg-white">

        </div>
        <div className=" h-screen w-1/2 bg-pink-100">
          <h1 className=" absolute top-1/2 w-min left-3/4 text-3xl">Cukiernia <a href="#Cukiernia"><button className=" bg-slate-500 bg-opacity-20 p-2 rounded-2xl m-5 hover:bg-opacity-100">Więcej</button></a></h1>
        </div>
      </div>
    </>
  );
};

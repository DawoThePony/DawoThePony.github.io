export const Hero = () => {
  return (
  <div className="flex">
    {/* Left side */}
    <div className="flex flex-col w-1/2 p-20 justify-center h-screen">
      <h1 className=" text-5xl m-5 font-bold">Najsmaczniejsze chleby i ciasta na specjalne okazje</h1>
      <p className="m-5 text-xl font-light">Zapraszamy do naszej lokalnej piekarni, gdzie znajdziesz najświeższe wypieki. Oferujemy również specjalne ciasta na różne okazje, takie jak śluby i urodziny.</p>
      {/* call to action buttons */}
      <div className="flex m-5">
        <a href="#" className='border-black border-2 px-2 mx-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
        <a href="#" className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
      </div>
    </div>
    {/* Right side */}
    <div className=" w-[50%] h-screen">
      <img src="https://placehold.co/2000" alt="placeholder" className=" object-cover h-screen"/>
    </div>
  </div>  
);
};

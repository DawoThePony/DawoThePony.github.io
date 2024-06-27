export const About = () => {
  return (
  <>
  <div className="flex flex-col w-3/4 items-center mx-auto py-20 text-center justify-between min-h-screen">
      <div className=" flex flex-col items-center">
        <h1 className=" text-5xl m-5 font-bold">Nasza Piekarnia - Świeże i Smaczne Produkty</h1>
        <p className="w-1/2 m-5">
        Nasza piekarnia oferuje najświeższe produkty w mieście. Stawiamy na lokalne składniki i specjalne zamówienia, aby zapewnić naszym klientom wyjątkowe doświadczenie.
        </p>
      </div>
    {/* gallery */}
    <div className="flex flex-row justify-between">
      <div className=" flex flex-col w-[30%] items-center">
        <img src="https://placehold.co/600x400" alt="" className=" m-5" />
        <h2 className="text-2xl font-semibold p-2">Świeże i Lokalne Składniki</h2>
        <p className=" font-light">Wszystkie nasze produkty są przygotowywane z najświeższych i lokalnych składników, aby zapewnić najwyższą jakość.</p>
      </div>
      <div className="  flex flex-col w-[30%] items-center">
        <img src="https://placehold.co/600x400" alt="" className=" m-5" />
        <h2 className="text-2xl p-2 font-bold">Specjalne Zamówienia na Wszelkie Okazje</h2>
        <p>Oferujemy również specjalne zamówienia na torty i ciasta na różne okazje, takie jak wesela i urodziny.</p>
      </div>
      <div className="  flex flex-col w-[30%] items-center">
        <img src="https://placehold.co/600x400" alt="" className=" m-5" />
        <h2 className="text-2xl p-2 font-bold">Nasza Misja - Zadowoleni Klienci</h2>
        <p>Naszą misją jest zapewnienie naszym klientom wyjątkowych doświadczeń smakowych i pełnej satysfakcji.</p>
      </div>
    </div>
      {/* CTA Buttons */}
      <div className=" m-10">
      <a href="#" className='border-black border-2 px-2 mx-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
      <a href="#" className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
      </div>
  </div>
  <div>
    
  </div>
  </>  
);
};

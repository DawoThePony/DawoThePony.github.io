const linkStyle = 'px-4 text-center'

const Link = ({destination, style, name}) => <a href={destination} className={style}>{name}</a>


function App() {
    return ( <> 
    <div className=" bg-[#fff3ea] md:block lg:block sm:hidden ssm:hidden">
{/*************** Nav Section *****************/}
{/* Desktop Nav */}
            <div
                className=" z-50 w-screen fixed flex items-center justify-evenly text-black py-2 px-5 border-b-2 border-black backdrop-blur-lg">
                <div className="flex items-center justify-start w-full">

                    <a href="#" className={linkStyle}>Piekarnia Cukiernia
                        <br/>
                        Tomasz Barański</a>
                    <Link destination={''} style={linkStyle} name={'O nas'}/>
                    <Link destination={''} style={linkStyle} name={'Oferta'}/>
                    <Link destination={''} style={linkStyle} name={'Sklepy'}/>
                    <Link destination={''} style={linkStyle} name={'Kontakt'}/>
                </div>
                <div className=" flex justify-between">
                    <a
                        href="#"
                        className='border-black border-2 px-2 mx-3 w-max hover:cursor-pointer'>Znajdź nas</a>
                    <a
                        href="#"
                        className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer'>Kontakt</a>
                </div>
            </div>
{/*************** Hero Section *****************/}
            <div className="flex">
                {/* Left side */}
                <div className="flex flex-col w-1/2 p-20 justify-center h-screen">
                    <h1 className=" text-5xl m-5 font-bold">Najsmaczniejsze chleby i ciasta na specjalne okazje</h1>
                    <p className="m-5 text-xl font-light">Zapraszamy do naszej lokalnej piekarni,
                        gdzie znajdziesz najświeższe wypieki. Oferujemy również specjalne ciasta na
                        różne okazje, takie jak śluby i urodziny.</p>
                    {/* call to action buttons */}
                    <div className="flex m-5">
                        <a
                            href="#"
                            className='border-black border-2 px-2 mx-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
                        <a
                            href="#"
                            className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
                    </div>
                </div>
                {/* Right side */}
                <div className=" w-[50%] h-screen">
                    <img
                        src="https://placehold.co/2000"
                        alt="placeholder"
                        className=" object-cover h-screen"/>
                </div>
            </div>
{/*************** About Section *****************/}
            <div>
            {/* First Section */}
              <div
                  className="flex flex-col w-3/4 items-center mx-auto py-20 text-center justify-between min-h-screen">
                  <div className=" flex flex-col items-center">
                      <h1 className=" text-5xl m-5 font-bold">Nasza Piekarnia - Świeże i Smaczne Produkty</h1>
                      <p className="w-1/2 m-5">
                          Nasza piekarnia oferuje najświeższe produkty w mieście. Stawiamy na lokalne
                          składniki i specjalne zamówienia, aby zapewnić naszym klientom wyjątkowe
                          doświadczenie.
                      </p>
                  </div>
                  {/* gallery */}
                  <div className="flex flex-row justify-between">
                      <div className=" flex flex-col w-[30%] items-center">
                          <img src="https://placehold.co/600x400" alt="" className=" m-5"/>
                          <h2 className="text-2xl font-semibold p-2">Świeże i Lokalne Składniki</h2>
                          <p className=" font-light">Wszystkie nasze produkty są przygotowywane z
                              najświeższych i lokalnych składników, aby zapewnić najwyższą jakość.</p>
                      </div>
                      <div className="  flex flex-col w-[30%] items-center">
                          <img src="https://placehold.co/600x400" alt="" className=" m-5"/>
                          <h2 className="text-2xl p-2 font-bold">Specjalne Zamówienia na Wszelkie Okazje</h2>
                          <p>Oferujemy również specjalne zamówienia na torty i ciasta na różne okazje,
                              takie jak wesela i urodziny.</p>
                      </div>
                      <div className="  flex flex-col w-[30%] items-center">
                          <img src="https://placehold.co/600x400" alt="" className=" m-5"/>
                          <h2 className="text-2xl p-2 font-bold">Nasza Misja - Zadowoleni Klienci</h2>
                          <p>Naszą misją jest zapewnienie naszym klientom wyjątkowych doświadczeń
                              smakowych i pełnej satysfakcji.</p>
                      </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className=" m-10">
                      <a
                          href="#"
                          className='border-black border-2 px-2 mx-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
                      <a
                          href="#"
                          className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
                  </div>
              </div>
              {/* Second Section */}
              <div className="flex">
                  {/* Left side */}
                  <div className=" w-[50%] h-screen p-40">
                      <img
                          src="https://placehold.co/1000"
                          alt="placeholder"
                          className=" object-cover h-max"/>
                  </div>
                  {/* Right side */}
                  <div className="flex flex-col w-1/2 p-20 justify-center h-screen">
                      <h1 className=" text-5xl m-5 font-bold">Nasza pasja to tworzenie wyjątkowych wypieków</h1>
                      <p className="m-5 text-xl font-light">Jesteśmy lokalną piekarnią, która od lat
                          dostarcza świeże pieczywo i wypieki na specjalne okazje. Nasza misja to
                          zaspokajanie Twoich potrzeb smakowych i tworzenie niezapomnianych doświadczeń
                          kulinarnych. Wierzymy w jakość, tradycję i pasję, które kładziemy w każdy nasz
                          wypiek. Nasz zespół pracowników to grupa utalentowanych i doświadczonych
                          piekarzy, którzy dbają o to, aby każdy produkt był doskonały..</p>
                      {/* CTA buttons */}
                      <div className="flex m-5">
                          <a
                              href="#"
                              className='border-black border-2 px-2 mx-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
                          <a
                              href="#"
                              className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
                      </div>
                  </div>
              </div>
            </div>
      </div>

{/*************** Mobile View *****************/
    } <div className=" sm:flex ssm:flex md:hidden lg:hidden h-screen w-screen items-center justify-center text-5xl" > <p>
                Mobile coming soon!
            </p> </div>
    </>)
}

export default App

import { MdStar , MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { PiPlantFill } from "react-icons/pi";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";


const Link = ({destination, style, name}) => <a href={destination} className={style}>{name}</a>

function App() {
    return ( <> <div  className=" bg-[#fafafa]">
            {/*************** Nav Section *****************/}
            <div className="ssm:h-12 md:h-auto md:flex z-50 w-screen fixed flex items-center justify-between text-black py-2 md:px-20 border-b-[1px] border-black backdrop-blur-lg bg-[#fafafa] bg-opacity-50 text-nowrap">
                <div className="md:flex items-center md:justify-start md:w-full">
                    <a href="#" className="px-5 pr-10 md:flex items-center text-center">
                        <img src="/logo_czarne.png" alt="Logo" className="ssm:h-10 ssm:ml-5 md:m-0 md:h-20 md:mr-10"/>
                        <p className="ssm:hidden md:flex">Piekarnia Cukiernia<br/>Tomasz Barański</p>
                    </a>
                    <div className="ssm:hidden md:flex">
                        <a href="#About" className="px-5">O Nas</a>
                        <a href="#Products" className="px-5">Oferta</a>
                        <a href="#Shops" className="px-5">Sklepy</a>
                        <a href="#Contact" className="px-5">Kontakt</a>
                    </div>

                </div>
                <div className="ssm:hidden md:flex justify-between ">
                    <a href="#Shops" className='border-black border-2 px-2 mx-3 w-max hover:cursor-pointer rounded-lg p-1'>Znajdź nas</a>
                    <a href="#Contact"className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer rounded-lg p-1'>Kontakt</a>
                </div>
                <div className="ssm:flex justify-end md:hidden">
                    <GiHamburgerMenu className=" text-5xl m-10"/>
                </div>
            </div>
            {/*************** Hero Section *****************/}
            <div className="flex ssm:flex-col ssm:text-center md:flex-row md:text-left">
                {/* Left side */}
                <div className="flex flex-col md:w-1/2 sm:w-full ssm:backdrop-blur-sm md:backdrop-blur-none md:p-20 justify-center h-screen z-10 md:text-black ssm:bg-black ssm:bg-opacity-50 md:bg-transparent">
                    <h1 className="ssm:text-4xl md:text-5xl m-5 font-bold ssm:text-white sm:text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ssm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-black md:drop-shadow-none ">Najsmaczniejsze chleby i ciasta na specjalne okazje</h1>
                    <p className="m-5 text-2xl font-light ssm:text-white sm:text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ssm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-black md:drop-shadow-none">Zapraszamy do naszej lokalnej piekarni,
                        gdzie znajdziesz najświeższe wypieki. Oferujemy również specjalne ciasta na
                        różne okazje, takie jak śluby i urodziny.</p>
                    {/* call to action buttons */}
                    <div className="flex mr-0 m-5 ssm:justify-center md:justify-normal">
                        <a
                            href="#Shops"
                            className='border-black border-2 px-2 mr-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1 ssm:text-white md:text-black '>Znajdź nas</a>
                        <a
                            href="#Contact"
                            className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
                    </div>
                </div>
                {/* Right side */}
                <div className=" md:w-[50%] sm:w-full ssm:absolute sm:absolute md:relative h-screen">
                    <img
                        src="/hero_bg.png"
                        alt="placeholder"
                        className=" object-cover h-full md:w-full"/>
                </div>
            </div>
            {/*************** About Section *****************/}
            <div id="About">
                {/* First Section */}
                <div
                    className="flex flex-col md:w-3/4 items-center mx-auto pt-10 text-center justify-between min-h-screen">
                    <div className=" flex flex-col items-center">
                        <h1 className="ssm:text-4xl md:text-5xl md:mt-20 font-bold">Nasza Piekarnia - Świeże i Smaczne Produkty</h1>
                        <p className="md:w-1/2 m-5">
                            Nasza piekarnia oferuje najświeższe produkty w mieście. Stawiamy na lokalne
                            składniki i specjalne zamówienia, aby zapewnić naszym klientom wyjątkowe
                            doświadczenie.
                        </p>
                    </div>
                    {/* gallery */}
                    <div className="ssm:mx-5 md:mx-0 flex ssm:flex-col md:flex-row justify-between">
                        <div className=" flex flex-col ssm:w-full md:w-[30%] items-center">
                            <img src="/about1.jpg" alt="" className=" m-5 rounded-3xl w-96 h-96 object-cover"/>
                            <h2 className="text-2xl font-semibold p-2">Świeże i Lokalne Składniki</h2>
                            <p className=" font-light">Wszystkie nasze produkty są przygotowywane z
                                najświeższych i lokalnych składników, aby zapewnić najwyższą jakość.</p>
                        </div>
                        <div className="  flex flex-col ssm:w-full md:w-[30%] items-center">
                            <img src="/about2.jpg" alt="" className=" m-5 rounded-3xl w-96 h-96 object-cover"/>
                            <h2 className="text-2xl p-2 font-bold">Specjalne Zamówienia na Wszelkie Okazje</h2>
                            <p>Oferujemy również specjalne zamówienia na torty i ciasta na różne okazje,
                                takie jak wesela i urodziny.</p>
                        </div>
                        <div className="  flex flex-col ssm:w-full md:w-[30%] items-center">
                            <img src="/about3.jpg" alt="" className=" m-5 rounded-3xl w-96 h-96 object-cover" />
                            <h2 className="text-2xl p-2 font-bold">Nasza Misja - Zadowoleni Klienci</h2>
                            <p>Naszą misją jest zapewnienie naszym klientom wyjątkowych doświadczeń
                                smakowych i pełnej satysfakcji.</p>
                        </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className=" m-10">
                        <a
                            href="#Shops"
                            className='border-black border-2 px-2 mx-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
                        <a
                            href="#Contact"
                            className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
                    </div>
                </div>
                {/* Second Section */}
                <div className="flex ssm:flex-col ssm:p-5 md:flex-row md:p-20 min-h-screen">
                    {/* Left side */}
                    <div className=" ssm:w-full md:w-[50%] md:h-screen md:p-20">
                        <img
                            src="/about4.jpg"
                            alt="placeholder"
                            className=" ssm:object-fill md:object-cover h-full rounded-3xl mx-auto"/>
                    </div>
                    {/* Right side */}
                    <div className="flex flex-col md:w-1/2 md:px-20 justify-center min-h-screen ssm:text-center md:text-left">
                        <h1 className=" text-5xl m-5 font-bold">Nasza pasja to tworzenie wyjątkowych wypieków</h1>
                        <p className="m-5 text-xl font-light">Jesteśmy lokalną piekarnią, która od lat
                            dostarcza świeże pieczywo i wypieki na specjalne okazje. Nasza misja to
                            zaspokajanie Twoich potrzeb smakowych i tworzenie niezapomnianych doświadczeń
                            kulinarnych. Wierzymy w jakość, tradycję i pasję, które kładziemy w każdy nasz
                            wypiek. Nasz zespół pracowników to grupa utalentowanych i doświadczonych
                            piekarzy, którzy dbają o to, aby każdy produkt był doskonały.</p>
                        {/* CTA buttons */}
                        <div className="flex m-5 ssm:justify-center md:justify-normal ">
                            <a
                                href="#Shops"
                                className='border-black border-2 px-2 mr-3 text-nowrap hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Znajdź nas</a>
                            <a
                                href="#Contact"
                                className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer h-min w-min rounded-lg text-2xl p-1'>Kontakt</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*************** Testimonial Section *****************/}
            <div id="Testimonials" className="flex flex-col ssm:px-5 md:px-20 justify-around ssm:text-center md:text-left">
              <div className=" md:mb-20">
                <h1 className=" text-5xl font-bold p-5">Opinie klientów</h1>
                <p className="p-5">Nasze produkty są wyjątkowe i zawsze świeże.</p>
              </div>
              <div className="flex ssm:flex-col md:flex-row md:h-1/2">
                <div className=" h-3/4 md:w-1/3 flex flex-col">
                  <img src="https://placehold.co/20" alt="" className=" w-16 rounded-full ssm:mx-auto ssm:mt-10 md:mt-0 md:mx-5"/>
                  <h5 className=" text-lg font-semibold pt-5">Patrycja U.</h5>
                  <h4 className=" text-xl font-bold p-5">"Serdecznie polecam ☺ najlepsze torty, ciasta, itp. Zawsze wszystko pięknie udekorowane ^^ A smak? Obłędny ❤ Polecam ☺"</h4>
                  <div className="flex text-4xl ssm:mx-auto md:mx-0">
                    <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>
                </div>
                <div className=" h-3/4  md:w-1/3 flex flex-col">
                  <img src="https://placehold.co/20" alt="" className=" w-16 rounded-full ssm:mx-auto ssm:mt-10 md:mt-0 md:mx-5"/>
                  <h5 className=" text-lg font-semibold pt-5">Monika D.</h5>
                  <h4 className=" text-xl font-bold p-5">"Bardzo dziękujemy za przepyszny tort Oreo ! Byl bardzo smaczny i cudowny, córka zachwycona, jak zawsze !! polecam serdecznie!! 🍰"</h4>
                  <div className="flex text-4xl ssm:mx-auto md:mx-0">
                    <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>                
                </div>
                <div className="md:w-1/3 flex flex-col">
                  <img src="https://placehold.co/20" alt="" className=" w-16 rounded-full ssm:mx-auto ssm:mt-10 md:mt-0 md:mx-5"/>
                  <h5 className=" text-lg font-semibold pt-5">Marta W.</h5>
                  <h4 className=" text-xl font-bold p-5">"Bardzo smaczne ciasta i desery !!!!😀😀😀"</h4>
                  <div className="flex text-4xl ssm:mx-auto md:mx-0">
                     <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>
                </div>
                
              </div>
            </div>
            {/*************** Products Section *****************/}
            <div id="Products"  className="flex ssm:flex-col md:flex-row ssm:text-center md:text-left pt-10 md:px-20">
                    {/* Left side */}
                    <div className="flex flex-col md:w-1/2 justify-center min-h-screen mx-auto">
                        <h1 className=" text-5xl m-5 font-bold">Nasze produkty - zdrowe składniki, tradycyjne receptury, zamówienia specjalne</h1>
                        <p className="m-5 text-xl font-light">Nasza piekarnia oferuje szeroki wybór
                            pysznych i świeżo upieczonych produktów. Stawiamy na zdrowe składniki,
                            tradycyjne receptury i możliwość zamówienia specjalnych wypieków na różne
                            okazje.</p>
                        <div className="flex ssm:flex-col md:flex-row m-5">
                            <div className="flex flex-col m-2">
                            <PiPlantFill className=" text-3xl ssm:mx-auto md:mx-0"/>
                              <h3 className=" text-xl font-semibold">Zdrowe składniki</h3>
                              <p>Nasze produkty są przygotowywane z najwyższej jakości składników, dbając o zdrowie naszych klientów.</p>
                            </div>
                            <div className="flex flex-col m-2">
                            <RiFilePaper2Fill className=" text-3xl ssm:mx-auto md:mx-0"/>
                              <h3 className=" text-xl font-semibold">Tradycyjne receptury</h3>
                              <p>Korzystamy z tradycyjnych receptur, które gwarantują wyjątkowy smak i aromat naszych wyrobów..</p>
                            </div>
                            
                        </div>
                    </div>
                    {/* Right side */}
                    <div className=" md:w-1/2 grid md:grid-cols-2 m-auto gap-5 justify-items-center ssm:m-5 md:m-0">
                        <img
                        src="/product1.jpg"
                        alt="placeholder"
                        className="rounded-lg object-cover h-96 w-full"/>
                        <img
                        src="/product2.jpg"
                        alt="placeholder"
                        className=" object-cover rounded-lg h-96 w-full"/>
                        <img
                        src="/product3.jpg"
                        alt="placeholder"
                        className="rounded-lg object-cover md:col-span-2 h-96 w-full"/>
                    </div>
            </div>
            {/* ************** Shops Section **************** */}
            <div id="Shops" className="flex flex-col justify-between text-center pt-28">
                <h1 className=" text-5xl mb-10">Nasze sklepy</h1>
                <div className="ssm:hidden md:flex justify-center gap-5 text-2xl">
                    <div className=" bg-black text-white p-2 px-5 font-bold rounded-xl">Galeria</div>
                    <div className="flex border-2 border-black p-2 px-5 font-bold items-center rounded-xl"><p>Mapa</p></div>
                {/* Galeria */}
                </div>
                <div className="ssm:mt-20 md:mt-0 md:p-20 grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1  gap-20 mx-auto justify-items-center">
                    <div className="flex flex-col justify-around border-black border-2 rounded-xl p-2  items-center">
                        <img src="/orzeska90.png" alt="Zdjęcie sklepu" className=" w-96 h-96 object-cover object-left rounded-xl" />
                        <h1 className="font-semibold">Ornontowice, ul. Orzeska 90 <br />
                        </h1>
                        <a href="tel:322354642">tel. 32 235 46 42</a>
                    </div>
                    <div className="flex flex-col justify-around border-black border-2 rounded-xl p-2  items-center">
                        <img src="/morcinka4.jpg" alt="Zdjęcie sklepu" className=" w-96 h-96 object-cover rounded-xl" />
                        <h1 className="font-semibold">Leszczyny, ul. Morcinka 4 <br />
                        </h1>
                        <a href="tel:881947197">tel. 881 947 197</a>
                    </div>
                    <div className="flex flex-col justify-around border-black border-2 rounded-xl p-2  items-center">
                        <img src="/pojdy81.jpg" alt="Zdjęcie sklepu" className=" w-96 h-96 object-cover rounded-xl" />
                        <h1 className="font-semibold">Leszczyny, ul. Ks. Pojdy 81 <br />
                        </h1>
                        <a href="tel:504859688">tel. 504 859 688</a>
                    </div>
                    <div className="flex flex-col justify-around border-black border-2 rounded-xl p-2  items-center">
                        <img src="/kochanowskiego42.jpg" alt="Zdjęcie sklepu" className=" w-96 h-96 object-cover rounded-xl" />
                        <h1 className="font-semibold">Czuchów, ul. Kochanowskiego 42 <br />
                        </h1>
                        <a href="tel:512111610">tel. 512 111 610</a>
                    </div>
                    <div className="flex flex-col justify-around border-black border-2 rounded-xl p-2  items-center">
                        <img src="/rynek7.jpg" alt="Zdjęcie sklepu" className=" w-96 h-96 object-cover rounded-xl" />
                        <h1 className=" font-semibold">Czerwionka, ul. Rynek 7 <br />
                        </h1>
                        <a href="tel:512967611">tel. 512 967 611</a>
                    </div>
                    <div className="flex flex-col justify-around border-black border-2 rounded-xl p-2  items-center">
                        <img src="/brzozowa13.png" alt="Zdjęcie sklepu" className=" w-96 h-96 object-cover object-right rounded-xl" />
                        <h1 className=" font-semibold">Ornontowice, ul. Brzozowa 13 <br />
                        </h1>
                        <a href="tel:">tel. n/a</a>
                    </div>

                </div>
                {/* Mapa */}
                <div className=" hidden">
                    Tu będzie mapa
                </div>
            </div>
            {/* ************** Contact Section **************** */}
            <div id="Contact" className=" p-20 flex justify-center text-center">
                <div className=" border-black border-2 p-5 rounded-3xl">
                    <h1 className=" text-3xl font-bold">
                        Kontakt do cukierni w sprawie zamówień specjalnych
                    </h1>
                    <a href="tel:512037460" className=" text-2xl">tel. 512 037 460</a> <br />
                    <a href="tel:784532570" className=" text-2xl">tel. 784 532 570</a>
                </div>
                {/* <div>
                    <h1>Kontakt do sklepów</h1>
                    <ul  className="flex ">
                        <li> 
                            <h1 className="">Ornontowice, ul. Orzeska 90 <br />
                            <a href="tel:322354642">tel. 32 235 46 42</a></h1>
                        </li>
                        <li>
                            <h1 className="">Leszczyny, ul. Morcinka 4 <br />
                            <a href="tel:881947197">tel. 881 947 197</a></h1></li>
                        <li>
                            <h1 className="">Leszczyny, ul. Ks. Pojdy 81 <br />
                            <a href="tel:504859688">tel. 504 859 688</a></h1>
                        </li>
                        <li>
                            <h1 className="">Czuchów, ul. Kochanowskiego 42 <br />
                            <a href="tel:512111610">tel. 512 111 610</a></h1>
                        </li>
                        <li> 
                            <h1 className="">Czerwionka, ul. Rynek 7 <br />
                            <a href="tel:512967611">tel. 512 967 611</a></h1>
                        </li>
                        <li>
                        <h1 className="">Ornontowice, ul. Brzozowa 13 <br />
                        <a href="tel:">tel. n/a</a></h1>
                        </li>
                    </ul>
                </div> */}
            </div>
            {/*************** Footer Section *****************/}
            <div id="footer" className=" flex flex-col justify-between md:p-20 ssm:text-center md:text-left">
                <div className=" flex ssm:flex-col md:flex-row justify-between items-center">
                    <img src="/logo_czarne.png" alt="Logo" className="h-32"/>
                    <div className="flex ssm:flex-col  md:flex-row">
                        <a href="#" className=" font-bold px-10 ssm:py-2 md:py-0">Hero</a>
                        <a href="#About" className=" font-bold px-10 ssm:py-2 md:py-0">O Nas</a>
                        <a href="#Products" className=" font-bold px-10 ssm:py-2 md:py-0">Oferta</a>
                        <a href="#Shops" className=" font-bold px-10 ssm:py-2 md:py-0">Sklepy</a>
                        <a href="#Contact" className=" font-bold px-10 ssm:py-2 md:py-0">Kontakt</a>
                    </div>
                    <div className="flex text-3xl ssm:py-2 md:py-0">
                        <a href="#" className="px-2"><MdFacebook /> </a>
                        <a href="#" className="px-2"><AiFillInstagram /></a>
                    </div>
                </div>
                <div className=" flex ssm:flex-col md:flex-row justify-center border-t-2 border-black p-5 m-10">
                    <p className="ssm:py-2 md:py-0">© 2024 Piekarnia Cukiernia Tomasz Barański. Wszelkie prawa zastrzeżone.
                    </p>
                    <a href="#" className=" underline px-5 ssm:py-2 md:py-0">Polityka prywatności</a> 
                    <p className=" font-light italic">
                        <a href="https://dawothepony.github.io" className="ssm:py-2 md:py-0">
                        Designed & developed by Dawid Wojtkowski & Agnieszka Miler
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </ >)
}

export default App

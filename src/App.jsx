import { useState } from "react";
import { MdStar , MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { PiPlantFill } from "react-icons/pi";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Children } from "react";
import { CgClose } from "react-icons/cg";

const Link = ({destination, style, name}) => <a href={destination} className={style}>{name}</a>

function App() {

    const [maps, setMaps] = useState(false);

    const openMaps = () => {
        setMaps(true)
    }
    const closeMaps = () => {
        setMaps(false)
    }
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }
    const [polityka, setPolityka] = useState(true);

    const togglePolityka = () => {
        setPolityka(!polityka);
    }
    
    return ( <> 
    
            {/*************** Polityka Section *****************/}
            <div id="Polityka" className={"w-screen h-screen mx-auto z-40 flex flex-col justify-center backdrop-blur-md " + (polityka ? 'hidden':'fixed')}>
                <div className=" mt-10 p-5 w-[90vw] h-[90vh] mx-auto text-justify bg-white border-black border-2 overflow-scroll">
                    <div  className="flex w-full justify-end">
                        <CgClose onClick={togglePolityka} className=" text-2xl border-2 border-black rounded-full hover:cursor-pointer"/>
                    </div>
                <h1>
                    1. O NAS
                </h1>
                <p>
Właścicielem serwisu internetowego https://piekarniabaranski.pl i administratorem danych osobowych zbieranych za jego pośrednictwem jest: Piekarnia Barański, zarejestrowana pod adresem <br />
Orzeska 90, <br />
43-178 Ornontowice,<br />NIP: 6420028706 <br />adres poczty elektronicznej: kontakt@piekarniabaranski.pl <br />jest serwisem internetowym firmy Piekarnia Barański <br />
                </p>
                <h1>
2. POSTANOWIENIA OGÓLNE
                </h1>
                <p>
Usługodawca dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w szczególności zapewnia, że zbierane przez niego dane są przetwarzane zgodnie z Prawem zbierane dla oznaczonych, zgodnych z prawem celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi celami; merytorycznie poprawne i adekwatne w stosunku do celów, w jakich są przetwarzane oraz przechowywane w postaci umożliwiającej identyfikację osób, których dotyczą, nie dłużej niż jest to niezbędne do osiągnięcia celu przetwarzania.<br />
Niniejsza polityka prywatności Serwisu Internetowego ma charakter informacyjny, co oznacza że nie jest ona źródłem obowiązków dla Usługobiorców Serwisu Internetowego.<br />
Wszelkie słowa, wyrażenia i akronimy występujące na niniejszej stronie i rozpoczynające się dużą literą (np. Usługodawca, Serwis Internetowy, Usługa Elektroniczna) należy rozumieć zgodnie z ich definicją zawartą w Regulaminie Serwisu Internetowego dostępnym na stronach Serwisu Internetowego<br />
Dane osobowe Usługobiorcy są przetwarzane zgodnie z ustawą o ochronie danych osobowych z dnia 29 sierpnia 1997 r. (Dz.U. 1997 Nr 133, poz. 883 ze zm.) (zwana dalej: Ustawą o ochronie danych osobowych) oraz ustawą o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (Dz.U. 2002 Nr 144, poz. 1204 ze zm.).<br />
                </p> 
                <h1>
3. CEL I ZAKRES ZBIERANIA DANYCH
                </h1>
                <p>
Każdorazowo cel, zakres oraz odbiorcy danych przetwarzanych przez Usługodawcę wynika z działań podejmowanych przez Usługobiorcę w Serwisie Internetowym.<br />
Możliwe cele zbierania danych osobowych Usługobiorców przez Usługodawcy:<br />
zawarcie i realizacja umowy o korzystanie z Usługi Elektronicznej,<br />
marketing bezpośredni własnych produktów lub usług Usługodawcy. <br />
Usługodawca może przetwarzać następujące dane osobowe Usługobiorców korzystających z Serwisu Internetowego: imię i nazwisko, adres poczty elektronicznej, numer telefonu, tytuł naukowy, specjalizacja, numer prawa wykonywania zawodu, nazwa, adres i numer telefonu pracodawcy, a także – jeżeli wymaga tego korzystanie z Usługi Elektronicznej inne dane niezbędne do jej realizacji wskazane na stronie Serwisu Internetowego.<br />
Podanie danych osobowych, o których mowa w punkcie powyżej może być niezbędne do zawarcia i realizacji umowy o świadczenie Usługi. Każdorazowo zakres wymaganych do zawarcia umowy danych wskazany jest uprzednio na stronie Serwisu Internetowego, w trakcie korzystania z Serwisu Internetowego oraz w jego Regulaminie.<br />
Usługodawca przetwarza również zanonimizowane dane związane z korzystaniem ze Serwisu Internetowego (np. ilość Usługobiorców) do generowania statystyk korzystania z Serwisu. Dane te mają charakter zbiorczy i anonimowy, tj. nie zawierają cech identyfikujących osób korzystających z Serwisu.
                </p>
                <h1>
4. COOKIES I DANE EKSPLOATACYJNE
                </h1>
                <p>
Pliki Cookies (ciasteczka) są to niewielkie informacje tekstowe w postaci plików tekstowych, wysyłane przez serwer i zapisywane po stronie osoby odwiedzającej stronę Serwisu Internetowego (np. na dysku twardym komputera, laptopa, czy też na karcie pamięci smartfona – w zależności z jakiego urządzenia korzysta odwiedzający nasz Serwis Internetowy). Szczegółowe informacje dot. plików Cookies, a także historię ich powstania można znaleźć m.in. tutaj: http://pl.wikipedia.org/wiki/Ciasteczko.<br />
Usługodawca może przetwarzać dane zawarte w plikach Cookies podczas korzystania przez odwiedzających ze strony Serwisu Internetowego w następujących celach:<br />
dostosowywania zawartości strony Serwisu Internetowego do indywidualnych preferencji Usługobiorcy (np. dotyczących języka strony);<br />
zapamiętywanie lokalizacji IP, strefy czasowej;<br />
prowadzenia anonimowych statystyk przedstawiających sposób korzystania ze strony Serwisu Internetowego.<br />
Standardowo większość przeglądarek internetowych dostępnych na rynku domyślnie akceptuje zapisywanie plików Cookies. Każdy ma możliwość określenia warunków korzystania z plików Cookies za pomocą ustawień własnej przeglądarki internetowej. Oznacza to, że można np. częściowo ograniczyć (np. czasowo) lub całkowicie wyłączyć możliwość zapisywania plików Cookies – w tym ostatnim wypadku jednak może to mieć wpływ na niektóre funkcjonalności Serwisu.<br />
Ustawienia przeglądarki internetowej w zakresie plików Cookies są istotne z punktu widzenia zgody na korzystanie z plików Cookies przez nasz Serwis Internetowy – zgodnie z przepisami taka zgoda może być również wyrażona poprzez ustawienia przeglądarki internetowej. W braku wyrażenia takiej zgody należy odpowiednio zmienić ustawienia przeglądarki internetowej w zakresie plików Cookies.<br />
Szczegółowe informacje na temat zmiany ustawień dotyczących plików Cookies oraz ich samodzielnego usuwania w najpopularniejszych przeglądarkach internetowych dostępne są w dziale pomocy przeglądarki internetowej oraz na poniższych stronach (wystarczy kliknąć w dany link):<br />
<ol className=" indent-10">
    <li>
w przeglądarce Chrome
    </li>
    <li>
w przeglądarce Firefox
    </li>
    <li>
w przęglądarce Internet Explorer
    </li>
    <li>
w przeglądarce Opera
    </li>
    <li>
w przeglądarce Safari
    </li>
    <li>
w przeglądarce Microsoft Edge
    </li>
    </ol>
Administrator korzysta w Serwisie Internetowym z usług Google Analytics oraz Universal Analytics dostarczanych przez firmę Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Usługi te pomagają Administratorowi analizować ruch w Serwisie Internetowym.<br />
Gromadzone dane przetwarzane są w ramach powyższych usług w sposób zanonimizowany (są to tzw. dane eksploatacyjne, które uniemożliwiają identyfikację osoby) do generowania statystyk pomocnych w administrowaniu Serwisem Internetowym. Dane te mają charakter zbiorczy i anonimowy, tj. nie zawierają cech identyfikujących osoby odwiedzające stronę Serwisu Internetowego. Administrator korzystając z powyższych usług w Serwisie Internetowym gromadzi takie dane jak źródła i medium pozyskania Usługobiorców oraz sposób ich zachowania na stronie Serwisu Internetowego, informacje na temat urządzeń i przeglądarek z których odwiedzają stronę, IP oraz domenę, dane geograficzne oraz dane demograficzne (wiek, płeć) i zainteresowania.<br />
Szczegółowe informacje o zasadach na jakich działają powyższe usługi, w tym o zasadach
zbierania i przetwarzania danych dostępne są tutaj: google.com/intl/pl/policies/privacy/partners/.<br />
                </p>
                <h1>
5. PODSTAWA PRZETWARZANIA DANYCH
                </h1>
                <p>
Podanie danych osobowych przez Usługobiorcy jest dobrowolne, aczkolwiek niepodanie wskazanych w na stronie Serwisu Internetowego oraz w Regulaminie Serwisu Internetowego danych osobowych niezbędnych do zawarcia i realizacji umowy o korzystanie z Usługi Elektronicznej skutkuje brakiem możliwości zawarcia tejże umowy.
Podstawą przetwarzania danych osobowych Usługobiorcy jest konieczność realizacji umowy, której jest stroną lub podjęcia na jego żądanie działań przed jej zawarciem. W przypadku przetwarzania danych w celu marketingu bezpośredniego własnych produktów lub usług Usługodawcy podstawą takiego przetwarzania jest (1) uprzednia zgoda Usługobiorcy lub (2) wypełnienie prawnie usprawiedliwionych celów realizowanych przez Usługodawcy (zgodnie z art. 23 ust. 4 Ustawy o ochronie danych osobowych za prawnie usprawiedliwiony cel uważa się w szczególności marketing bezpośredni własnych produktów lub usług Usługodawcy).
<h1>
6. PRAWO KONTROLI, DOSTĘPU DO TREŚCI SWOICH DANYCH ORAZ ICH POPRAWIANIA
</h1>
Usługobiorca ma prawo dostępu do treści swoich danych osobowych oraz ich poprawiania
                </p>
                <p>
Każdej osobie przysługuje prawo do kontroli przetwarzania danych, które jej dotyczą, zawartych w zbiorze danych Usługodawcy, a zwłaszcza prawo do: żądania uzupełnienia, uaktualnienia, sprostowania danych osobowych, czasowego lub stałego wstrzymania ich przetwarzania lub ich usunięcia, jeżeli są one niekompletne, nieaktualne, nieprawdziwe lub zostały zebrane z naruszeniem ustawy albo są już zbędne do realizacji celu, dla którego zostały zebrane.<br />
W przypadku udzielenia przez Usługobiorcy zgody na przetwarzanie danych w celu marketingu bezpośredniego własnych produktów lub usług Usługodawcy zgoda może być odwołana w każdym czasie.<br />
W przypadku, gdy Usługodawca zamierza przetwarzać lub przetwarza dane Usługobiorcy w celu marketingu bezpośredniego własnych produktów lub usług Usługodawcy, osoba, której dane dotyczą uprawniona jest także do (1) wniesienia pisemnego, umotywowanego żądania zaprzestania przetwarzania jej danych ze względu na jej szczególną sytuację lub do (2) wniesienia sprzeciwu wobec przetwarzania jej danych.<br />
W celu realizacji uprawnień, o których mowa powyżej można kontaktować się z Usługodawcą poprzez przesłanie stosownej wiadomości pisemnie lub pocztą elektroniczną na adres Usługodawcy wskazany na wstępie niniejszej polityki prywatności.
                </p>
                <h1>
7. DOSTĘP DO DANYCH INNYCH USŁUGOBIORCÓW
                </h1><p>
Korzystanie z Serwisu Internetowego może powodować, że inni Usługobiorcy mogą mieć za pośrednictwem Serwisu oraz jego Usług Elektronicznych dostęp do danych osobowych innych Usługobiorców i innych osób.<br />
Usługobiorcy są zobowiązani do korzystania z Serwisu Internetowego w sposób zgodny z prawem i dobrymi obyczajami mając na uwadze poszanowanie danych osobowych, dóbr osobistych oraz praw autorskich i własności intelektualnej Usługodawcy, innych Usługobiorców oraz osób trzecich.<br />
Usługobiorcy są zobowiązani dołożyć należytej staranności w celu ochrony danych osobowych innych Usługobiorców, do których dostęp uzyskają za pomocą Serwisu i obowiązani są nie wykorzystywać uzyskanych danych w innych celach niż do korzystania z Serwisu i jego Usług Elektronicznych, chyba że podstawa takiego działania ma umocowanie w innych powszechnie obowiązujących przepisach prawa.<br />
                </p><h1>
8. POSTANOWIENIA KOŃCOWE
                </h1><p>
Serwis Internetowy może zawierać odnośniki do innych stron internetowych. Usługodawca namawia by po przejściu na inne strony, zapoznać się z polityką prywatności tam ustaloną. Niniejsza polityka prywatności dotyczy tylko niniejszego Serwisu Internetowego.<br />
Usługodawca stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną, a w szczególności zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.<br />
<h1>
Administrator Danych Osobowych
</h1>
Administratorem Pani/Pana danych osobowych jest firma  Piekarnia Barański,  
                </p>
                <h1>
Orzeska 90,
43-178 Ornontowice , NIP: 6420028706

Dane kontaktowe Administratora Danych Osobowych :

Właściciel firmy:
Tel.+48 502 328 989
Email:kontakt@piekarniabaranski.pl

 

Inspektor Ochrony Danych

Dane kontaktowe Inspektora Ochrony Danych  :

Właściciel firmy:
Tel.+48 502 328 989
Email:kontakt@piekarniabaranski.pl
</h1>
RODO – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).

Przetwarzanie danych osobowych: zgodnie z treścią art. 4 ust. 2 RODO, za przetwarzanie danych osobowych należy rozumieć operację lub zestaw operacji wykonywanych na danych osobowych lub zestawach danych osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką jak zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie, rozpowszechnianie lub innego rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie, usuwanie lub niszczenie.
<h1>
Przetwarzanie danych
</h1>
Przetwarzanie Pani/Pana danych osobowych będzie się odbywać na podstawie art. 6 RODO i w celu kontaktu, przygotowania oferty oraz marketingowym.<br />
Administrator powołuje się na prawnie uzasadniony interes, którym jest zbieranie danych statystycznych, analizowanie ruchu na stronie internetowej. Dokonywanie pomiarów, które pozwalają udoskonalać oferowane usługi i sprawić, że będą maksymalnie odpowiadać potrzebom,<br />
Podanie danych osobowych na stronie internetowej www.apismedia.pl jest dobrowolne. Podstawą przetwarzania danych jest Pana/Pani zgoda. Mają Państwo wpływ na przeglądarkę internetową i jej ustawienia. Odbiorcami danych osobowych mogą być Google, Facebook. Mają Państwo prawo wycofania zgody w dowolnym momencie poprzez zmianę ustawień w przeglądarce. Dane osobowe będą przetwarzane i przechowywane w zależności od okresu używania technologii. Mają Państwo prawo zażądania od administratora dostępu do moich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania tych danych, a także prawo wniesienia skargi do organu nadzorczego. Profilowanie używane jest w Google Analytics, Google AdWords, Facebook Pixel. W sytuacji wniesienia sprzeciwu wobec profilowania, prosimy zoptymalizować odpowiednio przeglądarkę.<br />
W przypadku pytań dotyczących przetwarzania danych osobowych prosimy o kontakt z Inspektorem Ochrony Danych.
<h1>
Czas przetwarzania danych
                </h1>
Pani/Pana dane osobowe będą przechowywane przez okres od 30 dni do 5 lat do czasu wykorzystywania możliwości marketingowych i analizy danych potrzebnych do prowadzenia działalności gospodarczej.
<h1>
Prawa użytkownika strony internetowej
</h1>
Posiada Pani/Pan prawo dostępu do treści swoich danych osobowych, prawo do ich sprostowania, usunięcia, jak i również prawo do ograniczenia ich przetwarzania/ prawo do cofnięcia zgody, prawo do przenoszenia danych, prawo do wniesienia sprzeciwu wobec przetwarzania Pani/Pana danych osobowych. Przysługuje Pani/Panu prawo wniesienia skargi do organu nadzorczego, jeśli Pani/Pana zdaniem, przetwarzanie danych osobowych Pani/Pana – narusza przepisy unijnego rozporządzenia RODO.
Aby skorzystać ze swoich praw skontaktuj się z Administratorem Danych
Pani/Pana dane będą przetwarzane w sposób zautomatyzowany w tym również w formie profilowania. Zautomatyzowane podejmowanie decyzji będzie odbywało się na zasadach stwierdzenie zasadności przesłanego formularza, konsekwencją takiego przetwarzania będzie automatyczne odrzucenie wiadomości noszących znamiona SPAMu.
                </div>
            </div>
        <div  className=" bg-[#fafafa]">
            {/*************** Nav Section *****************/}
            <div className="h-auto flex z-30 w-screen justify-between fixed md:flex-row ssm:flex-col md:items-center transform duration-300 text-black py-2 md:px-20 border-b-[1px] border-black backdrop-blur-md bg-[#fafafa] ssm:bg-opacity-20 md:bg-opacity-50 text-nowrap">
                <div className="flex items-center ssm:justify-between ssm:w-full md:w-auto">
                    <div className="items-center">
                        <a href="#" className="md:px-5 md:pr-10 md:flex items-center text-center">
                            <img src="/logo_czarne.png" alt="Logo" className="ssm:h-10 ssm:ml-5 md:m-0 md:h-20 md:mr-10"/>
                            <h1  className="ssm:hidden md:flex text-xl">Piekarnia Cukiernia<br/>Tomasz Barański</h1>
                        </a>
                    </div>
                    <div className="ssm:flex justify-end md:hidden">
                        <GiHamburgerMenu onClick={toggleMenu} className=" text-3xl mx-10 my-2 hover:cursor-pointer"/>
                    </div>
                    <div className="md:flex md:flex-row items-cent ssm:hidden">
                        <a href="#About" className="ssm:px-10 ssm:py-5 ssm:w-full md:px-5">O Nas</a>
                        <a href="#Products" className="ssm:px-10 ssm:py-5 ssm:w-full md:px-5">Oferta</a>
                        <a href="#Shops" className="ssm:px-10 ssm:py-5 ssm:w-full md:px-5">Sklepy</a>
                        <a href="#Contact" className="ssm:px-10 ssm:py-5 ssm:w-full md:px-5">Kontakt</a>
                    </div>
                </div>
                <div className="ssm:hidden md:flex justify-between ">
                    <a href="#Shops" className='border-black border-2 px-2 mx-3 w-max hover:cursor-pointer rounded-lg p-1'>Znajdź nas</a>
                    <a href="#Contact"className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer rounded-lg p-1'>Kontakt</a>
                </div>
                <div className={"md:hidden flex-col text-left " + (menu ? 'ssm:flex':'ssm:hidden')}>
                        <a href="#About" className="p-5 w-full rounded-2xl bg-opacity-50 m-2 mx-5">O Nas</a>
                        <a href="#Products" className="p-5 w-full rounded-2xl bg-opacity-50 m-2 mx-5">Oferta</a>
                        <a href="#Shops" className="p-5 w-full rounded-2xl bg-opacity-50 m-2 mx-5">Sklepy</a>
                        <a href="#Contact" className="p-5 w-full rounded-2xl bg-opacity-50 m-2 mx-5">Kontakt</a>
                </div>
            </div>
            {/*************** Hero Section *****************/}
            <div className="flex ssm:flex-col ssm:text-center md:flex-row md:text-left">
                {/* Left side */}
                <div className="flex flex-col md:w-1/2 sm:w-full ssm:backdrop-blur-sm md:backdrop-blur-none md:p-20 justify-center h-screen z-10 md:text-black ssm:bg-black ssm:bg-opacity-50 md:bg-transparent">
                    <h1 className=" font-Laila ssm:text-4xl md:text-5xl m-5 font-bold ssm:text-white sm:text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ssm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-black md:drop-shadow-none ">
                        Najsmaczniejsze chleby i ciasta na specjalne okazje
                    </h1>
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
                        <p className="md:w-1/2 m-5 text-xl">
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
              <div className=" md:mb-10">
                <h1 className=" text-5xl font-bold p-5">Opinie klientów</h1>
              </div>
              <div className="flex ssm:flex-col md:flex-row md:h-1/2">
                <div className=" h-3/4 md:w-1/3 flex flex-col">
                  <h5 className=" text-lg font-semibold pt-5">Patrycja U.</h5>
                  <h4 className=" text-xl font-bold p-5">"Serdecznie polecam ☺ najlepsze torty, ciasta, itp. Zawsze wszystko pięknie udekorowane ^^ A smak? Obłędny ❤ Polecam ☺"</h4>
                  <div className="flex text-4xl ssm:mx-auto md:mx-0 text-yellow-500">
                    <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>
                </div>
                <div className=" h-3/4  md:w-1/3 flex flex-col">
                  <h5 className=" text-lg font-semibold pt-5">Monika D.</h5>
                  <h4 className=" text-xl font-bold p-5">"Bardzo dziękujemy za przepyszny tort Oreo ! Byl bardzo smaczny i cudowny, córka zachwycona, jak zawsze !! polecam serdecznie!! 🍰"</h4>
                  <div className="flex text-4xl ssm:mx-auto md:mx-0 text-yellow-500">
                    <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>                
                </div>
                <div className="md:w-1/3 flex flex-col">
                  <h5 className=" text-lg font-semibold pt-5">Marta W.</h5>
                  <h4 className=" text-xl font-bold p-5">"Bardzo smaczne ciasta i desery !!!!😀😀😀"</h4>
                  <div className="flex text-4xl ssm:mx-auto md:mx-0 text-yellow-500">
                     <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>
                </div>
                
              </div>
            </div>
            {/*************** Products Section *****************/}
            <div id="Products"  className="flex ssm:flex-col md:flex-row ssm:text-center md:text-left pt-10 md:px-20">
                    {/* Left side */}
                    <div className="flex flex-col md:w-1/2 justify-center min-h-screen mx-auto">
                        <h1 className=" text-5xl m-5 font-bold">Nasze produkty - świeże składniki, tradycyjne receptury, zamówienia specjalne</h1>
                        <p className="m-5 text-xl font-light">Nasza piekarnia oferuje szeroki wybór
                            pysznych i świeżo upieczonych produktów. Stawiamy na zdrowe składniki,
                            tradycyjne receptury i możliwość zamówienia specjalnych wypieków na różne
                            okazje.</p>
                        <div className="flex ssm:flex-col md:flex-row m-5">
                            <div className="flex flex-col m-2">
                            <PiPlantFill className=" text-3xl md:m-2 ssm:mx-auto md:mx-0"/>
                              <h3 className=" text-xl font-semibold">Świeże składniki</h3>
                              <p>Nasze produkty są przygotowywane z najwyższej jakości składników, dbając o zdrowie naszych klientów.</p>
                            </div>
                            <div className="flex flex-col m-2">
                            <RiFilePaper2Fill className=" text-3xl md:m-2 ssm:mx-auto md:mx-0"/>
                              <h3 className=" text-xl font-semibold">Tradycyjne receptury</h3>
                              <p>Korzystamy z tradycyjnych receptur, które gwarantują wyjątkowy smak i aromat naszych wyrobów..</p>
                            </div>
                            
                        </div>
                    </div>
                    {/* Right side */}
                    <div className=" min-h-screen flex flex-col justify-center">
                        <div className=" grid md:grid-cols-2 m-auto md:h-min gap-5 justify-items-center ssm:m-5 md:m-0">
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
            </div>
                        {/*************** Printer Section *****************/}
                <div id="Printer"  className="flex ssm:flex-col md:flex-row ssm:text-center md:text-left md:px-20 ssm:p-5">
                    {/* Right side */}
                    <div className=" ssm:w-full md:w-[50%] md:h-screen md:p-20">
                        <img
                            src="/printer1.jpg"
                            alt="placeholder"
                            className=" ssm:object-fill md:object-cover h-full rounded-3xl mx-auto"/>
                    </div>
                    {/* Left side */}
                    <div className="flex flex-col md:w-1/2 justify-center min-h-screen mx-auto">
                        <h1 className=" text-5xl m-5 font-bold">Słodkie Innowacje - Odkryj Magię Drukarek Spożywczych</h1>
                        <p className="m-5 text-xl font-light">Drukarka spożywcza to urządzenie, które nanosi jadalne obrazy i wzory na produkty spożywcze, takie jak ciasta czy czekoladki, wykorzystując specjalne atramenty.
                        </p>
                        <div className="flex ssm:flex-col md:flex-row m-5">
                            <div className="flex flex-col m-2">
                              <h3 className=" text-xl font-semibold">Precyzja i szczegółowość</h3>
                              <p>Umożliwia tworzenie dokładnych i skomplikowanych wzorów, trudnych do osiągnięcia tradycyjnymi metodami..</p>
                            </div>
                            <div className="flex flex-col m-2">
                              <h3 className=" text-xl font-semibold">Personalizacja</h3>
                              <p>Pozwala na łatwe dodawanie imion, dedykacji i zdjęć, co tworzy wyjątkowe, spersonalizowane produkty na różne okazje.
                              </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            {/* ************** Shops Section **************** */}
            <div id="Shops" className="flex flex-col justify-between text-center pt-28">
                <h1 className=" text-5xl mb-10">Nasze sklepy</h1>
                <div className="ssm:hidden md:flex justify-center gap-5 text-2xl">
                    <div onClick={closeMaps} className={"flex border-2 border-black p-2 px-5 font-bold items-center rounded-xl transform duration-500 " + (maps ? 'bg-transparent text-black' : 'text-white bg-black')}><p>Galeria</p></div>
                    <div onClick={openMaps} className={"flex border-2 border-black p-2 px-5 font-bold items-center rounded-xl transform duration-500 " + (maps ? 'bg-black text-white' : 'bg:transparent text-black')}><p>Mapa</p></div>
                </div>
                {/* Galeria */}
                <div className={"ssm:mt-20 md:mt-0 md:p-20 lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-20 mx-auto justify-items-center " + (maps ? 'hidden' : 'grid')}>
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
                <div className={"" + (maps ? 'block': 'hidden')}>
                <iframe className=" w-full h-[80vh] p-20" src="https://www.google.com/maps/d/embed?mid=1V7ctuI4y6VI-DoLf3QCgNvPTI0pRrNs&hl=pl&ehbc=2E312F"></iframe>
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
                        <a href="https://www.facebook.com/PiekarniaBaranski" className="px-2"><MdFacebook /> </a>
                        <a href="https://www.instagram.com/piekarnia_cukierniabaranski?igsh=ajh5Mnc3N21kOTVu" className="px-2"><AiFillInstagram /></a>
                    </div>
                </div>
                <div className=" flex ssm:flex-col md:flex-row justify-center border-t-2 border-black p-5 m-10">
                    <p className="ssm:py-2 md:py-0">© 2024 Piekarnia Cukiernia Tomasz Barański. Wszelkie prawa zastrzeżone.
                    </p>
                    <a onClick={togglePolityka} className=" underline px-5 ssm:py-2 md:py-0 cursor-pointer">Polityka prywatności</a> 
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

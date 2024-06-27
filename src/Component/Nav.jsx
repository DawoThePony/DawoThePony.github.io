import { useState, useRef } from "react";

export const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    function openMenu(){
        setToggleMenu(true);
    }
    function closeMenu(){
        setToggleMenu(false);
    }

    const linkStyle = 'hover:bg-slate-600 hover:bg-opacity-20 rounded-full p-2'

    const Link = ({destination, style, name}) => <a href={destination} className={style}>{name}</a>

    return ( <> 
    {/* Desktop Nav */}
    <div className=" z-50 w-screen fixed flex items-center justify-between text-black font-sans bg-[#282828] opact bg-opacity-[46%] text-white" >
        <div className="ssm:hidden sm:hidden md:flex m-2 lg:flex w-screen items-center justify-evenly">
            <Link destination={'#Piekarnia'} style={linkStyle} name={'Piekarnia'}/>
            <Link destination={'#Cukiernia'} style={linkStyle} name={'Cukiernia'}/>
            <Link destination={'#Sklepy'} style={linkStyle} name={'Sklepy'}/>
                <a href="#" className=" transform scale-[300%] translate-y-[25vh] transition duration-500 hover:scale-100 hover:translate-y-0"><img src="/logo_biale.png" alt="" className=" w-24" /></a> 
            <Link destination={'#ONas'} style={linkStyle} name={'O Nas'}/>
            <Link destination={'facebook.com'} style={linkStyle} name={'Facebook'}/>
            <Link destination={'#Kontakt'} style={linkStyle} name={'Kontakt'}/>
        </div>
    </div>
        
    {/* mobile menu */}
    </>
);
};
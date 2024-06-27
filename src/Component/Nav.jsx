import { useState, useRef } from "react";

export const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    function openMenu(){
        setToggleMenu(true);
    }
    function closeMenu(){
        setToggleMenu(false);
    }

    const linkStyle = 'px-4 text-center'

    const Link = ({destination, style, name}) => <a href={destination} className={style}>{name}</a>

    return ( <> 
    {/* Desktop Nav */}
    <div className=" z-50 w-screen fixed flex items-center justify-evenly text-black py-2 px-5 border-b-2 border-black backdrop-blur-lg" >
            <div className="flex items-center justify-start w-full">
                
                <a href="#" className={linkStyle}>Piekarnia Cukiernia <br /> Tomasz Barański</a>
                <Link destination={''} style={linkStyle} name={'O nas'} />
                <Link destination={''} style={linkStyle} name={'Oferta'} />
                <Link destination={''} style={linkStyle} name={'Sklepy'} />
                <Link destination={''} style={linkStyle} name={'Kontakt'} />
            </div>
            <div className=" flex justify-between">
                <a href="#" className='border-black border-2 px-2 mx-3 w-max hover:cursor-pointer'>Znajdź nas</a>
                <a href="#" className='border-black border-2 px-2 mx-3 bg-black text-white hover:cursor-pointer'>Kontakt</a>
            </div>
    </div>
     </>
);
};
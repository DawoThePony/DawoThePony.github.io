import { useState } from "react";
import { MdOutlineBakeryDining } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    function openMenu(){
        setToggleMenu(true);
    }
    function closeMenu(){
        setToggleMenu(false);
    }



    const linkStyle = 'hover:bg-slate-400 rounded-full px-5 py-2 '
    const hamburgerLinkStyle = 'hover:bg-slate-400 px-5 py-2 my-4'

    const Link = ({destination, style, name}) => <a href={destination} className={style}>{name}</a>

    return ( <> <div className=" z-50 h-15 w-screen fixed flex items-center justify-between p-5 text-black font-sans bg-black bg-opacity-5">
        <div className=" tracking-wider items-center text-xl">
            <a href="#" className="flex">
            <p>Piekarnia Barański</p> <MdOutlineBakeryDining className=" m-px"/> 
            </a>
        </div>
        <div className="ssm:hidden sm:hidden md:flex lg:flex  min-w-max betwe">
            <Link destination={'#Piekarnia'} style={linkStyle} name={'Piekarnia'}/>
            <Link destination={'#Cukiernia'} style={linkStyle} name={'Cukiernia'}/>
            <Link destination={'#Sklepy'} style={linkStyle} name={'Sklepy'}/>
            <Link destination={'#ONas'} style={linkStyle} name={'O Nas'}/>
            <Link destination={'#Kontakt'} style={linkStyle} name={'Kontakt'}/>
        </div>
        <div className="ssm:block sm:block md:hidden lg:hidden">
            {toggleMenu ? (
                <RxHamburgerMenu onClick={closeMenu} className="text-2xl cursor-pointer"/>
            ):(<RxHamburgerMenu onClick={openMenu} className="text-2xl rotate-90 cursor-pointer"/>)}
        </div>
    </div>
    {toggleMenu ? (
<div></div>
    ):(
        <div className="bg-black bg-opacity-5 p-5 lg:hidden md:hidden sm:block ssm:block fixed w-screen top-12">
        <ul> 
            <li className={hamburgerLinkStyle}>
                <Link destination={'#Piekarnia'} name={'Piekarnia'}/>
            </li>
            <li className={hamburgerLinkStyle}>
                <Link destination={'#Cukiernia'} name={'Cukiernia'}/>
            </li>
            <li className={hamburgerLinkStyle}> 
                <Link destination={'#Sklepy'} name={'Sklepy'}/>
            </li>
            <li className={hamburgerLinkStyle}>
                <Link destination={'#O Nas'} name={'O Nas'}/>
            </li>
            <li className={hamburgerLinkStyle}>
                <Link destination={'#Kontakt'} name={'Kontakt'}/>
            </li>
        </ul>
    </div>
    )
    } 
    </>
);
};
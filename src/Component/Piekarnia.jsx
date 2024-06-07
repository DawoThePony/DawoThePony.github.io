import { GiD10 } from "react-icons/gi";

export const Piekarnia = () => { 
    const galleryStyle = 'w-52 h-60 bg-white m-5'
    return(
        <>
            <div id="Piekarnia" className=" min-h-screen h-min bg-orange-200 p-10 pt-24">
                <p className=" text-center relative text-3xl">Nasze Wyroby</p>
               <div className=" relative flex flex-wrap justify-between p-10">
                    <div className={galleryStyle}></div>
                    <div className={galleryStyle}></div>
                    <div className={galleryStyle}></div>
                    <div className={galleryStyle}></div>
                    <div className={galleryStyle}></div>
                    <div className={galleryStyle}></div>
               </div>
            </div>
        </>
    )
};
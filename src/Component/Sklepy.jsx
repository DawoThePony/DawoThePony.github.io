export const Sklepy = () => { 
    const galleryStyle = 'w-72 h-96 bg-white m-5'

    return(
        <>
        <div id="Sklepy" className=" min-h-screen h-min bg-red-200 p-10 pt-24">
            <p className=" text-center relative text-3xl">Nasze Sklepy Firmowe</p>
            <div className=" relative flex flex-wrap justify-between p-10 text-center center">
                <div className={galleryStyle}>
                    Ornontowice ul. Orzeska 90 <br />
                    32 235 46 42
                </div>
                <div className={galleryStyle}>
                    Czuchów, ul. Kochanowskiego 42 <br />
                    512 111 610</div>
                <div className={galleryStyle}>
                    Czerwionka, ul. Rynek 7 <br />
                    512 967 611
                </div>
                <div className={galleryStyle}>
                    Leszczyny ul. Morcinka 4 <br />
                    881 947 197
                </div>
                <div className={galleryStyle}>
                    Leszczyny ul. Ks. Pojdy 81 <br />
                    504 859 688
                </div>
            </div>
            <div className=" w-3/4"></div>
        </div>
        </>
    )
};

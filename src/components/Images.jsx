import './Images.css'

function Images() {
    return (
        <>
            <div className='container'>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src="/public/photos/photo1.png" width={140}></img>
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">PRODUCT OWNER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Bill Mahoney</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src="/public/photos/photo2.png" width={140}></img>
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">ART DIRECTOR</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Saba Cabrera</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src="/public/photos/photo3.png" width={140}></img>
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">TECH LEAD</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Shae Le</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src="/public/photos/photo4.png" width={140}></img>
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">UX DESIGNER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Skylah Lu</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src="/public/photos/photo5.png" width={140}></img>
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">DEVELOPER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Griff Richards</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src="/public/photos/photo6.png" width={140}></img>
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">DEVELOPER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Stan John</h3>
                </div>

            </div>



        </>

    )
}

export default Images
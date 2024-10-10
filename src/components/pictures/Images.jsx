import './Images.css'
import photo1 from '/public/photos/photo1.png'
import photo2 from '/public/photos/photo2.png'
import photo3 from '/public/photos/photo3.png'
import photo4 from '/public/photos/photo4.png'
import photo5 from '/public/photos/photo5.png'
import photo6 from '/public/photos/photo6.png'

export default function Images() {
    return (
        <>
            <div className='container'>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src={photo1} width={140} />
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">PRODUCT OWNER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Bill Mahoney</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src={photo2} width={140} />
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">ART DIRECTOR</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Saba Cabrera</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src={photo3} width={140} />
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">TECH LEAD</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Shae Le</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src={photo4} width={140} />
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">UX DESIGNER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Skylah Lu</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src={photo5} width={140} />
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">DEVELOPER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Griff Richards</h3>
                </div>
                <div className="card flex-col">
                    <div className='flex card_menu'>
                        <img src={photo6} width={140} />
                        <h2 className="  [writing-mode:vertical-rl] text-xs artist">DEVELOPER</h2>
                    </div>
                    <h3 className="font-semibold name_artist">Stan John</h3>
                </div>

            </div>
        </>

    )
}

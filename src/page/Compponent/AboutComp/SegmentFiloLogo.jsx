import React from 'react'
import BgFiloLogo from '../../../assets/BgFiloLogo.svg'
import HeadFiloLogo from '../../../assets/HeadFiloLogo.svg'
import TangkaiWKiri from '../../../assets/TangkaiWKiri.svg'
import TangkaiWKanan from '../../../assets/TangkaiWKanan.svg'
import KartuFiloLogo from './KartuFiloLogo.jsx'
import Maknaburung11 from '../../../assets/Maknaburung11.png'
import Maknasayap12 from '../../../assets/Maknasayap12.png'
import Maknaekor21 from '../../../assets/Maknaekor21.png'
import Maknalingkaran22 from '../../../assets/Maknalingkaran22.png'

const SegmentFiloLogo = () => {
  return (
    <div className="flex flex-col w-full mx-auto bg-cover lg:max-w-[1920px] h-auto -mt-24 mb-0 pb-20 justify-center" style={{backgroundImage:`url(${BgFiloLogo})`}}>
        <div className='w-full h-full mt-32 px-0'>
            <div className='flex flex-row w-full justify-between'>
                <img src={TangkaiWKiri} alt="" className='w-64'/>
                <img src={HeadFiloLogo} alt="" className='w-[680px]'/>
                <img src={TangkaiWKanan} alt="" className='w-64' />
            </div>
        </div>
        <div className='grid grid-rows-2 grid-cols-2 gap-x-36 gap-y-32 h-full mt-10 px-20'>
            <KartuFiloLogo title="Burung Phoenix" imgsrc={Maknaburung11} desc="Melambangkan semangat berapi-api yang tak pernah padam dan kehadirannya yang menjadi penerang di sekelilingnya."/>
            <KartuFiloLogo title="Sayap" imgsrc={Maknasayap12} desc="Gestur membentangkan sayap bermakna organisasi ini sebagai wadah kolaborasi untuk menuju tempat yang lebih tinggi."/>
            <KartuFiloLogo title="Ekor Berapi" imgsrc={Maknaekor21} desc="Bermakna semangat dalam diri yang kuat, dan jumlah ekor merepresentasikan jumlah program studi yang ada di FILKOM UB."/>
            <KartuFiloLogo title="Lingkaran Kuning" imgsrc={Maknalingkaran22} desc="Lingkaran kuning bermakna cahaya yang memancarkan aura baik tanpa henti."/>
        </div>
    </div>
  )
}

export default SegmentFiloLogo
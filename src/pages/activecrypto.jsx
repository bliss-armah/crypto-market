import React, {useState} from 'react'
// import Navibar from '../component/Navibar'
import Assetmodal from '../component/Assetmodal'
// import Cryptomodal from '../component/Cryptomodal'
import Filter from '../component/Filter'
import Cryptolist from '../component/Cryptolist'

function activeCrypto() {
  const [showModal, setShowModal] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [addCrypto, setAddCrypto] = useState(false)


  const closeModal = () => setShowModal(false)
  const closeFilter = () => setShowFilter(false)

  return (
    <div>
      <Navibar />
      {/* <div className='w-full h-[69px] bg-green-400'></div> */}

      <div className='container mx-auto h-[885.44px] mt-[30px] mb-[36.56px]'>
        <div className='h-[76.2px] pl-[41.3px] pr-[46.55px] flex justify-between'>
          <span className='font-normal text-[29.4999px] text-[#101828] leading-9 pt-[20.06px]'>Market</span>
          <div className='w-[336px] h-[47.88] flex justify-between items-center'>
            <button 
            onClick={() => setShowFilter(true)}
            className='w-[134.52px] h-[47.88px] bg-white border border-[#D0D5DD] rounded-[9.43997px] text-[18.8799px] 
              shadow-[0px_1.18px_2.35999px_rgba(16, 24, 40, 0.05)] font-sans flex items-center justify-center gap-[35px]'>
              Filter
              <svg width="30" height="27" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.94 10L14 13.093L17.06 10L18 10.9569L14 15L10 10.9569L10.94 10Z" fill="black"/>
              </svg>
            </button>
            <button 
            onClick={() => setShowModal(true)}
            className='w-[118.77px] h-[44.54px] bg-[rgba(12,76,49,0.81)] rounded-[4.68106px] text-white font-sans font-normal'>
              Add Assets
            </button>
          </div>
        </div>
        <div className='h-[45px] mt-[10px] pl-[24.8px] pr-[46.55px] pt-[11.8px] border-b-[0.235999px]'>
          <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px]'>
            <li>Name</li>
            <li>Symbol</li>
            <li>Price</li>
            <li>24H Change</li>
            <li>Total Supply</li>
            <li>Market Cap</li>
          </ul>
        </div> 
        <Cryptolist visible={addCrypto}/>
      </div>
      <Filter visible={showFilter} onClose={closeFilter}/>
      <Assetmodal visible={showModal} onClose={closeModal}/>
    </div>
  )
}

export default activeCrypto
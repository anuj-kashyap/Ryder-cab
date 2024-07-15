import React from 'react'
import ps from '../assets/play_store.png'
import as from '../assets/app_store.png'

function Download() {
  return (
    <div className='max-w-full flex-col mx-auto justify-center content-center'>
        <div>
            <h1 className='font-bold text-6xl mb-14 mt-7 flex justify-center'>Download Our APP</h1>
        </div>
        <div className='flex justify-center w-full cursor-pointer mb-10 space-x-36'>
            <a href="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jan0324&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1707570-med-hasem-py-Evergreen-Jan0324-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700076783011871_creativeid_662052581180_device_c&gad_source=1&gclid=Cj0KCQjwkdO0BhDxARIsANkNcrd2yxF1nKvgzNiVLRJWb4faJos_lzL5rLdmbqMgo2DUJV35uiN0O-QaAt80EALw_wcB&gclsrc=aw.ds">
            <img src={ps} alt="" className='w-72 rounded-lg shadow-lg hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out' />
            </a>
            <a href="https://www.apple.com/in/app-store/">
            <img src={as} alt="" className='w-72 rounded-lg shadow-lg hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out' />
            </a>
        </div>
    </div>
  )
}

export default Download
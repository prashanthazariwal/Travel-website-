import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-10 py-2 flex justify-between mt-4 items-center fixed z-10 '>
       <h1 className='text-3xl font-bold '>TO GO</h1>
       <ul className='flex text-xl font-normal text-[#868687] gap-20 '>
        <li className='cursor-pointer hover:font-semibold '>Services</li>
        <li className='cursor-pointer hover:font-semibold '>Case Studies</li>
        <li className='cursor-pointer hover:font-semibold '>Contact</li>
       </ul>
       <div className='bg-blue-500 text-lg font-normal text-white px-12 py-2 rounded-full cursor-pointer hover:scale-105
       ease-linear '>Book A Call</div>
    </nav>
  )
}

export default Navbar

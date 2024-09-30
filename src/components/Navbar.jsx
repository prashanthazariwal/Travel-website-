import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-10 py-2 flex justify-between  items-center fixed z-10 '>
       <h1 className='text-3xl font-bold '>TO GO</h1>
       <ul className='flex text-xl font-light gap-20'>
        <li>Services</li>
        <li>Case Studies</li>
        <li>Contact</li>
       </ul>
       <div className='bg-blue-500 text-lg font-normal text-white px-12 py-2 rounded-full'>Book A Call</div>
    </nav>
  )
}

export default Navbar

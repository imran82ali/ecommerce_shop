import React from 'react'
import { ShoppingCart } from 'lucide-react';
import  Link  from 'next/link';


const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white '> 
        <div className='container w-full h-full flex justify-between items-center' > 
            <h1 className='font-bold text-2xl' > <Link href={"/"}>   Shop  </Link></h1>
            <button className='relative text-[25px]'>
                <ShoppingCart />
                <span className='cart-item-quantity'> 0 </span>
            </button>
            
            </div> 
        
    </div>
  )
}

export default Navbar
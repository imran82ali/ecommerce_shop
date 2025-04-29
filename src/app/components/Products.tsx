
import React from 'react'
import { groq } from "next-sanity";
import {client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image";
import Link from 'next/link';
import Image from 'next/image'
import Card from './Card';

const Products = async() => {
    

    const product = await client.fetch(groq `*[_type=="product"]{
    name,
    images,
    price,
     }`);


    // mt-[125px]
  return (
    <div className='bg-[#f8f8f8] w-full py-12'>
        <div className='container'>
            <h1 className='text-2xl font-bold'>Best Selling Products</h1>
            <h1>Enjoy upto 50%</h1>
            
        </div>
        {/* grid md:grid-cols-2 lg:grid-cols-4 mt-6 mr-5  */}
        <div className='flex justify-center gap-x-10 mt-10  bg-white pt-10 pb-5 drop-shadow-md rounded-lg'>
             { product.map((product:any, index:number) => (
            <Card key={index} product={product}/>

            ))}


        </div>
    </div>
  )
}

export default Products
import { urlForImage } from "@/sanity/lib/image";
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'

const Card = ({product}:any) => {
  console.log(product.slug)
  return (
    <Link href={`/product/${product.slug}`}>
            <div>
                <Image 
                src = {urlForImage(product.images && product.images[0]).url()} 
                alt={product.slug}
                width={200}
                height={200}
                className='object-cover h-32 mx-auto'
                >

                </Image>
                <div className='text-center py-5'> 
                    <h1 className='font-bold'> {product.name} </h1>
                    <h1 className='text-gray-600'> ${product.price} </h1>
                </div>
            </div>
            </Link>
  )
}

export default Card
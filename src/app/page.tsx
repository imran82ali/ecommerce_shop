import Image from "next/image";
import { groq } from "next-sanity";
import {client } from "@/sanity/lib/client"
import { Hero } from "./components";
import Products from "./components/Products";


export default async function Home() {
  const product = await client.fetch(groq `*[_type=="product"]`);
  console.log(product);

  return (
    <div>
      <Hero/>
      <Products/>
    <h1 className="text-3xl font-bold underline">
      
    </h1>
    </div>
  )
}
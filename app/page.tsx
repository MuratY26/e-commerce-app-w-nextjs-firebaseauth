"use client"
import Image from 'next/image'
import Slider from "../components/Slider/Slider"
import EditorList from "@/components/ProductList/EditorList";


export default function Home() {

  return (
    
    <main className="">   
      <Slider />  
      <EditorList/>
    </main>
  )
}

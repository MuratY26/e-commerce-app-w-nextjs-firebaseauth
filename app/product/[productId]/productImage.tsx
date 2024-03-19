"use client"
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
export default function ProductImage(props : { image : string | undefined }) {

    return (
        <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <TransformComponent >
              <Image width={300} height={400} src={props.image || ""}  alt="test" />
            </TransformComponent>
            <div className="flex items-center justify-center mx-auto my-0 border-b-slate-950 text-blue-900 w-full">
              <button className="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl    font-medium rounded-full text-2xl  text-center me-8 mb-4 w-10 h-10 my-2" onClick={() => zoomIn()}>
                +
              </button>
              <button className="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl    font-medium rounded-full text-2xl  text-center  mb-4 w-10 h-10 my-2"  onClick={() => zoomOut()}>
                -
              </button>
            </div>
          </>
        )}
      </TransformWrapper> 
    )
    
}
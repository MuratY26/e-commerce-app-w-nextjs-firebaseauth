"use client";
  import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { EachSlideEffect, CustomIndicator } from "./Slider.styled";

const buttonStyle = {
  width: "30px",
  background: "black",
  borderRadius: "45%",
  display: "flex",
  margin: "auto",
};

const Slider = () => {
  const buttonStyle = {
    width: "30px",
    background: "black",
    borderRadius: "45%",
    display: "flex",
    margin: "auto",
  };

  return (
    <div className="mt-1">
      <Slide
        autoplay={true}
        indicators={(index, active) => (
          <CustomIndicator className={active ? "active" : ""} />
        )}
        transitionDuration={700}
        duration={2000}
      >
        <EachSlideEffect slideimage="https://akn-ss.a-cdn.akinoncloud.com/cms/2023/09/22/4b9724c7-4b2b-4d63-a49e-6be93a8e0f8a.jpg"></EachSlideEffect>
        <EachSlideEffect slideimage="https://akn-ss.a-cdn.akinoncloud.com/cms/2023/09/22/eb12863c-289f-4a57-9b28-e9a2da0d93cf.jpg"></EachSlideEffect>
        <EachSlideEffect slideimage="https://akn-ss.a-cdn.akinoncloud.com/cms/2023/09/22/644872d5-8bdf-4e9e-821f-6e0ec5e69986.jpg"></EachSlideEffect>
      </Slide>
    </div>
  );
};

export default Slider;

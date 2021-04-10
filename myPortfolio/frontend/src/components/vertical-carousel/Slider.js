import React, { useState } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SlideItems from "./items";
import "./styles.css";
import { range } from "lodash";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
 
  const length = slides.length;

  const [{ y }, set] = useSpring(() => ({ y: 0 }))
  const bind = useGesture (( { down, delta, first}) => {
    if(delta[1] <= 400 && delta[1] >= -400){
      console.log('delta', delta[1])
    }
    
    
    set({ y: down ? delta[1] : 0 });

    if ( first && delta[1] <= -200 ){
      console.log('next called', current)
      console.log('event', event)
      setCurrent(current => current === length - 1 ? 0 : current + 1);
      console.log('current', current)
      
    }else if ( first && delta[1]  >= 200) {
      console.log('previous called', current)
    setCurrent(current => current === 0 ? length - 1 : current - 1);
    console.log('current', current)
    
    }

    
  })

  const nextImg = () => {
    console.log('next called', current)
    console.log('length', length)
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log('current', current)
  };

  const previousImg = () => {
    console.log('previous called', current)
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log('current', current)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    // TODO: add default image
    return null;
  }

  return (
    <section className="slider">
      <AiFillCaretDown className="down-arrow" onClick={previousImg} />
      <AiFillCaretUp className="up-arrow" onClick={nextImg} />
      {SlideItems.map((slide, index) => {
        return (
          <animated.div
            className={index === current ? "slide active" : "slide"}
            key={index}
            style={{
              pointerEvents: "all",
            }}
          >
            {index === current && (
              <animated.img
              style={{
                opacity: y.interpolate({
                  map: Math.abs,
                  range: [0,300],
                  output: [1, 0], 
                  extrapolate: 'clamp'
                }),
                transform: y.interpolate((y) => 
                `translate3d(0, ${y}px, 0)`),
                zIndex: 25
              }}
              {...bind()}
                src={slide.url}
                alt="add alt txt"
                className="fg"

              />
            )}
          </animated.div>
        );
      })}
    </section>
  );
};

export default ImageSlider;


// const throwAway = {{
//   transform: up
//     .interpolate({
//       map: Math.abs,
//       range: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
//       output: [0, 30, 60, 90, 120, -120, -90, , -60, -30, 120],
//       extrapolate: "clamp",
//     })
//     .interpolate((up) => `translateY(${up}%)`),

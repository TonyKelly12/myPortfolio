import React, { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import SlideItems from './items'; 
import './styles.css'
import { range } from 'lodash';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [nxt, setNextState] = useState(false);
  const [prev, setPrevState] = useState(false);
  const length = slides.length;

  const { up } = useSpring({
    up: nxt ? 1 : 0,
  })

  const nextImg = () =>{ 
    resetState();
    setNextState(true);
    setPrevState(false);
    setCurrent( current === length -1 ? 0 : current + 1);
   
  }

  const resetState = () => {
    setNextState(false);
    setPrevState(false);
  }

  const previousImg = () =>{
    resetState();
    setNextState(false);
    setPrevState(true);
    setCurrent(current === 0 ? length - 1 : current -1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    // TODO: add default image
    return null;
  }

 
  
 

  return (
    <section className='slider'>
      <AiFillCaretDown className='down-arrow' onClick={previousImg}/>
      <AiFillCaretUp className='up-arrow' onClick={nextImg}/>
      {SlideItems.map((slide, index) =>{
        return (
          <animated.div
            className={index === current ? 'slide active' : 'slide'}
            key={index} style={{
              pointerEvents: 'all'
            }}
            >
              {index === current && (
              
               
                
                 <animated.img  src={slide.url} alt='add alt txt'className="fg" 
                 style={{
              transform: up.interpolate({
                range: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                output: [0, 30, 60, 90, 120,-120, -90, ,-60, -30,  0]
              }).interpolate( up => `translateY(${up}%)`),
            }}
                 
                 />
                
               
                
              )}
            </animated.div>
        
      )})}
    </section> 
  )
}

export default ImageSlider